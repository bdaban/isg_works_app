<template>
  <div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <!-- Firma ID ile Arama -->
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">Şubeler</h1>
   
     <!-- Arama Alanları -->
     <div class="flex flex-wrap items-center mb-4">
      <input 
        v-model="searchQuery.name"
        type="text" 
        placeholder="Firma Adında Ara" 
        class="w-full md:w-1/6 p-2 border rounded-lg mr-2 mb-2"
      />
  
    </div>
    
    <!-- Yerleşke Tablosu -->
    <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="p-3 border-b">Firma  Adı</th>
          <th class="p-3 border-b">Şube Adı</th>
          <th class="p-3 border-b">Adres</th>
          <th class="p-3 border-b">NACE Kodu</th>
          <th class="p-3 border-b">Tehlike Sınıfı</th>
          <th class="p-3 border-b">Telefon</th>
          <th class="p-3 border-b">Yetkili</th>
          <th class="p-3 border-b">SGK Sicil No</th>
          <th class="p-3 border-b text-center">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="yerleske in filterYerleskeler" :key="yerleske.id" class="border-b">
          <td class="p-3">{{ yerleske.firma.firmaAdi }}</td>
          <td class="p-3">{{ yerleske.subeAdi }}</td>
          <td class="p-3">{{ yerleske.adres }}</td>
          <td class="p-3">{{ yerleske.nace.kod }}</td>
          <td class="p-3">{{ yerleske.nace.tehlikeSinifi }}</td>
          <td class="p-3">{{ yerleske.telefon }}</td>
          <td class="p-3">{{ yerleske.yetkili }}</td>
          <td class="p-3">{{ yerleske.sgkSicilNo }}</td>
        
          <!--yENİ mENU-->
          <td class="p-3 text-center flex justify-center space-x-2">
  <!-- Düzenle Düğmesi -->
  <button @click="editYerleske(yerleske)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-pencil" class="w-5 h-5" />
  </button>

  <!-- Sil Düğmesi -->
  <button @click="deleteFirma(yerleske.id)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-trash-can" class="w-5 h-5" />
  </button>


    <!-- Dropdown Menüsü -->
   <div class="relative">
<button @click="toggleDropdown(yerleske.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
        <Icon name="mdi-dots-vertical" class="w-5 h-5" />
      </button>
       <!-- Sadece activeDropdown ile eşleşen id için menü açılır -->
      <div v-if="activeDropdown === yerleske.id" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <ul class="py-1">
          <li>
            <button @click="addCalisan(yerleske.firma.id, yerleske.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-plus" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Çalışan Ekle</span>
            </button>
          </li>
          <!-- Diğer menü seçenekleri -->
        </ul>
      </div>
   </div>
      

     
    </td>
    <!---TesMenu-->
    
 
         
        </tr>
      </tbody>
    </table>

    <!-- Yerleşke Ekleme Modal -->
    <div v-if="isYerleskeModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
     
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl mb-4">{{ isEditMode ? 'Yerleşke Düzenle' : 'Yeni Yerleşke Ekle' }}</h2>
        
        <form @submit.prevent="saveYerleske">
          <!-- Form Alanları -->
          <div class="mb-4" v-for="(item, key) in yerleskeFormFields" :key="key">
            <label class="block text-sm font-medium text-gray-600">{{ key }}</label>
            <input v-model="yerleskeFormFields[key]" type="text" class="border p-2 w-full rounded-md" required />
          </div>
          <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full flex items-center justify-center space-x-2">
    <Icon name="mdi-content-save" class="w-5 h-5" />
    <span>Kaydet</span>
  </button>
          <button @click="closeYerleskeModal" class="bg-red-600 text-white py-2 px-4 mt-3 rounded-md w-full flex items-center justify-center space-x-2">
            <Icon name="mdi-close" class="w-5 h-5" />
            <span>Kapat</span>
          </button>
        </form>
        
      </div>
      
    </div>

    <!-- Çalışan Ekle Modal
    <div v-if="isCalisanModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-2xl mb-4">Çalışan Ekle</h2>
        <form @submit.prevent="addCalisan">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Adı</label>
            <input v-model="calisanAdi" type="text" class="border p-2 w-full rounded-md" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Soyadı</label>
            <input v-model="calisanSoyadi" type="text" class="border p-2 w-full rounded-md" required />
          </div>
          <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full flex items-center justify-center space-x-2">
            <Icon name="mdi-content-save" class="w-5 h-5" />
            Kaydet
          </button>
 
        </form>
        <button @click="closeCalisanModal" type="button" class="flex items-center justify-center space-x-2 bg-red-600 text-white py-2 px-4 mt-3 rounded-md w-full ">
        <Icon name="mdi-close" class="w-5 h-5" />
        Kapat
        </button>
      </div>
    </div> -->
  </div>
  <br>
  <br>

 
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref({ name: '' })
const yerleskeler = ref([])
const filteredYerleskeler = ref([...yerleskeler.value])

