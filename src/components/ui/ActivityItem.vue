<script>
import { useTasksStore } from '@/stores/tasks'

export default {
    name: 'ActivityItem',
    props: {
        activity: {
            type: Object,
            default: () => ({
                id: '',
                name: '',
                complete: false,
            }),
        },
        idTask: String,
    },
    data() {
        return {
            editable: false,
            tasks: useTasksStore(),
            task: useTasksStore().getTaskById(this.idTask),
            isEditing: false,
            defaultTextNewActivity: 'Click for add a task',
        }
    },
    computed: {
        complete() {
            return this.activity.complete
        },
        statusTask() {
            return this.task.status
        },
        textActivity() {
            return this.activity.name === ''
                ? this.defaultTextNewActivity
                : this.activity.name
        },
        textColorActivity() {
            return this.activity.name === '' ? true : false
        },
    },
    methods: {
        changeStatusActivity() {
            if (this.task.status !== 'Hold') {
                let newActivity = this.activity
                newActivity.complete = !this.activity.complete
                this.tasks.updateActivity(this.idTask, newActivity)
            }
        },
        enableEditable() {
            if (this.activity.name === '') {
                this.$refs.editableDiv.innerText = ''
            }
        },
        disableEditing(e) {
            this.isEditing = false
            if (this.activity.name.trim() !== '' && this.activity.id !== '') {
                let newActivity = this.activity
                newActivity.name = e.target.innerText
                this.tasks.updateActivity(this.idTask, newActivity)
            } else {
                const newName = e.target.innerText
                if (newName !== '') {
                    this.tasks.addActivity(this.idTask, newName)
                    e.target.innerText = this.defaultTextNewActivity
                }
            }
        },
    },
}
</script>
<template>
    <div
        class="flex justify-between items-start border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent cursor-pointer"
        :class="
            complete
                ? ''
                : 'bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150'
        "
    >
        <div class="inline-flex items-center space-x-2">
            <div class="w-auto">
                <svg
                    v-if="!complete"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    :class="
                        statusTask == 'Hold'
                            ? 'text-gray-500'
                            : 'text-green-500'
                    "
                    @click="changeStatusActivity"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <svg
                    v-if="complete"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-gray-500"
                    @click="changeStatusActivity"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
            <div
                :class="!complete ? '' : 'text-slate-500 line-through'"
                class="w-10/12 border-none outline-0 bg-transparent focus:border-none focus:outline-0"
            >
                <div
                    ref="editableDiv"
                    :contenteditable="!activity.complete"
                    :class="
                        statusTask === 'Hold' || textColorActivity
                            ? 'text-gray-500'
                            : ''
                    "
                    @input="updateText"
                    @blur="disableEditing"
                    @click="enableEditable"
                >
                    {{ textActivity }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
[contenteditable] {
    outline: 0px solid transparent;
}
</style>
