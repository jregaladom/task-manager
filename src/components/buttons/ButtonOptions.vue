<script>
export default {
    name: 'ButtonOptions',
    props: {
        rename: {
            type: Function,
            default: () => {},
            requered: true,
        },
        delete: {
            type: Function,
            default: () => {},
            requered: true,
        },
    },
    data() {
        return {
            isOptionsExpanded: false,
        }
    },
    methods: {
        renameIn() {
            this.rename()
            this.isOptionsExpanded = false
        },
        deleteIn() {
            this.delete()
            this.isOptionsExpanded = false
        },
    },
}
</script>
<template>
    <div class="relative text-lg w-1/2 flex justify-end">
        <button
            class="inline-flex left-0 items-center p-2 text-sm font-medium text-right text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            @click.stop="isOptionsExpanded = !isOptionsExpanded"
            @blur="isOptionsExpanded = false"
        >
            <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
            >
                <path
                    d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
            </svg>
        </button>
        <transition
            enter-active-class="transform transition duration-500 ease-custom"
            enter-class="-translate-y-1/2 scale-y-0 opacity-0"
            enter-to-class="translate-y-0 scale-y-100 opacity-100"
            leave-active-class="transform transition duration-300 ease-custom"
            leave-class="translate-y-0 scale-y-100 opacity-100"
            leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
            <div
                v-show="isOptionsExpanded"
                class="z-10 absolute top-10 bg-white divide-y divide-gray-100 rounded-lg w-44 border border-black shadow-md"
            >
                <ul class="py-2 text-sm">
                    <li @click.stop="renameIn">
                        <a
                            href="#"
                            class="inline-flex justify-start text-center px-4 py-2 hover:bg-gray-100 text-gray-500 w-full"
                        >
                            Rename
                        </a>
                    </li>
                </ul>
                <div class="py-2">
                    <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        @click.stop="deleteIn"
                        >Delete</a
                    >
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.ease-custom {
    transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
