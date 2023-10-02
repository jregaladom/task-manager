import { defineStore } from 'pinia';

export default defineStore('tasks', {
    state: () => ({
        statusTask: 'All Tasks',
    }),
    actions: {
        setTasksStatus(status) {
            this.statusTask = status;
        },
    },
});