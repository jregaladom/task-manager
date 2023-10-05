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

    const handleAddTasks = () => {
      tasks.addTask();
    };

    return {
      tasks,
      handleAddTasks,
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
      this.handleAddTasks();
    },
  },
};
</script>
<template>
  <div class="max-h-screen overflow-y-auto flex space-x-4 p-4 hide-scroll">
    <Chip text-chip="All Tasks" />
    <Chip text-chip="To Do" />
    <Chip text-chip="Complete" />
    <Chip text-chip="In Process" />
    <Chip text-chip="On Hold" />
  </div>

  <div class="grid grid-cols-1 mr-5 gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
    <CardTask v-for="(task, index) in tasks.getTasks" :key="index" :title="task.name" :status="task.status"
      :level="task.level" :created="formatDateToHumanReadable(task.created)" :progress="20" />
  </div>
  <div class="fixed bottom-4 right-4">
    <ButtonAddTask :handleAddTasks="handleAddTasks"></ButtonAddTask>
  </div>
</template>
