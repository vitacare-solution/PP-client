<template>
  <div
  v-if="props.message"
  class="fixed top-14 right-4 z-10 flex justify-center py-2 transition-all duration-300 ease-in-out"
>
  <div
    class="bg-green-100 border border-green-400 text-green-700 px-7 py-3 rounded relative"
    role="alert"
      aria-live="assertive"
  >
    <span class="block sm:inline">{{ message }}</span>
    <span
      @click="!!props.message"
      class="absolute top-1/2 left-1.5 ml-2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer border rounded-md  bg-green-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  message: String,
});

</script>