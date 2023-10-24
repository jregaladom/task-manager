<script>
import { useTasksStore } from "@/stores/tasks";
export default {
    name: "ButtonStatusTask",
    props: {
        id: String,
        typeStatus: {
            type: String,
            default: "default",
        },
    },
    data() {
        return {
            tasks: useTasksStore(),
            task: useTasksStore().getTaskById(this.id),
        };
    },
    methods: {
        completeTask() {
            this.tasks.completeTask(this.id);
        },
        restartTask() {
            this.tasks.restartTask(this.id);
        },
    },
    computed: {
        status() {
            return this.task.status;
        },
    },
};
</script>
<template>
    <span v-if="status == 'To Do' && typeStatus != 'Hold'" @click.stop="completeTask"
        class="inline-flex items-center justify-center w-9 h-9 text-sm font-semibold text-green-800 bg-green-400 rounded-full hover:shadow-md hover:bg-green-500 pressable-div">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>
        <span class="sr-only">Icon description</span>
    </span>
    <span v-if="status == 'Complete' && typeStatus != 'Hold'" @click.stop="restartTask"
        class="inline-flex items-center justify-center w-9 h-9 text-sm font-semibold text-red-800 bg-red-400 rounded-full hover:shadow-md hover:bg-red-500 pressable-div">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span class="sr-only">Icon description</span>
    </span>
    <span v-if="typeStatus == 'Hold'" @click.stop="restartTask"
        class="inline-flex items-center justify-center w-9 h-9 text-sm font-semibold text-red-800 bg-red-400 rounded-full hover:shadow-md hover:bg-red-500 pressable-div ml-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="sr-only">Icon description</span>
    </span>
</template>

<style scoped>
.pressable-div:active {
    transform: scale(0.95);
}
</style>