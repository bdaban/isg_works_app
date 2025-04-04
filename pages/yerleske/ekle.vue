<template>
  <div class="p-8 mx-auto max-w-2xl  bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Yeni Taşeron Ekle</h1>
    <form @submit.prevent="addYerleske" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-600">Firma ID</label>
        <input v-model="firmaId" type="text" class="border border-gray-300 p-2 w-full rounded-md" readonly />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-600">Taşeron Adı</label>
        <input v-model="subeAdi" type="text" class="border border-gray-300 p-2 w-full rounded-md" required />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-600">Adres</label>
        <input v-model="adres" type="text" class="border border-gray-300 p-2 w-full rounded-md" required />
      </div>

      <!-- SGK Sicil No, NACE Kodu ID ve Tehlike Sınıfı aynı satır -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-600">SGK Sicil No</label>
          <input v-model="sgkSicilNo"  @input="fetchNaceCodes" type="text" class="border border-gray-300 p-2 w-full rounded-md" required />
        </div>
        
   
        <div>
          <label class="block text-sm font-medium text-gray-600">NACE Kodu ID</label>
          <input v-model="naceKodID" type="text" class="border border-gray-300 p-2 w-40 rounded-md" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Tehlike Sınıfı</label>
          <input v-model="tehlikeSinifi" class="border border-gray-300 p-2 w-40 rounded-md" />
        </div>
      </div>
      <div v-if="naceList.length > 0" class="mt-4">
  <label class="block text-gray-600 mb-1">NACE Kodları</label>
  <div v-for="nace in naceList" :key="nace.id" class="flex items-center">
    <input
      type="radio"
      :value="nace.id"
      v-model="naceKodID"
      @change="updateTehlikeSinifi(nace)"
      class="mr-2"
    />
    <span>{{ nace.kod }} -  ({{ nace.tehlikeSinifi }})</span>
  </div>
</div>

      <!-- Yetkili ve Telefon aynı satır -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-600">Telefon</label>
          <input v-model="telefon" type="tel" class="border border-gray-300 p-2 w-full rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Yetkili</label>
          <input v-model="yetkili" type="text" class="border border-gray-300 p-2 w-full rounded-md" required />
        </div>
      </div>

      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full font-semibold">
        Kaydet
      </button>
    </form>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFetch } from '#app'

const route = useRoute()
const router = useRouter()

const firmaId = ref('')
const subeAdi = ref('')
const adres = ref('')
const tehlikeSinifi = ref('')
const naceKodID = ref('')
const telefon = ref('')
const yetkili = ref('')
const sgkSicilNo = ref('')
const naceList = ref([]);

onMounted(() => {
  firmaId.value = route.query.firmaId || ''
})

const addYerleske = async () => {
  await useFetch('/api/yerleske/post', {
    method: 'POST',
    body: {
      firmaId: firmaId.value,
      subeAdi: subeAdi.value,
      adres: adres.value,
      naceKodID: naceKodID.value,
      telefon: telefon.value,
      yetkili: yetkili.value,
      sgkSicilNo: sgkSicilNo.value,
    },
  })
  alert('Yerleşke başarıyla eklendi!')
  router.push('/firma')
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchNaceCodes = async () => {
  // SGK Sicil No kontrolü
  if (sgkSicilNo.value.length >= 4) {
    await delay(2000); // Gecikme eklenir
    try {
      const { data } = await useFetch('/api/firma/nace-search', {
        method: 'POST',
        body: { sgkSicilNo: sgkSicilNo.value },
      });
      naceList.value = data.value || []; // Gelen veriyi listeye atar
    } catch (error) {
      console.error("NACE Kodları API hatası:", error);
      naceList.value = []; // Hata durumunda listeyi sıfırla
    }
  } else {
    // SGK Sicil No 4 karakterden küçükse listeyi boşalt
    naceList.value = [];
  }
};
const updateTehlikeSinifi = (nace) => {
  tehlikeSinifi.value = nace.tehlikeSinifi; // Tehlike sınıfını atar
};
</script>
