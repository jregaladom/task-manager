<script>
import Chip from "@/components/inputs/Chip.vue";
import CardTask from "@/components/ui/CardTask.vue";

export default {
  name: "TasksMain",
  components: {
    Chip,
    CardTask,
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
    <CardTask title="Tarea 1" status="To Do" level="Low" created="4 days ago" :progress="20" />
  </div>
</template>