const isYerleskeModalOpen = ref(false)
const isCalisanModalOpen = ref(false)
const activeDropdown = ref(null)
const isEditMode = ref(false)
const yerleskeFormFields = ref({
  id:'',
  subeAdi: '',
  adres: '',
  tehlikeSinifi: 'Düşük',
  naceKodu: '',
  telefon: '',
  yetkili: '',
  sgkSicilNo: ''
})
const calisanAdi = ref('')
const calisanSoyadi = ref('')
const currentYerleskeId = ref(null)

const fetchYerleske = async () => {
  const { data } = await useFetch('/api/yerleske/get')
  yerleskeler.value = data.value;
  
}
onMounted(()=>{
  fetchYerleske();
  console.log('Sayfa Yüklendi',yerleskeler)

})

// Çalışan ekleme sayfasına yönlendirme
const addCalisan = (firmaId, yerleskeId) => {
  router.push({ path: '/calisanlar/ekle', query: { firmaId, yerleskeId } })
 
}

const toggleDropdown = (id) => {
  activeDropdown.value = activeDropdown.value === id ? null : id
 // activeDropdown.value = activeDropdown.value === id ? null : id
}

// const filterYerleskeler = () => {
//   filteredYerleskeler.value = yerleskeler.value.filter(yerleske => yerleske.firmaId.toString().includes(searchQuery.value))
// }

const filterYerleskeler = computed(() => {
  return yerleskeler.value.filter(yer =>
    yer.firma.firmaAdi.toLowerCase().includes(searchQuery.value.name.toLowerCase()) 
  )
})

const openYerleskeModal = (isEdit = false, yerleske = null) => {
  isEditMode.value = isEdit;
  if (isEdit && yerleske) {
    // Gelen yerleske verisini yerleskeFormFields içine atıyoruz
    yerleskeFormFields.value = {
      id:yerleske.id || '',
      subeAdi: yerleske.subeAdi || '',
      adres: yerleske.adres || '',
      tehlikeSinifi: yerleske.tehlikeSinifi || 'Düşük',
      naceKodu: yerleske.naceKodu || '',
      telefon: yerleske.telefon || '',
      yetkili: yerleske.yetkili || '',
      sgkSicilNo: yerleske.sgkSicilNo || ''
    };
  } else {
    // Yeni bir yerleske ekleniyorsa formu sıfırla
    yerleskeFormFields.value = {
      subeAdi: '',
      adres: '',
      tehlikeSinifi: 'Düşük',
      naceKodu: '',
      telefon: '',
      yetkili: '',
      sgkSicilNo: ''
    };
  }
  isYerleskeModalOpen.value = true;
};
const editYerleske = (yerleske) => {
  openYerleskeModal(true, yerleske)
}

const saveYerleske = async () => {
  if (isEditMode.value) {
    // Güncelleme isteği gönderin
    await useFetch(`/api/yerleske/${yerleskeFormFields.value.id}`, {
      method: 'PUT',
      body: yerleskeFormFields.value
    })
  } else {
    // Yeni kayıt isteği gönderin
    await useFetch('/api/yerleske', {
      method: 'POST',
      body: yerleskeFormFields.value
    })
  }
  closeYerleskeModal()
  fetchYerleske()
}

const deleteYerleske = async (id) => {
  await useFetch(`/api/yerleske/${id}`, { method: 'DELETE' })
  filterYerleskeler()
}

const openCalisanModal = (yerleskeId) => {
  currentYerleskeId.value = yerleskeId
  isCalisanModalOpen.value = true
}



const closeYerleskeModal = () => isYerleskeModalOpen.value = false
const closeCalisanModal = () => isCalisanModalOpen.value = false
</script>
