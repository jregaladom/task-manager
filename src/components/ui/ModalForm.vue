<script>
import { useModalStore } from '@/stores/modal'

export default {
    name: 'ModalForm',
    data() {
        return {
            modalStore: useModalStore(),
        }
    },
    computed: {
        classModal() {
            return this.isOpen ? 'A' : 'B'
        },
    },
    methods: {
        closeModal() {
            this.modalStore.toggle()
        },
    },
}
</script>
<template>
    <div
        :class="{ '': modalStore.isOpen, hidden: !modalStore.isOpen }"
        class="fixed inset-0 flex items-center justify-center top-0 left-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full"
    >
        <div class="bg-black opacity-50 fixed inset-0"></div>
        <div class="relative max-h-full w-1/2">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow-lg border">
                <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal"
                    @click="closeModal"
                >
                    <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <slot name="contentModal"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
