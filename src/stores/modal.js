import { defineStore } from 'pinia'

const STORE_NAME = 'modal'

export const useModalStore = defineStore(STORE_NAME, {
    state: () => ({
        isOpen: false,
    }),
    getters: {
        getState() {
            return this.isOpen
        },
    },
    actions: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
    },
})
