<script>
import BadgeLevel from '@/components/ui/BadgeLevel.vue'
import { useTasksStore } from '@/stores/tasks'
import { useModalStore } from '@/stores/modal'
export default {
    components: {
        BadgeLevel,
    },
    data() {
        return {
            isDropdownOpen: false,
            levels: ['Low', 'Medium', 'High'],
            selectedLevel: 'Low',
            task: useTasksStore(),
            modal: useModalStore(),
            nameTask: '',
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
        selectElement(e) {
            this.selectedLevel = e.target.innerText
            this.toggleDropdown()
        },
        addNewTask() {
            this.task
                .addTask(this.nameTask, this.selectedLevel)
                .then((response) => {
                    this.modal.toggle()
                    this.$router.push({ path: `/taskdeails/${response}` })
                })
                .catch((error) => {
                    console.error('Error al agregar tarea:', error)
                })
        },
    },
}
</script>
<template>
    <h3 class="mb-4 text-xl font-medium text-gray-900">New Task</h3>
    <form class="space-y-6" action="#" @submit.prevent="addNewTask">
        <div>
            <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Name</label
            >
            <input
                v-model="nameTask"
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="A name task"
                required
                autocomplete="off"
            />
        </div>
        <div>
            <label
                for="level"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Level Task</label
            >
            <div class="relative mt-2">
                <button
                    id="dropdownLevel"
                    type="button"
                    class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    @click="toggleDropdown"
                >
                    <BadgeLevel :level="selectedLevel" />
                </button>
                <ul
                    :class="isDropdownOpen ? '' : 'hidden'"
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3"
                >
                    <li
                        v-for="(level, index) in levels"
                        id="listbox-option-0"
                        :key="index"
                        class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-slate-200"
                        role="option"
                        @click="selectElement"
                    >
                        <BadgeLevel :level="level" />
                    </li>
                </ul>
            </div>
        </div>
        <button
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
            Create
        </button>
    </form>
</template>
