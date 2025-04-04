<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Sağlık Raporu / Sertifika Yükle</h1>

    <!-- Çalışan Bilgisi -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Seçilen Çalışan</label>
      <div class="border p-2 w-80 rounded-md">
        {{ calisanAdi }} {{ calisanSoyadi }} (ID: {{ calisanId }})
      </div>
    </div>



    <!-- Dosya Türü Seçimi -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Belge Türü</label>
      <select v-model="selectedBelgeTur" class="border p-2 w-80 rounded-md" required>
        <option value="" disabled>Belge Türü Seçiniz</option>
        <option value="saglikRaporu">Sağlık Raporu</option>
        <option value="sertifika">Sertifika</option>
      </select>
    </div>

    <!-- Geçerlilik Tarihi -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Geçerlilik Tarihi</label>
      <input v-model="gecerlilikTarihi" type="date" class="border p-2 w-40 rounded-md" required />
    </div>

  

    
 

    <form @submit.prevent="uploadDocument" enctype="multipart/form-data">
  <input type="file" name="file" @change="handleFileUpload" accept=".pdf" class="mb-4" />
  <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Yükle</button>
</form>


  </div>
 <!-- Yükle Butonu -->
 <!-- <button @click="fetchCalisanlar" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
      Yenile
    </button> -->
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Query parametrelerinden çalışan bilgilerini al
const calisanId = ref(route.query.calisanId)
const calisanAdi = ref(route.query.calisanAdi)
const calisanSoyadi = ref(route.query.calisanSoyadi)



const selectedBelgeTur = ref(null)
const gecerlilikTarihi = ref(null)
const file = ref(null)

onMounted(() => {

})


// Dosya Yükleme İşlemi
const handleFileUpload = (event) => {
  file.value = event.target.files[0]
}

// Belge Yükleme Fonksiyonu
const uploadDocument = async () => {
  if (!file.value || !selectedBelgeTur.value || !gecerlilikTarihi.value) {
    alert('Lütfen tüm alanları doldurun.')
    return
  }

  const formData = new FormData()
  formData.append('calisanId', calisanId.value)
  formData.append('belgeTur', selectedBelgeTur.value)
  formData.append('gecerlilikTarihi', gecerlilikTarihi.value)
  formData.append('file', file.value)

  await useFetch('/api/dokuman/yukle', {
    method: 'POST',
    body: formData
  })

  alert('Belge başarıyla yüklendi.')
  router.push('/calisanlar')
}


</script>
