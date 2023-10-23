<script>
import { useTasksStore } from "@/stores/tasks";
import BadgeStatus from "@/components/ui/BadgeStatus.vue";
import BadgeLevel from "@/components/ui/BadgeLevel.vue";
import BadgeTime from "@/components/ui/BadgeTime.vue";
import BadgeProgress from "@/components/ui/BadgeProgress.vue";
import ButtonChangeStatus from "@/components/inputs/ButtonChangeStatus.vue";
import ActivityItem from "../components/ui/ActivityItem.vue";
export default {
    name: "TaskDetails",
    components: {
        BadgeStatus,
        BadgeTime,
        BadgeLevel,
        BadgeProgress,
        ButtonChangeStatus,
        ActivityItem
    },
    mounted() {
        this.id = this.$route.params.id;
    },
    data() {
        return {
            id: null,
            task: useTasksStore().getTaskById(this.$route.params.id)
        };
    },
    computed: {
        // task() {
        //     return useTasksStore().getTaskById(this.$route.params.id);
        // },
    },
};

</script>
<template>
    <div class="w-full bg-white p-8 rounded-xl shadow shadow-slate-300 h-screen">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h4 class="text-2xl font-bold">{{ task.name }}</h4>
            </div>
            <div class="inline-flex space-x-2 items-center">
                <BadgeStatus :status="task.status" />
                <BadgeLevel :level="task.level" />
            </div>

        </div>
        <div class="grid grid-cols-2 gap-2 pt-3">
            <BadgeTime :created="task.created" />
            <div class="flex justify-end">
                <BadgeProgress :progress="task.progress" />
                <div>
                    <ButtonChangeStatus />
                </div>
            </div>
        </div>
        <div id="tasks">
            <ActivityItem :activity="activity" v-for="(activity, index) in task.activities" :key="index" :idTask="id" />
            <ActivityItem :idTask="''" />
        </div>
        <p class="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
    </div>
</template>