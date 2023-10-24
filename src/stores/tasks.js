import { defineStore } from 'pinia';
import { getUUID } from '../utils/uuid';
import { dateNow } from '../utils/dateUtils'

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
            //Order activities from task by index property asc
            task.activities.sort((a, b) => {
                return a.index - b.index;
            });
            console.log(task);
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
        updateActivity(idTask, activity) {
            const task = this.tasks.find((task) => task.id === idTask);
            const index = task.activities.findIndex(
                (act) => act.id === activity.id
            );
            task.activities[index] = activity;
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
        },
        addActivity(idTask, nameActivity) {
            const task = this.tasks.find((task) => task.id === idTask);
            const activity = {
                id: `act_${getUUID()}`,
                name: nameActivity,
                complete: false,
                index: task.activities.length - 1,
            };
            task.activities.push(activity);
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
        },
        addTask(nameTask, selectedLevel) {
            const uuid = getUUID();

            return new Promise((resolve, reject) => {
                // ... lógica de tu acción
                const task = {
                    id: uuid,
                    name: nameTask,
                    status: 'In Progress',
                    level: selectedLevel,
                    created: dateNow(),
                    activities: [
                        {
                            id: `act_${getUUID()}`,
                            name: 'First activity of the task',
                            complete: false,
                            index: 0,
                        },
                        {
                            id: ``,
                            name: '',
                            complete: false,
                            index: 9999999999,
                        }
                    ],
                };
                this.tasks.push(task);
                localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks))
                //return uuid;
                // Si la acción es exitosa, resuelve con el resultado deseado
                resolve(uuid);

                // Si hay un error, rechaza con el error
                reject(error);
            });


        }

    },
});