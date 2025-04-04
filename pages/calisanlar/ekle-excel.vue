<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Excel ile Çalışan Ekle</h1>

    <!-- Örnek Dosya İndirme Butonu -->
    <div class="mb-4">
      <a href="/ornek_calisanlar_format.xlsx" download class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
        Örnek Excel Dosyasını İndir
      </a>
    </div>

    <!-- Dosya Yükleme Formu -->
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileUpload" accept=".xlsx, .xls" class="mb-4" />
      
      <!-- Yükleme Butonu, Yüklenirken Gizli -->
      <button v-if="!isUploading" type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">
        Yükle
      </button>
      
      <!-- İlerleme Çubuğu -->
      <div v-if="isUploading" class="w-full bg-gray-200 rounded-full h-8 mt-4">
        <div class="bg-blue-600 h-8 rounded-full text-center text-white" :style="{ width: `${uploadProgress}%` }">
          {{ uploadProgress }}%
        </div>
      </div>
    </form>
    
    <div v-if="calisanlar.length">
      <h2 class="text-xl font-semibold mb-4">Yüklenenecek Çalışanlar</h2>
      <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">

        <!-- Çalışanlar Tablosu -->
        <table class="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Adı</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Soyadı</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Mesleği</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">TC No</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="calisan in calisanlar" :key="calisan.tc_no" class="text-center bg-white border-b hover:bg-gray-100">
              <td class="py-2 px-4 text-gray-700">{{ calisan.adi }}</td>
              <td class="py-2 px-4 text-gray-700">{{ calisan.soyadi }}</td>
              <td class="py-2 px-4 text-gray-700">{{ calisan.meslegi }}</td>
              <td class="py-2 px-4 text-gray-700">{{ calisan.tc_no }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as XLSX from 'xlsx'

const calisanlar = ref([])
const isUploading = ref(false) // Yükleme durumu kontrolü
const uploadProgress = ref(0)  // Yükleme ilerlemesi

// Dosya yüklendiğinde Excel verisini okuma
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: 'array' })

      // İlk sayfayı alıyoruz
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]]

      // Excel verilerini JSON formatına dönüştürüyoruz
      const jsonData = XLSX.utils.sheet_to_json(firstSheet)

      // JSON formatındaki verileri `calisanlar` listesine ekliyoruz
      calisanlar.value = jsonData.map((row) => ({
        adi: row['Adı'],
        soyadi: row['Soyadı'],
        tc_no: String(row['TC No']),
        meslegi: row['Mesleği'],
        firmaId: row['Firma ID'],
        firmaYerleskeId: row['Yerleşke ID'],
        isegiristarihi: row['İşe Giriş Tarihi'],
        isecikistaarihi: row['İşe Çıkış Tarihi'] || null,
        aktif: row['Aktif'] === 'Evet',
      }))
    }

    reader.readAsArrayBuffer(file)
  }
}

// Dosya yükleme ve çalışan verilerini API'ye gönderme
const uploadFile = async () => {
  isUploading.value = true
  uploadProgress.value = 0
  const totalCalisan = calisanlar.value.length

  for (let i = 0; i < totalCalisan; i++) {
    try {
       await useFetch('/api/calisan/excel', {
      method: 'POST',
      body: calisanlar.value[i],
    })
    uploadProgress.value = Math.ceil(((i + 1) / totalCalisan) * 100)


    } catch (error) {
      console.log(`Çalışan eklenirken hata: ${calisanlar.value[i].tc_no}`, error)
      
    }
   
  }

  isUploading.value = false
  alert('Çalışanlar başarıyla eklendi!')
}
</script>
