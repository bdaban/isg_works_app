
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt/icon'],
  plugins: ['~/plugins/errorHandler.js'],
  runtimeConfig: {
    public: {
      uploadDir: process.env.UPLOAD_DIR || '/uploads'
    }
  },
 
 

})