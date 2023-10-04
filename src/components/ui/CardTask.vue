<script>
import BadgeLevel from "@/components/ui/BadgeLevel.vue";
import BadgeStatus from "@/components/ui/BadgeStatus.vue";
import BadgeTime from "@/components/ui/BadgeTime.vue";
import BadgeProgress from "@/components/ui/BadgeProgress.vue";
import ButtonChangeStatus from "@/components/inputs/ButtonChangeStatus.vue";

export default {
  name: "CardTask",
  props: {
    title: String,
    status: String,
    level: String,
    created: String,
    progress: Number,
  },
  components: {
    BadgeLevel,
    BadgeStatus,
    BadgeTime,
    BadgeProgress,
    ButtonChangeStatus,
  },
};
</script>
<template>
  <div class="w-full m-2 p-4 bg-white border rounded-3xl border-black">
    <h4 class="text-2xl font-bold">{{ title }}</h4>
    <BadgeStatus :status="status" />
    <BadgeLevel :level="level" />
    <div class="grid grid-cols-2 gap-2">
      <BadgeTime :created="created" />
      <div class="flex justify-end">
        <BadgeProgress :progress="progress" />
        <div>
          <ButtonChangeStatus />
        </div>
      </div>
    </div>
  </div>
</template>
