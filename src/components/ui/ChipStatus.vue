<script>
import { useTasksStore } from '@/stores/tasks'

export default {
    name: 'ChipStatus',
    props: {
        textChip: String,
    },
    data() {
        return {
            tasks: useTasksStore(),
        }
    },
    computed: {
        colorBedge() {
            switch (this.textChip) {
                case 'All Tasks':
                    return 'bg-purple-100'
                case 'To Do':
                    return 'bg-blue-100'
                case 'Complete':
                    return 'bg-green-100'
                case 'In Process':
                    return 'bg-yellow-100'
                case 'Hold':
                    return 'bg-red-100'
                default:
                    return 'bg-gray-100'
            }
        },
        clasStatusTask() {
            if (!this.isSelected) {
                return 'text-black bg-white'
            } else {
                return 'text-white bg-gray-800'
            }
        },
        isSelected() {
            return this.tasks.statusTask === this.textChip
        },
        countTasks() {
            return this.tasks.countTasksByStatus(this.textChip)
        },
    },
    methods: {
        handleClick() {
            this.statusTask = this.textChip
            this.tasks.setTasksStatus(this.textChip)
        },
    },
}
</script>
<template>
    <div
        class="flex min-w-fit w-auto h-10 justify-center items-center m-1 font-medium py-1 px-2 rounded-full border border-gray-800 cursor-pointer transition-transform pressable-div hover:shadow-lg"
        :class="clasStatusTask"
        @click="handleClick"
    >
        <div class="text-xs font-medium flex-initial">
            {{ textChip }}
            <span
                class="text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                :class="colorBedge"
                >{{ countTasks }}</span
            >
        </div>
    </div>
</template>

<style scoped>
.pressable-div:active {
    transform: scale(0.95);
}
</style>
