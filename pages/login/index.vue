<template>
  <div>
    <ToastError :message="loginError" />
    <ToastSuccess :message="loginSuccess" />
    <div class="flex-grow flex items-center justify-center mt-32 mb-32">
      <div
        class="mt-7 bg-white border border-gray-200 rounded-md shadow-md dark:bg-neutral-900 dark:border-neutral-700 md:min-w-[30rem] min-w-[20rem]"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1
              class="block text-2xl font-normal text-gray-800 dark:text-white"
            >
              Sign in
            </h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-neutral-400">
              Welcome back!
            </p>
          </div>

          <div class="mt-5">
            <form @submit.prevent="handleSubmit">
              <div class="grid gap-y-4">
                <div>
                  <label
                    for="email"
                    class="block text-sm mb-2 text-gray-400 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    placeholder="Enter your email"
                    aria-describedby="email-error"
                  />
                  <p
                    v-if="emailError"
                    class="text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    {{ emailError }}
                  </p>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm mb-2 dark:text-white text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    placeholder="Enter your password"
                    aria-describedby="password-error"
                  />
                  <p
                    v-if="passwordError"
                    class="text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    {{ passwordError }}
                  </p>
                </div>

                <div class="flex justify-between items-center">
                  <a
                    class="inline-flex items-center gap-x-1 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="/"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  :disabled="isLoading"
                  :class="{ 'opacity-50 pointer-events-none': isLoading }"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {{ isLoading ? "a moment pls..." : "Login" }}
                </button>

                <button
                  type="button"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  <svg
                    class="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                  </svg>
                  Sign in with Google
                </button>

                <p
                  class="mt-2 text-sm text-gray-600 dark:text-neutral-400 text-center"
                >
                  New to Pulse Point?
                  <NuxtLink
                    class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    to="/register"
                  >
                    Register
                  </NuxtLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const loginEndpoint = `${config.public.baseURl}/api/users/login`;
const router = useRouter();

const email = ref("");
const password = ref("");
const loginError = ref(null);
const loginSuccess = ref(null);
const isLoading = ref(false);


async function handleSubmit() {
  loginError.value = null;
  loginSuccess.value = null;

  try {
    isLoading.value = true;
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    const data = await response.json();

    if (response.ok) {
      loginSuccess.value = "Login successful"
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000)
    } else {
      loginError.value = data.error || "Invalid credentials";
    }
  } catch (error) {
    console.error("Login error:", error);
    loginError.value = "An error occurred during login.";
  } finally {
    isLoading.value = false;
  }
}
</script>
