<script>
import BadgeLevel from '@/components/ui/BadgeLevel.vue'
import BadgeStatus from '@/components/ui/BadgeStatus.vue'
import BadgeTime from '@/components/ui/BadgeTime.vue'
import BadgeProgress from '@/components/ui/BadgeProgress.vue'
import ButtonStatusTask from '@/components/buttons/ButtonStatusTask.vue'
import ButtonOptions from '@/components/buttons/ButtonOptions.vue'
import { useTasksStore } from '@/stores/tasks'
import { formatDateToHumanReadable } from '@/utils/dateUtils'

export default {
    name: 'CardTask',
    components: {
        BadgeLevel,
        BadgeStatus,
        BadgeTime,
        BadgeProgress,
        ButtonStatusTask,
        ButtonOptions,
    },
    props: {
        task: Object,
    },
    data() {
        return {
            isPressed: false,
            editableTitle: false,
            tasks: useTasksStore(),
        }
    },
    computed: {
        titleTask() {
            return this.task.name
        },
        formatDateToHumanReadable() {
            return formatDateToHumanReadable(this.task.created)
        },
        bgCard() {
            let classDynamic = ''
            if (this.isPressed) {
                classDynamic += 'pressable-div '
            }
            switch (this.task.status) {
                case 'To Do':
                    return (classDynamic += 'bg-blue-100 bg-opacity-40')
                case 'Complete':
                    return (classDynamic += 'bg-green-100 bg-opacity-40')
                case 'Hold':
                    return (classDynamic += 'bg-red-100 bg-opacity-40')
                default:
                    return (classDynamic += 'bg-white-100 bg-opacity-40')
            }
        },
    },
    methods: {
        startPress() {
            this.isPressed = true
            setTimeout(() => {
                this.endPress() // Finaliza la animación
                this.navigateToTask() // Navega a la ruta deseada
            }, 200) // 500 milisegundos como ejemplo de duración de la animación
        },
        endPress() {
            this.isPressed = false
        },
        navigateToTask() {
            this.$router.push({ path: `/taskdeails/${this.task.id}` })
        },
        rename() {
            this.editableTitle = !this.editableTitle
        },
        saveName(e) {
            let newTask = this.task
            newTask.name = e.target.value
            this.tasks.updateTask(newTask)
        },
        deleteTask() {
            this.tasks.deleteTask(this.task.id)
        },
    },
}
</script>
<template>
    <div
        class="w-full m-2 p-4 border rounded-3xl border-black hover:shadow-lg cursor-pointer transition-transform"
        :class="bgCard"
        @click="startPress"
    >
        <div class="flex justify-between">
            <h4 v-if="!editableTitle" class="text-2xl font-bold">
                {{ titleTask }}
            </h4>
            <input
                v-if="editableTitle"
                v-model="titleTask"
                class="text-2xl font-bold border-none outline-0 w-full bg-transparent"
                @click.stop=""
                @focusout="rename"
                @keyup="saveName"
            />
            <ButtonOptions :rename="rename" :delete="deleteTask" />
        </div>
        <BadgeStatus :status="task.status" />
        <BadgeLevel :level="task.level" />
        <div class="grid grid-cols-2 gap-2">
            <BadgeTime :created="formatDateToHumanReadable" />
            <div class="flex justify-end">
                <BadgeProgress :task="task" />
                <div>
                    <ButtonStatusTask :task="task" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.pressable-div {
    transform: scale(0.95);
}
</style>
