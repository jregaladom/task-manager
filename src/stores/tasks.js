import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        statusTask: 'All Tasks',
        tasks: [
            {
                id: '0404044-4404040404',
                name: 'Task 1941',
                status: 'In Progress',
                level: 'Medium',
                created: '2023-10-03',
                activities: [
                    {
                        name: 'Activity 1',
                        status: 'In Progress',
                        created: '2023-10-01',
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
            },
            {
                id: '0404044-4404040404',
                name: 'Task 1941',
                status: 'In Progress',
                level: 'Medium',
                created: '2023-10-01',
                activities: [
                    {
                        name: 'Activity 1',
                        status: 'In Progress',
                        created: '2023-10-01',
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
            },
            {
                id: '0404044-AD4P54555',
                name: 'Task 2',
                status: 'In Progress',
                level: 'Medium',
                created: '2023-10-02',
                activities: [
                    {
                        name: 'Activity 1',
                        status: 'In Progress',
                        created: '2021-08-01',
                    },
                    {
                        name: 'Activity 2',
                        status: 'In Progress',
                        created: '2021-08-01',
                    },
                    {
                        name: 'Activity 3',
                        status: 'In Progress',
                        created: '2021-08-01',
                    },
                ]
            },
        ]
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
        }

    },
});