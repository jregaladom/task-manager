<script>
export default {
  name: "CardTask",
};
</script>
<template>
  <div class="w-full m-2 p-4 bg-white border rounded-3xl border-black">
    <h4 class="text-2xl font-bold">Tasks 1</h4>
    <span
      class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-yellow-300"
      >Yellow</span
    >
    <span
      class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
      >Red</span
    >
    <div class="grid grid-cols-2 gap-2">
      <span
        class="text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-2.5 h-2.5 mr-1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>

        3 days ago
      </span>
      <div class="flex justify-end">
        <span
          class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
        >
          <span class="w-2 h-2 mr-1 bg-purple-500 rounded-full"></span>
          Progress: 90%
        </span>
        <div>
          <span
            class="inline-flex items-center justify-center w-9 h-9 text-sm font-semibold text-green-800 bg-green-400 rounded-full"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
