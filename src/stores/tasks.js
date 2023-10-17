import { defineStore } from 'pinia';
const STORE_NAME = 'tasks';
const tasks = localStorage.getItem(STORE_NAME);
export const useTasksStore = defineStore(STORE_NAME, {
    state: () => ({
        statusTask: 'All Tasks',
        tasks: tasks ? JSON.parse(tasks) : [],
    }),
    getters: {
        getTasks() {
            return this.tasks.sort((a, b) => {
                const dateA = new Date(a.created);
                const dateB = new Date(b.created);
                return dateB - dateA;
            });
        },
    },
    actions: {
        setTasksStatus(status) {
            this.statusTask = status;
        },
        addTask() {
            const task = {
                id: '04023544-44040TT404',
                name: 'Task new',
                status: 'In Progress',
                level: 'Medium',
                created: '2023-10-04',
                activities: [
                    {
                        name: 'Activity 1',
                        status: 'In Progress',
                        created: '2023-10-03',
                    },
                    {
                        name: 'Activity 2',
                        status: 'In Progress',
                        created: '2023-10-03',
                    },
                    {
                        name: 'Activity 3',
                        status: 'In Progress',
                        created: '2021-08-01',
                    },
                ],
            };
            this.tasks.push(task);
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
        }

    },
});