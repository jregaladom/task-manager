<script>
// import useTasks from "@/stores/tasks";
import { useTasksStore } from "@/stores/tasks";
import { computed } from "vue";

export default {
  name: "Chip",
  setup(props) {
    const tasks = useTasksStore();
    const isSelected = computed(() => tasks.statusTask === props.textChip);
    const handleStatusTasksClick = (status) => {
      tasks.setTasksStatus(status);
    };
    return {
      isSelected,
      handleStatusTasksClick,
    };
  },
  props: {
    textChip: String,
  },
  data() {
    return {};
  },
  computed: {
    colorBedge() {
      switch (this.textChip) {
        case "All Tasks":
          return "bg-purple-100";
        case "To Do":
          return "bg-blue-100";
        case "Complete":
          return "bg-green-100";
        case "In Process":
          return "bg-yellow-100";
        case "On Hold":
          return "bg-red-100";
        default:
          return "bg-gray-100";
      }
    },
    clasStatusTask() {
      if (!this.isSelected) {
        return "text-black bg-white";
      } else {
        return "text-white bg-gray-800";
      }
    },
  },
  methods: {
    handleClick() {
      this.statusTask = this.textChip;
      this.handleStatusTasksClick(this.textChip);
    },
  },
};
</script>
<template>
  <div
    @click="handleClick"
    class="flex min-w-fit w-auto h-10 justify-center items-center m-1 font-medium py-1 px-2 rounded-full border border-gray-800 cursor-pointer"
    :class="clasStatusTask"
  >
    <div class="text-xs font-medium flex-initial">
      {{ textChip }}
      <span
        class="text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
        :class="colorBedge"
        >0</span
      >
    </div>
  </div>
</template>
