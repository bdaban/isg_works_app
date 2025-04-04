<template>
  <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Çalışan Ekle</h1>
    
    <form @submit.prevent="saveCalisan">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Adı</label>
        <input v-model="calisanFormFields.adi" type="text" class="border p-2 w-full rounded-md" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Soyadı</label>
        <input v-model="calisanFormFields.soyadi" type="text" class="border p-2 w-full rounded-md" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">TC No</label>
        <input v-model="calisanFormFields.tc_no" type="text" class="border p-2 w-full rounded-md" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Mesleği</label>
        <input v-model="calisanFormFields.meslegi" type="text" class="border p-2 w-full rounded-md" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">İşe Giriş Tarihi</label>
        <input v-model="calisanFormFields.isegiristarihi" type="date" class="border p-2 w-full rounded-md" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Firma</label>
        <select v-model="calisanFormFields.firmaId" class="border p-2 w-full rounded-md" required>
          <option v-for="firma in firmalar" :key="firma.id" :value="firma.id">{{ firma.firmaAdi }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Yerleşke</label>
        <select v-model="calisanFormFields.firmaYerleskeId" class="border p-2 w-full rounded-md" >
          <option v-for="yerleske in yerleskeler" :key="yerleske.id" :value="yerleske.id">{{ yerleske.subeAdi }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Aktif</label>
        <select v-model="calisanFormFields.aktif" class="border p-2 w-full rounded-md">
          <option :value="true">Evet</option>
          <option :value="false">Hayır</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">Kaydet</button>
    </form>
  </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFetch, useRouter, useRoute } from '#app'

const route = useRoute()
const router = useRouter()
const firmalar = ref([])
const yerleskeler = ref([])

// Form verileri
const calisanFormFields = ref({
  adi: '',
  soyadi: '',
  tc_no: '',
  meslegi: '',
  isegiristarihi: '',
  firmaId: route.query.firmaId || '', // Firma ID, URL'den geliyor
  firmaYerleskeId: route.query.yerleskeId || '', // Yerleşke ID, URL'den geliyor
  aktif: true,
})




// Firma ve yerleşke verilerini yükle
const fetchFirmalarYerleskeler = async () => {

  try {
    // Yerleşke verilerini çek
    const yerleskeData = await $fetch('/api/yerleske/get')
    yerleskeler.value = yerleskeData

    // Firma verilerini çek
    const firmaData = await $fetch('/api/firma/get')
    firmalar.value = firmaData

  } catch (error) {
    console.error("Veri çekme hatası:", error)
  }

 
  
  
}

// Çalışanı kaydet
const saveCalisan = async () => {
  await useFetch('/api/calisan/post', {
    method: 'POST',
    body: calisanFormFields.value,
  })
  router.push('/calisanlar')
}

onMounted(()=>{
  fetchFirmalarYerleskeler();
}
)
</script>
