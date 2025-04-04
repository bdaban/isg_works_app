export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
      console.error('Hata:', err, 'Bileşen:', vm, 'Ek Bilgi:', info)
    }
  })
  