<script>
import BadgeLevel from "@/components/ui/BadgeLevel.vue";
import BadgeStatus from "@/components/ui/BadgeStatus.vue";
import BadgeTime from "@/components/ui/BadgeTime.vue";
import BadgeProgress from "@/components/ui/BadgeProgress.vue";
import ButtonStatusTask from "@/components/buttons/ButtonStatusTask.vue";
import ButtonOptions from "@/components/buttons/ButtonOptions.vue";

export default {
  name: "CardTask",
  data() {
    return {
      isPressed: false,
    };
  },
  props: {
    title: String,
    status: String,
    level: String,
    created: String,
    progress: Number,
    id: String,
  },
  components: {
    BadgeLevel,
    BadgeStatus,
    BadgeTime,
    BadgeProgress,
    ButtonStatusTask,
    ButtonOptions
  },
  methods: {
    startPress() {
      console.log("startPress");
      this.isPressed = true;
      setTimeout(() => {
        this.endPress(); // Finaliza la animación
        this.navigateToTask(); // Navega a la ruta deseada
      }, 200); // 500 milisegundos como ejemplo de duración de la animación
    },
    endPress() {
      this.isPressed = false;
    },
    navigateToTask() {
      this.$router.push({ path: `/taskdeails/${this.id}` });
    },
  },
};
</script>
<template>
  <div class="w-full m-2 p-4 bg-white border rounded-3xl border-black hover:shadow-lg cursor-pointer transition-transform"
    :class="{ 'pressable-div': isPressed }" @click="startPress">

    <div class="flex justify-between">
      <h4 class="text-2xl font-bold">{{ title }}</h4>
      <ButtonOptions />
    </div>

    <BadgeStatus :status="status" />
    <BadgeLevel :level="level" />
    <div class="grid grid-cols-2 gap-2">
      <BadgeTime :created="created" />
      <div class="flex justify-end">
        <BadgeProgress :progress="progress" />
        <div>
          <ButtonStatusTask :id="id" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pressable-div {
  transform: scale(0.95);
}
</style>