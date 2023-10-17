<script>
import Chip from "@/components/inputs/Chip.vue";
import CardTask from "@/components/ui/CardTask.vue";
import { useTasksStore } from "@/stores/tasks";
import { formatDateToHumanReadable } from "../utils/dateUtils";
import ButtonAddTask from "@/components/inputs/ButtonAddTask.vue";

export default {
  name: "TasksMain",
  setup() {
    const tasks = useTasksStore();
    return {
      tasks,
    };
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  components: {
    Chip,
    CardTask,
    ButtonAddTask,
  },
  computed: {
    formatDateToHumanReadable() {
      return formatDateToHumanReadable;
    },
  },
  methods: {
    handleAddTasksClick() {
      this.tasks.addTask();
    },
    progressPercent(id) {
      return this.tasks.getProgressByTaskId(id);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectElement(e) {
      let item = document.getelementbyid("dropdownLevel");
      item.value = e.target.innerText;
    }
  },
};
</script>
<template>
  <div
    class="fixed inset-0 flex items-center justify-center top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full">
    <div class="bg-black opacity-50 fixed inset-0"></div>
    <div class="relative max-h-full w-1/2">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-lg border">
        <button type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
          data-modal-hide="authentication-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900">New Task</h3>
          <form class="space-y-6" action="#">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input type="text" name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="A name task" required>
            </div>
            <div class="flex flex-col items-start">
              <div>
                <button @click="toggleDropdown" id="dropdownLevel"
                  class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                  type="button">Level Task <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border absolute"
                  :class="!isDropdownOpen ? 'hidden' : ''">
                  <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDividerButton" @click="selectElement">
                    <li class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      A
                    </li>
                    <li class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      B
                    </li>
                    <li class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      C
                    </li>

                  </ul>
                </div>
              </div>

            </div>
            <button type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>

          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="max-h-screen overflow-y-auto flex space-x-4 p-4 hide-scroll">
    <Chip text-chip="All Tasks" />
    <Chip text-chip="To Do" />
    <Chip text-chip="Complete" />
    <Chip text-chip="In Process" />
    <Chip text-chip="On Hold" />
  </div>
  <div class="grid grid-cols-1 mr-5 gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
    <CardTask v-for="(task, index) in tasks.getTasks" :key="index" :title="task.name" :status="task.status"
      :level="task.level" :created="formatDateToHumanReadable(task.created)" :progress="progressPercent(task.id)"
      :id="task.id" />
  </div>
  <div class="fixed bottom-4 right-4">
    <ButtonAddTask :handleAddTasks="handleAddTasksClick"></ButtonAddTask>
  </div>
</template>
