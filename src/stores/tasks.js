import { defineStore } from 'pinia';
import { getUUID } from '../utils/uuid';

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
        getTaskById: (state) => (id) => {
            const task = state.tasks.find((task) => task.id === id);
            return task;

        },
        getProgressByTaskId: (state) => (id) => {
            const task = state.tasks.find((task) => task.id === id);
            const activitiesDone = task.activities.filter(activity => activity.complete === true);

            const done = activitiesDone.length === undefined ? 1 : activitiesDone.length;
            const total = task.activities.length === undefined ? 1 : task.activities.length;

            if (total === 0 && done === 0) return 0;

            return Math.round((done / total) * 100);
        },
    },
    actions: {
        setTasksStatus(status) {
            this.statusTask = status;
        },
        updateStatusActivity(idTask, idActivity) {
            const task = this.tasks.find((task) => task.id === idTask);
            const index = task.activities.findIndex(
                (act) => act.id === idActivity
            );
            task.activities[index].complete = !task.activities[index].complete;
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
        },
        addTask() {
            const task = {
                id: getUUID(),
                name: 'Task new',
                status: 'In Progress',
                level: 'Medium',
                created: '2023-10-04',
                activities: [
                    {
                        name: 'Activity 1',
                        complete: false,
                        created: '2023-10-04',
                    },
                    {
                        name: 'Activity 2',
                        complete: false,
                        created: '2023-10-04',
                    },
                    {
                        name: 'Activity 3',
                        complete: false,
                        created: '2023-10-04',
                    },

                ],
            };
            this.tasks.push(task);
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
        }

    },
});