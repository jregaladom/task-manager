<script>
import Chip from "@/components/ui/Chip.vue";
import CardTask from "@/components/ui/CardTask.vue";
import { useTasksStore } from "@/stores/tasks";

import ButtonAddTask from "@/components/buttons/ButtonAddTask.vue";
import Modal from '@/components/ui/Modal.vue';
import FormNewTask from '@/components/forms/FormNewTask.vue';
import { useModalStore } from "../stores/modal";
export default {
  name: "TasksMain",
  setup() {
    const tasks = useTasksStore();
    const modal = useModalStore();
    return {
      tasks,
      modal
    };
  },
  data() {
    return {
      modalIsOpen: false
    };
  },
  components: {
    Chip,
    CardTask,
    ButtonAddTask,
    Modal,
    FormNewTask
  },
  methods: {
    handleAddTasksClick() {
      this.modal.toggle();
    },
  },
};
</script>
<template>
  <Modal>
    <template v-slot:contentModal>
      <FormNewTask />
    </template>
  </Modal>
  <div class="max-h-screen overflow-y-auto flex space-x-4 p-4 hide-scroll">
    <Chip text-chip="All Tasks" />
    <Chip text-chip="To Do" />
    <Chip text-chip="Complete" />
    <Chip text-chip="On Hold" />
  </div>
  <div class="grid grid-cols-1 mr-5 gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
    <CardTask v-for="(task, index) in tasks.getTasks" :key="index" :task="task" />
  </div>
  <div class="fixed bottom-4 right-4">
    <ButtonAddTask :handleAddTasks="handleAddTasksClick"></ButtonAddTask>
  </div>
</template>
