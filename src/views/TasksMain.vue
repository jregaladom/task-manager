<script>
import Chip from "@/components/inputs/Chip.vue";

export default {
  name: "TasksMain",
  components: {
    Chip,
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
</template>
