<template>
  <div>
    <ToastError :message="registerError" />
    <ToastSuccess :message="registerSuccess" />
    <div class="flex-grow flex items-center justify-center mt-32 mb-32">
      <div
        class="mt-7 bg-white border border-gray-200 rounded-md shadow-md dark:bg-neutral-900 dark:border-neutral-700 md:max-w-[30rem] max-w-[20rem]"
      >
        <div class="p-4 sm:p-7">
          <div class="text-start">
            <h1
              class="block text-2xl font-normal text-gray-500 dark:text-white"
            >
              Create you account to check your symptoms
            </h1>
          </div>

          <div class="mt-7">
            <p class="mt-2 mb-4 text-sm text-gray-700 dark:text-neutral-400">
              Account Info
            </p>
            <form @submit.prevent="registerUser">
              <div class="grid gap-y-4">
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm mb-2 text-gray-400 dark:text-white"
                      >First Name</label
                    >
                    <div class="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        v-model="firstName"
                        class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        placeholder="Enter your first name"
                        aria-describedby="firstName-error"
                      />
                    </div>
                    <p
                      v-if="firstNameError"
                      class="text-xs text-red-600 mt-2"
                      id="firstName-error"
                    >
                      {{ firstNameError }}
                    </p>
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm mb-2 text-gray-400 dark:text-white"
                      >Last name</label
                    >
                    <div class="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        v-model="lastName"
                        class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        placeholder="Enter your last name"
                        aria-describedby="lastName-error"
                      />
                      <div
                        class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"
                      ></div>
                    </div>
                    <p
                      v-if="lastNameError"
                      class="text-xs text-red-600 mt-2"
                      id="lastName-error"
                    >
                      {{ lastNameError }}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm mb-2 text-gray-400 dark:text-white"
                    >Email</label
                  >
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      v-model="email"
                      class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your email"
                      aria-describedby="email-error"
                    />
                    <div
                      class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"
                    >
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p
                    v-if="emailError"
                    class="text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    {{ emailError }}
                  </p>
                </div>

                <div>
                  <div class="flex justify-between items-center">
                    <label
                      for="password"
                      class="block text-sm mb-2 dark:text-white text-gray-400"
                      >Password</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      v-model="password"
                      class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your password"
                      aria-describedby="password-error"
                    />
                    <div
                      class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"
                    >
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p
                    v-if="passwordError"
                    class="text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                    {{ passwordError }}
                  </p>
                </div>

                <p class="mt-3 text-sm text-gray-700 dark:text-neutral-400">
                  Profile
                </p>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div>
                    <label
                      for="dob"
                      class="block text-sm mb-2 text-gray-400 dark:text-white"
                      >Date of birth(MM/DD/YYY)</label
                    >
                    <div class="relative">
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        v-model="dob"
                        class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        placeholder="mm/dd/yyy"
                        aria-describedby="dob-error"
                      />
                    </div>
                  </div>
                  <p
                    v-if="dobError"
                    class="text-xs text-red-600 mt-2"
                    id="dob-error"
                  >
                    {{ dobError }}
                  </p>
                  <div>
                    <label
                      for="sex"
                      class="block text-sm mb-2 text-gray-400 dark:text-white"
                      >Sex</label
                    >
                    <div class="relative">
                      <select
                        id="sex"
                        name="sex"
                        v-model="sex"
                        class="py-3 px-4 block w-full placeholder-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                      >
                        <option value="">Select one</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <p
                      v-if="sexError"
                      class="text-xs text-red-600 mt-2"
                      id="sex-error"
                    >
                      {{ sexError }}
                    </p>
                  </div>
                </div>

                <div class="flex items-center"></div>

                <div class="items-center rounded-md border p-5">
                  <div class="flex">
                    <input
                      id="verify"
                      name="verify"
                      v-model="verify"
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 text-green-600 focus:ring-green-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
                    />
                    <p class="pl-3 text-sm text-gray-500">
                      I certify that i am at least 18 years old, and i agree to
                      both Pulse Point Terms of Use and Privacy Policy
                    </p>
                  </div>

                  <div class="ms-3 mt-4 text-sm text-gray-500 pl-4">
                    <label for="remember-me" class="text-sm dark:text-white"
                      >View Pulse Point

                      <a
                        class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                        href="#"
                        >Terms and Conditions</a
                      ></label
                    >
                  </div>
                  <p
                    v-if="verifyError"
                    class="text-xs text-red-600 mt-2"
                    id="verify-error"
                  >
                    {{ verifyError }}
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="isRegistering"
                  :class="{ 'opacity-50 pointer-events-none': isRegistering }"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {{ isRegistering ? "Registering..." : "Register" }}
                </button>

                <p
                  class="mt-1 text-sm text-gray-400 dark:text-neutral-400 text-center"
                >
                  if you believe you are experiencing an emergency, please call
                  911 or proceed to your nearest emergency room.
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

const config = useRuntimeConfig();
const registrationEndpoint = `${config.public.baseURl}/api/users/register`;
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const dob = ref("");
const sex = ref("");
const verify = ref(false);
const registerError = ref(null);
const registerSuccess = ref(null);

const firstNameError = ref(null);
const lastNameError = ref(null);
const emailError = ref(null);
const passwordError = ref(null);
const dobError = ref(null);
const sexError = ref(null);
const verifyError = ref(null);

const isRegistering = ref(false);

async function registerUser() {
  registerError.value = null;
  registerSuccess.value = null;
  firstNameError.value = null;
  lastNameError.value = null;
  emailError.value = null;
  passwordError.value = null;
  dobError.value = null;
  sexError.value = null;
  verifyError.value = null;

  if (verify.value === false) {
    registerError.value = "Please agree to the terms and conditions.";
    return;
  }

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    dob: dob.value,
    sex: sex.value,
  };

  try {
    isRegistering.value = true;

    const response = await fetch(registrationEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      
      registerSuccess.value = "Registration successful"

      navigateTo("/login");
    } else {
      if (data.errors) {
        Object.keys(data.errors).forEach((field) => {
          const errorField = `${field}Error`;
          eval(`${errorField}.value = data.errors[field][0];`);
        });
      } else {
        registerError.value = data.error || "Registration failed.";
      }
    }
  } catch (error) {
    console.error("Registration error:", error);
    registerError.value = "An error occurred during registration.";
    isRegistering.value = false;
  } finally {
    isRegistering.value = false;
  }
}
</script>
