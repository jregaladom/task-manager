<script>
export default {
  props: {
    progress: Number,
  },
  computed: {
    colorPoint() {
      switch (true) {
        case this.progress >= 0 && this.progress < 20:
          return "bg-red-500";
        case this.progress >= 20 && this.progress < 40:
          return "bg-organge-500";
        case this.progress >= 40 && this.progress < 60:
          return "bg-yellow-500";
        case this.progress >= 60 && this.progress < 80:
          return "bg-purple-500";
        case this.progress == 100:
          return "bg-green-500";
        default:
          return "bg-purple-500";
      }
    },
  },
};
</script>
<template>
  <span
    class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
  >
    <span class="w-2 h-2 mr-1 rounded-full" :class="colorPoint"></span>
    Progress: {{ progress }}%
  </span>
</template>
