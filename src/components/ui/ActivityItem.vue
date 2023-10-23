<script>
import { useTasksStore } from "@/stores/tasks";

export default {
    name: "ActivityItem",
    data() {
        return {
            editable: false,
            tasks: useTasksStore(),
        };
    },
    props: {
        activity: {
            type: Object,
            default: () => ({
                id: '',
                name: '',
                complete: false
            })
        },
        idTask: String,
    },
    computed: {
        complete() {
            return this.activity.complete;
        },
    },
    methods: {
        changeStatusActivity() {
            this.activity.complete = !this.activity.complete;
            this.tasks.updateActivity(this.idTask, this.activity)
        },
        enableEditable() {
            if (!this.activity?.complete) {
                this.editable = true;
                this.$nextTick(() => {
                    this.$refs.taskActivityInput.focus();
                });
            }
        },
        focusoutInput() {
            this.editable = false;
            if (this.activity.name.trim() !== '' && this.activity.id !== '' && this.idTask !== '') {
                this.tasks.updateActivity(this.idTask, this.activity)
            } else {
                this.tasks.addActivity(this.idTask, this.activity)
            }
        },
    },
};
</script>
<template>
    <div class="flex justify-between items-start border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent cursor-pointer"
        :class="complete ? '' : 'bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150'">
        <div class="inline-flex items-center space-x-2" @click="enableEditable">
            <div class="w-auto">
                <svg v-if="!complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-green-500" @click="changeStatusActivity">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-if="complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-gray-500" @click="changeStatusActivity">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div :class="!complete ? '' : 'text-slate-500 line-through'" class="w-[90vw]">
                <div @click="enableEditable" v-if="!editable" class="w-full">{{ activity.name }}</div>
                <input ref="taskActivityInput" type="text" v-if="editable" v-model="activity.name"
                    class="block border-none outline-0 w-full bg-transparent" @focusout="focusoutInput"
                    autocomplete="off" />
            </div>
        </div>
    </div>
</template>