<script>
export default {
    props: {
        status: String,
    },
    computed: {
        colorBedge() {
            switch (this.status) {
                case 'To Do':
                    return 'bg-blue-100 border-blue-300 text-blue-800'
                case 'Complete':
                    return 'bg-green-100 border-green-300 text-green-800'
                case 'In Process':
                    return 'bg-yellow-100 border-yellow-300 text-yellow-800'
                case 'On Hold':
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
        class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded border"
        :class="colorBedge"
        >{{ status }}</span
    >
</template>
