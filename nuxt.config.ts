// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *; ',
        },
      },
    },
  },
  modules: [['@pinia/nuxt', { autoImports: ['defineStore'] }]],
})
