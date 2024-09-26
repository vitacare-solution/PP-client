<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink
        href="/"
        class="flex items-center text-blue-700 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/assets/img/pulse.svg"
          class="h-8"
          style="fill: #0000ff"
          alt="pulse point Logo"
        />
        <span
          class="self-center text-2xl font-medium whitespace-nowrap dark:text-white"
          >Pulse Point</span
        >
      </NuxtLink>
      <div class="flex md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse">
        <NuxtLink
          :to="routePath"
          type="button"
          class="bg-white text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 border-blue-700 border font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ routeLabel }}
        </NuxtLink>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

const route = useRoute();
const routePath = ref("");
const routeLabel = ref("");

onMounted(() => {
  if (route.path === "/login") {
    routePath.value = "/register";
    routeLabel.value = "Create account";
  } else if (route.path === "/register") {
    routePath.value = "/login";
    routeLabel.value = "Login";
  }
});

watch(route, (newRoute) => {
  if (newRoute.path === "/login") {
    routePath.value = "/register";
    routeLabel.value = "Create account";
  } else if (newRoute.path === "/register") {
    routePath.value = "/login";
    routeLabel.value = "Login";
  }
});
</script>
