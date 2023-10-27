<script>
import ChipStatus from '@/components/ui/ChipStatus.vue'
import CardTask from '@/components/ui/CardTask.vue'
import { useTasksStore } from '@/stores/tasks'

import ButtonAddTask from '@/components/buttons/ButtonAddTask.vue'
import ModalForm from '@/components/ui/ModalForm.vue'
import FormNewTask from '@/components/forms/FormNewTask.vue'
import { useModalStore } from '../stores/modal'
export default {
    name: 'TasksMain',
    components: {
        ChipStatus,
        CardTask,
        ButtonAddTask,
        ModalForm,
        FormNewTask,
    },
    setup() {
        const modal = useModalStore()
        return {
            modal,
        }
    },
    data() {
        return {
            modalIsOpen: false,
            tasks: useTasksStore(),
        }
    },
    methods: {
        handleAddTasksClick() {
            this.modal.toggle()
        },
    },
}
</script>
<template>
    <ModalForm>
        <template #contentModal>
            <FormNewTask />
        </template>
    </ModalForm>
    <div class="max-h-screen overflow-y-auto flex space-x-4 p-4 hide-scroll">
        <ChipStatus text-chip="All Tasks" />
        <ChipStatus text-chip="To Do" />
        <ChipStatus text-chip="Complete" />
        <ChipStatus text-chip="Hold" />
    </div>
    <div
        class="grid grid-cols-1 mr-5 gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
    >
        <CardTask
            v-for="(task, index) in tasks.getTasks"
            :key="index"
            :task="task"
        />
    </div>
    <div class="fixed bottom-4 right-4">
        <ButtonAddTask :handle-add-tasks="handleAddTasksClick"></ButtonAddTask>
    </div>
</template>
