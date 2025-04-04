<template>
  <div class="flex h-screen relative overflow-hidden">
    <!-- Etkileşimli Arka Plan -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="interactive-bg" ref="interactiveBg"></div>
    </div>

    <!-- Hamburger Menü -->
    <div class="relative z-10 bg-gray-800 w-64 flex-shrink-0 hidden md:block overflow-hidden">
      <nav class="relative text-white p-6 z-10">
        <!-- Logo Alanı -->
        <div class="flex flex-col items-center justify-center mb-6">
          <h2 class="text-2xl  text-gray-400 font-semibold">FORSE</h2>
          <span class="px-2 text-gray-400">İş Güveniliği ve Sağlığı</span>
        </div>

        <NuxtLink to="/" class="hover:text-white transition-colors">
          <h2 class="text-xl font-extrabold mb-4 tracking-wider hover:animate-pulse">Menü</h2>
        </NuxtLink>

        <ul>
          <!-- Firmalar -->
          <li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-office-building" class="w-6 h-6 mr-3" />
            <NuxtLink to="/firma" class="hover:text-white transition-colors text-lg font-medium">Firmalar</NuxtLink>
          </li>
          <!-- Şubeler -->
          <li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-map-marker" class="w-6 h-6 mr-3" />
            <NuxtLink to="/yerleske" class="hover:text-white transition-colors text-lg font-medium">Taşeronlar</NuxtLink>
          </li>
          <!-- Çalışanlar -->
          <li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-account-group" class="w-6 h-6 mr-3" />
            <NuxtLink to="/calisanlar" class="hover:text-white transition-colors text-lg font-medium">Çalışanlar</NuxtLink>
          </li>
          <!-- Eğitimler -->
          <li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-school" class="w-6 h-6 mr-3" />
            <NuxtLink to="/egitimler" class="hover:text-white transition-colors text-lg font-medium">Eğitimler</NuxtLink>
          </li>
          <!-- Eğitim Verenler -->
          <li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-teach" class="w-6 h-6 mr-3" />
            <NuxtLink to="/egitim-verenler" class="hover:text-white transition-colors text-lg font-medium">Eğitim Verenler</NuxtLink>
          </li>
          <!-- Belgeler -->
          <li class="flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">
            <Icon name="mdi-file-document" class="w-6 h-6 mr-3" />
            <NuxtLink to="/belgeler" class="hover:text-white transition-colors text-lg font-medium">Belgeler</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- İçerik Alanı -->
    <div class="flex-1 p-6 relative z-20 overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const interactiveBg = ref(null)

onMounted(() => {
  const bgElement = interactiveBg.value;

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    bgElement.style.transform = `translate(${x}px, ${y}px)`;
  });
});
</script>

<style>
/* Etkileşimli arka plan şekilleri */
.interactive-bg {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%), 
              radial-gradient(circle at bottom right, rgba(0, 255, 204, 0.2) 0%, transparent 80%);
  transition: transform 0.5s ease-out;
  z-index: -1;
}

/* Hover efektler ve yazılar */
.hover\:scale-110:hover {
  transform: scale(1.10);
}

.hover\:rotate-180:hover {
  transform: rotate(180deg);
}

.hover\:animate-pulse:hover {
  animation: pulse 1.5s infinite;
}

/* Pulse animasyonu */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
