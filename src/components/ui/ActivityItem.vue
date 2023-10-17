<script>
import { useTasksStore } from "@/stores/tasks";

export default {
    name: "ActivityItem",
    setup() {
        const tasks = useTasksStore();

        const handleupdateStatusActivity = (idTask, idActivity) => {
            tasks.updateStatusActivity(idTask, idActivity);
        };

        return {
            tasks,
            handleupdateStatusActivity,
        };
    },
    props: {
        activity: Object,
        idTask: String,
    },
    computed: {
        complete() {
            return this.activity.complete;
        },
    },
    methods: {
        changeStatusActivity() {
            console.log(this.activity.id);
            console.log(this.idTask);
            this.handleupdateStatusActivity(this.idTask, this.activity.id)
        },
    },
};
</script>
<template>
    <div class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent cursor-pointer"
        :class="complete ? '' : 'bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150'"
        @click="changeStatusActivity">
        <div class="inline-flex items-center space-x-2">
            <div>
                <svg v-if="complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-slate-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg v-if="!complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-orange-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
            <div :class="!complete ? '' : 'text-slate-500 line-through'">{{ activity.name }} {{ complete }}</div>
        </div>
    </div>
</template>