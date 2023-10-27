import { createRouter, createWebHistory } from 'vue-router'
import TaskMain from '../views/TasksMain.vue'
import DashboardPage from '../views/DashboardPage.vue'
import TaskDetails from '../views/TaskDetails.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TaskMain,
        },
        {
            path: '/taskdeails/:id',
            name: 'tasksdeails',
            component: TaskDetails,
        },
        {
            path: '/dashboard',
            name: 'dashbaord',
            component: DashboardPage,
        },
    ],
})

export default router
