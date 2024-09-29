// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'watchcat',
    }
  },
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
})