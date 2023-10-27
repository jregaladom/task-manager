import { computed } from 'vue';
<script>
export default {
    props: {
        level: String,
    },
    computed: {
        colorBedge() {
            switch (this.level) {
                case 'Low':
                    return 'bg-green-100 border-green-300 text-green-800'
                case 'Medium':
                    return 'bg-yellow-100 border-yellow-300 text-yellow-800'
                case 'High':
                    return 'bg-red-100 border-red-300 text-red-800'
                default:
                    return 'bg-gray-100 border-gray-300 text-gray-800'
            }
        },
    },
}
</script>
<template>
    <span
        class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
        :class="colorBedge"
        >{{ level }}</span
    >
</template>
