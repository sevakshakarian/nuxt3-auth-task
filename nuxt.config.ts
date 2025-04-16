export default defineNuxtConfig({
  css: ['@/assets/styles/main.css'],
  modules: ['@pinia/nuxt','@nuxt/ui' ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-15',
})