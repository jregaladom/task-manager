<script>
export default {
    name: "ButtonReturn",
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },

};
</script>
<template>
    <div>
        <button @click="goBack"
            class="bg-pink-400 hover:bg-pink-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:shadow-md w-1/12 justify-center flex pressable-div">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        </button>
    </div>
</template>
<style scoped>
.pressable-div:active {
    transform: scale(0.95);
}
</style>