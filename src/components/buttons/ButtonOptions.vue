<script>
export default {
    name: "ButtonOptions",
    methods: {
        toggleDropdown() {
            const dropdown = document.getElementById("dropdownDots");
            dropdown.classList.toggle("hidden");
        },
    },
}
</script>
<template>
    <button @click.stop="toggleDropdown" id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50 "
        type="button">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path
                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDots"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 border border-black dropdown-toggle ">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-gray-500">Dashboard</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-gray-500 ">Settings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-gray-500">Earnings</a>
            </li>
        </ul>
        <div class="py-2">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Separated
                link</a>
        </div>
    </div>
</template>
<style scoped>
.dropdown-toggle {
    position: absolute;
    /* margin: 0px;

    top: 100%; */
    left: 0;
}
</style>