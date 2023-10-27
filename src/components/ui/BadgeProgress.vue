<script>
export default {
    props: {
        task: Object,
    },
    computed: {
        colorPoint() {
            switch (true) {
                case this.task.progress >= 0 && this.task.progress < 20:
                    return 'bg-red-500'
                case this.task.progress >= 20 && this.task.progress < 40:
                    return 'bg-organge-500'
                case this.task.progress >= 40 && this.task.progress < 60:
                    return 'bg-yellow-500'
                case this.task.progress >= 60 && this.task.progress < 80:
                    return 'bg-purple-500'
                case this.task.progress == 100:
                    return 'bg-green-500'
                default:
                    return 'bg-purple-500'
            }
        },
        getProgress() {
            const activitiesDone = this.task.activities.filter(
                (activity) => activity.complete === true,
            )
            const done =
                activitiesDone.length === undefined ? 1 : activitiesDone.length
            const total =
                this.task.activities.length === undefined
                    ? 1
                    : this.task.activities.length - 1
            if (total === 0 && done === 0) return 0
            return Math.round((done / total) * 100)
        },
    },
}
</script>
<template>
    <span
        class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
    >
        <span class="w-2 h-2 mr-1 rounded-full" :class="colorPoint"></span>
        Progress: {{ getProgress }}%
    </span>
</template>
