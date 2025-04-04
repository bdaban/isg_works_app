<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Eğitimler</h1>

    <!-- Yeni Eğitim Ekle Butonu -->
    <div class="mb-4">
      <button @click="openEgitimModal(null)" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
        Yeni Eğitim Ekle
      </button>
      <!-- Eğitim Konusu Ekleme Butonu -->
      <NuxtLink to="/egitimler/ekle" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-4">
        Eğitim Konusu Ekle
      </NuxtLink>
    </div>

    <!-- Eğitimler Tablosu -->
    <table class="min-w-full bg-white rounded-lg shadow-lg">
      <thead>
        <tr>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Çalışan Adı</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Eğitim Konusu</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Eğitim Tarihi</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Geçerlilik Tarihi</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Firma Adı</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Şube Adı</th>
          <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="egitim in egitimler" :key="egitim.id" class="text-center bg-white border-b hover:bg-gray-100">
          <td class="py-2 px-4 text-gray-700">{{ egitim.calisan.adi }} {{ egitim.calisan.soyadi }}</td>
          <td class="py-2 px-4 text-gray-700">{{ egitim.egitimKonu.baslik }}</td>
          <td class="py-2 px-4 text-gray-700">{{ formatDate(egitim.egitimTarihi) }}</td>
          <td class="py-2 px-4 text-gray-700">{{ formatDate(egitim.gecerlilikTarihi) }}</td>
          <td class="py-2 px-4 text-gray-700">{{ egitim.calisan.firma.firmaAdi }}</td>
          <td class="py-2 px-4 text-gray-700">{{ egitim.calisan.yerleske.subeAdi }}</td>
          <td class="py-2 px-4 text-center">
            <div class="relative inline-block text-left">
              <button @click="toggleDropdown(egitim.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">
                <Icon name="mdi-dots-vertical" class="w-5 h-5" />
              </button>
              <div v-if="activeDropdown === egitim.id" class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                <ul class="py-1">
                  <li>
                    <!-- <button @click="editEgitim(egitim)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                      <Icon name="mdi-pencil" class="w-4 h-4 mr-2" /> Düzenle
                    </button> -->
                  </li>
                  <li>
                    <button @click="deleteEgitim(egitim.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                      <Icon name="mdi-delete" class="w-4 h-4 mr-2" /> Sil
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Eğitim Ekleme ve Düzenleme Modalı -->
    <div v-if="isEgitimModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"> <!-- max-h-screen ve overflow-y-auto eklendi -->
    <h2 class="text-2xl mb-4">{{ isEditMode ? 'Eğitimi Düzenle' : 'Yeni Eğitim Ekle' }}</h2>
    <form @submit.prevent="saveEgitim">
      <!-- Firma Seçimi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Firma Seçimi</label>
        <select v-model="selectedFirmaId" @change="fetchYerleskeler()" class="border p-2 w-full rounded-md" required>
          <option v-for="firma in firmalar" :key="firma.id" :value="firma.id">{{ firma.firmaAdi }}</option>
        </select>
      </div>

      <!-- Yerleşke Seçimi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Yerleşke Seçimi</label>
        <select v-model="selectedYerleskeId" @change="fetchCalisanlar()" class="border p-2 w-full rounded-md" required>
          <option v-for="yerleske in yerleskeler" :key="yerleske.id" :value="yerleske.id">{{ yerleske.subeAdi }}</option>
        </select>
      </div>

      <!-- Çalışan Seçimi (Checkbox ile Çoklu Seçim) -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Çalışan Seçimi</label>
        <div class="grid grid-cols-2 gap-2"> <!-- Dört sütunlu grid sistemi -->
          <div v-for="calisan in calisanlar" :key="calisan.id" class="flex items-center border-b border-gray-200 py-2 px-4">
            <input type="checkbox" v-model="selectedCalisanlar" :value="calisan.id" class="mr-4">
            <div class="flex-1 flex space-x-2">
              <span>{{ calisan.adi }}</span>
              <span>{{ calisan.soyadi }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Eğitim Konusu -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Eğitim Konusu</label>
        <select v-model="egitimFormFields.egitimKonuId" class="border p-2 w-full rounded-md" required>
          <option v-for="konu in egitimKonulari.data" :key="konu.id" :value="konu.id">{{ konu.baslik }}</option>
        </select>
      </div>

      <!-- Eğitim Süresi (Saat Cinsinden) -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Eğitim Süresi (Saat)</label>
        <select v-model="egitimFormFields.sure" class="border p-2 w-full rounded-md" required>
          <option value="8">8 Saat</option>
          <option value="12">12 Saat</option>
          <option value="16">16 Saat</option>
        </select>
      </div>

      <!-- Eğitim Tarihi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Eğitim Tarihi</label>
        <input v-model="egitimFormFields.egitimTarihi" type="date" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- Geçerlilik Tarihi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Geçerlilik Tarihi</label>
        <input v-model="egitimFormFields.gecerlilikTarihi" type="date" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- Kaydet ve Kapat Butonları -->
      <div class="space-y-2">
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">{{ isEditMode ? 'Güncelle' : 'Kaydet' }}</button>
        <button @click="closeEgitimModal" class="bg-red-600 text-white py-2 px-4 rounded-md w-full">Kapat</button>
      </div>
    </form>
  </div>
</div>

  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '#app'

const egitimler = ref([])
const egitimKonulari = ref([])
const firmalar = ref([])
const yerleskeler = ref([])
const calisanlar = ref([])
const selectedFirmaId = ref(null)
const selectedYerleskeId = ref(null)
const selectedCalisanlar = ref([])
const isEgitimModalOpen = ref(false)
const isEditMode = ref(false)
const activeDropdown = ref(null)
const egitimFormFields = ref({
  id: null,
  egitimKonuId: null,
  egitimTarihi: '',
  gecerlilikTarihi: '',
  sure:'',
})

// Eğitimleri ve eğitim konularını yükle
const fetchEgitimler = async () => {
  const { data } = await useFetch('/api/egitim/get')
  egitimler.value = data.value
}

const fetchEgitimKonulari = async () => {
  const { data } = await useFetch('/api/egitimkonu/get')
  egitimKonulari.value = data.value
}

const fetchFirmalar = async () => {
  const { data } = await useFetch('/api/firma/get')
  firmalar.value = data.value
  console.log('fİRMA',data)
}

const fetchYerleskeler = async () => {
  if (selectedFirmaId.value) {
    const { data } = await useFetch(`/api/yerleske/getByFirmaId?firmaId=${selectedFirmaId.value}`)
    yerleskeler.value = data.value
  }
}

const fetchCalisanlar = async () => {
  if (selectedYerleskeId.value) {
    const { data } = await useFetch(`/api/calisan/getByYerleskeId?yerleskeId=${selectedYerleskeId.value}`)
    calisanlar.value = data.value
  }
}

const openEgitimModal = (egitim) => {
  if (egitim) {
    egitimFormFields.value = { ...egitim }
    isEditMode.value = true
  } else {
    egitimFormFields.value = {
      id: null,
      egitimKonuId: null,
      egitimTarihi: '',
      gecerlilikTarihi: '',
    }
    isEditMode.value = false
  }
  isEgitimModalOpen.value = true
}

const closeEgitimModal = () => {
  isEgitimModalOpen.value = false
}

const saveEgitim = async () => {
  try {
    if (isEditMode.value) {
      // Düzenleme modundaysa, ilgili eğitim kaydını güncelle
      await useFetch(`/api/egitim/${egitimFormFields.value.id}`, {
        method: 'PUT',
        body: {
          ...egitimFormFields.value,
          calisanlar: selectedCalisanlar.value, // Birden fazla çalışan varsa, PUT ile güncelle
        },
      })
    } else {
      // Yeni eğitim ekleniyorsa, her bir çalışan için ayrı POST isteği gönder
      alert('Eğitim ekleniyor...')
      
      // Seçili çalışanlar üzerinde döngü yaparak her bir çalışana eğitim kaydı yap
      for (const calisanId of selectedCalisanlar.value) {
        await useFetch('/api/egitim/post', {
          method: 'POST',
          body: {
            ...egitimFormFields.value,
            calisanId, // Her POST isteğinde ilgili çalışanın id'sini kullan
          },
        })
      }
    }
    
    fetchEgitimler() // Eğitimleri yeniden yükle
    closeEgitimModal() // Modalı kapat
    
    alert('Eğitimler başarıyla kaydedildi.')
  } catch (error) {
    console.error('Eğitim eklenirken bir hata oluştu:', error)
    alert('Eğitim eklenirken bir hata oluştu. Lütfen tekrar deneyin.')
  }
}



const deleteEgitim = async (id) => {
  await useFetch(`/api/egitim/${id}`, { method: 'DELETE' })
  fetchEgitimler()
}

const toggleDropdown = (id) => {
  activeDropdown.value = activeDropdown.value === id ? null : id
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR')
}

onMounted(() => {
  fetchFirmalar()
  fetchEgitimKonulari()
  fetchEgitimler()
  
  
})
</script>
