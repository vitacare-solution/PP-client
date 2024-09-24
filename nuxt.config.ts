// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/pulse_point.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
        '@nuxtjs/tailwindcss'
    ],
  app: {
    head: {
      title: "Pulse Point",
      titleTemplate: "%s - Your Health Buddy",
    },
  },
});
