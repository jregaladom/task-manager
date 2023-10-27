<script>
import { useTasksStore } from "@/stores/tasks";

export default {
  name: "ActivityItem",
  data() {
    return {
      editable: false,
      tasks: useTasksStore(),
      task: useTasksStore().getTaskById(this.idTask)
    };
  },
  props: {
    activity: {
      type: Object,
      default: () => ({
        id: "",
        name: "",
        complete: false,
      }),
    },
    idTask: String,
  },
  computed: {
    complete() {
      return this.activity.complete;
    },
    statusTask() {
      return this.task.status;
    },
  },
  methods: {
    changeStatusActivity() {
      if (this.task.status !== 'Hold') {
        this.activity.complete = !this.activity.complete;
        this.tasks.updateActivity(this.idTask, this.activity);
      }
    },
    enableEditable() {
      if (!this.activity?.complete && this.task.status !== 'Hold') {
        this.editable = true;
        this.$nextTick(() => {
          this.$refs.taskActivityInput.focus();
        });
      }
    },
    enableEditableRow() {
      if (this.activity.name === '' && this.task.status !== 'Hold') {
        this.enableEditable()
      }
    },
    focusoutInput() {
      this.editable = false;
      if (this.activity.name.trim() !== "" && this.activity.id !== "") {
        this.activity.name = this.$refs.taskActivityInput.value;
        this.tasks.updateActivity(this.idTask, this.activity);
      } else {
        const newName = this.$refs.taskActivityInput.value;
        if (newName !== "") {
          this.tasks.addActivity(this.idTask, newName);
        }
      }
    },
  },
};
</script>
<template>
  <div
    class="flex justify-between items-start border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent cursor-pointer"
    :class="complete
      ? ''
      : 'bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150'
      ">
    <div class="inline-flex items-center space-x-2" @click="enableEditableRow">
      <div class="w-auto">
        <svg v-if="!complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6 " @click="changeStatusActivity"
          :class="statusTask == 'Hold' ? 'text-gray-500' : 'text-green-500'">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-if="complete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6 text-gray-500" @click="changeStatusActivity">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div :class="!complete ? '' : 'text-slate-500 line-through'" class="w-[90vw]">
        <div @click="enableEditable" v-if="!editable" class="w-full"
          :class="statusTask === 'Hold' ? 'text-gray-500' : ''">
          {{ activity.name }}
        </div>
        <input ref="taskActivityInput" type="text" :value="activity.name" v-if="editable"
          class="block border-none outline-0 w-full bg-transparent" @focusout="focusoutInput" autocomplete="off" />
      </div>
    </div>
  </div>
</template>
