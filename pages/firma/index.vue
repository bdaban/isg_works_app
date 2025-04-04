<template>
  <div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">Firmalar</h1>
    
    <!-- Arama Alanları -->
    <div class="flex flex-wrap items-center mb-4">
      <input 
        v-model="searchQuery.name"
        type="text" 
        placeholder="Firma Adında Ara" 
        class="w-full md:w-1/6 p-2 border rounded-lg mr-2 mb-2"
      />
      <!-- <input 
        v-model="searchQuery.yetkili"
        type="text" 
        placeholder="Yetkili Adında Ara" 
        class="w-full md:w-1/3 p-2 border rounded-lg mb-2"
      /> -->
      <button @click="toggleModal" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md ml-auto mb-2 transition duration-300">
        Yeni Firma Ekle
      </button>
    </div>

    
   
      <!-- <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
        <thead>
          <tr class="bg-gray-200 text-gray-700">
            <th class="p-3 text-left">Firma Kodu</th>
            <th class="p-3 text-left">Firma Adı</th>
            <th class="p-3 text-left">Adres</th>
            <th class="p-3 text-left">İl</th>
            <th class="p-3 text-left">İlçe</th>
            <th class="p-3 text-left">Telefon</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Yetkili</th>
            <th class="p-3 text-left">NACE Kodu</th>
            <th class="p-3 text-left">Teklike Sınıfı</th>
            <th class="p-3 text-left">SGK Sicil No</th>
            <th class="p-3 text-center">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="firma in filteredFirmalar" :key="firma.id" class="border-b hover:bg-gray-100">
            <td class="p-3">{{ firma.firmaKodu }}</td>
            <td class="p-3">{{ firma.firmaAdi }}</td>
            <td class="p-3">{{ firma.adres }}</td>
            <td class="p-3">{{ firma.il }}</td>
            <td class="p-3">{{ firma.ilce }}</td>
            <td class="p-3">{{ firma.telefon }}</td>
            <td class="p-3">{{ firma.email }}</td>
            <td class="p-3">{{ firma.yetkili }}</td>
            <td class="p-3">{{ firma.nace.kod }}</td>
            <td class="p-3">{{ firma.nace.tehlikeSinifi }}</td>
            <td class="p-3">{{ firma.isgkSicilNo }}</td>
            <td class="p-3 text-center flex justify-center space-x-2">
  
  <button @click="editFirma(firma)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-pencil" class="w-5 h-5" />
  </button>

  
  <button @click="deleteFirma(firma.id)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-trash-can" class="w-5 h-5" />
  </button>


  
   <div class="relative">
 <button @click="toggleMenu(firma.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
        <Icon name="mdi-dots-vertical" class="w-5 h-5" />
      </button> 
     
      <div v-if="activeDropdown === firma.id" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <ul class="py-1">
          <li>
            <button @click="addYerleske(firma.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-plus" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Taşeron Ekle</span>
            </button>
            <button @click="addEgtPlan(firma.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-calendar" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Eğitim Planı</span>
            </button>
          </li>
          
         
        </ul>
      </div>
   </div>
     

     
    </td>



          </tr>
        </tbody>
      </table> -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <h2 class="text-2xl font-medium text-gray-700 mb-4">{{ firma.id ? "Firmayı Düzenle" : "Yeni Firma Ekle" }}</h2>
         
          
          
          <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
             <label class="block text-gray-600 mb-1">Firma Kodu</label> 
            <input :value="firma.firmaKodu" type="text" class="w-24 p-3 border rounded-lg" placeholder="Firma kodu yükleniyor..." required />
            <button @click="firmakod" type="button" class="px-4 py-2 mx-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md">KodAl</button>
           </div>
              <div>
                <label class="block text-gray-600 mb-1">Firma Adı</label>
                <input v-model="firma.firmaAdi" type="text" class="w-full p-3 border rounded-lg" required />
              </div>
              <div class="col-span-1 md:col-span-2">
                <label class="block text-gray-600 mb-1">Adres</label>
                <input v-model="firma.adres" type="text" class="w-full p-3 border rounded-lg" required />
              </div>
              <div>
      <label class="block text-gray-600 mb-1">İl</label>
      <select v-model="firma.il" class="w-full p-3 border rounded-lg" required>
        <option value="Antalya">Antalya</option>
      </select>
    </div>
    <div >
      <label class="block text-gray-600 mb-1">İlçe</label>
      <select v-model="firma.ilce" class="w-full p-3 border rounded-lg" required>
        <option disabled value="">Lütfen bir ilçe seçiniz</option>
        <option v-for="ilce in ilceler" :key="ilce" :value="ilce">
          {{ ilce }}
        </option>
      </select>
    </div>
    <div>
                <label class="block text-gray-600 mb-1">SGK Sicil No</label>
                <input v-model="firma.isgkSicilNo" type="text" class="w-full p-3 border rounded-lg" required  @input="fetchNaceCodes" />
              </div>
              <div v-if="naceList.length > 0" class="mt-4">
  <label class="block text-gray-600 mb-1">NACE Kodları</label>
  <div v-for="nace in naceList" :key="nace.id" class="flex items-center">
    <input
      type="radio"
      :value="nace.id"
      v-model="firma.naceId"
      @change="updateTehlikeSinifi(nace)"
      class="mr-2"
    />
    <span>{{ nace.kod }} -  ({{ nace.tehlikeSinifi }})</span>
  </div>
</div>
              <div>
                <label class="block text-gray-600 mb-1">NACE Kodu ID</label>
                <input v-model="firma.naceId" type="text" class="w-full p-3 border rounded-lg" required />
              </div>
              <div>
                <label class="block text-gray-600 mb-1">Tehlike Sınıfı</label>
                <input v-model="firma.tehlikeSinifi" type="text" class="w-full p-3 border rounded-lg"/>
              </div>
              <div>
                <label class="block text-gray-600 mb-1">Telefon</label>
                <input v-model="firma.telefon" type="text" class="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 mb-1">Email</label>
                <input v-model="firma.email" type="text" class="w-full p-3 border rounded-lg"  />
              </div>
              <div>
                <label class="block text-gray-600 mb-1">Yetkili</label>
                <input v-model="firma.yetkili" type="text" class="w-full p-3 border rounded-lg" required />
              </div>
              
             
            </div>
            
            <div class="mt-6 flex justify-end">
              <button @click="toggleModal" type="button" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md mr-2">İptal</button>
              <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md">Kaydet</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
 
  
 

  <!--burası 2 inci test tablosu-->
  <div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">Firmalar</h1>

    <!-- Firma Tablosu -->
    <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="p-3 text-left">Firma Kodu</th>
            <th class="p-3 text-left">Firma Adı</th>
            <th class="p-3 text-left">Adres</th>
            <th class="p-3 text-left">İl</th>
            <th class="p-3 text-left">İlçe</th>
            <th class="p-3 text-left">Telefon</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Yetkili</th>
            <th class="p-3 text-left">NACE Kodu</th>
            <th class="p-3 text-left">Teklike Sınıfı</th>
            <th class="p-3 text-left">SGK Sicil No</th>
            <th class="p-3 text-center">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <!-- Firma ve Şubeler -->
        <template v-for="firma in filteredFirmalar" :key="firma.id">
          <!-- Firma Bilgileri -->
          <tr class="border-b hover:bg-gray-50">
            <td class="p-3">
              <button 
                @click="toggleSubeler(firma.id)"
                class="text-blue-500 hover:text-blue-700"
              >
                {{ expandedFirma === firma.id ? '<' : '>' }}
              </button>
              {{ firma.firmaKodu }}
            </td>
            <td class="p-3">{{ firma.firmaAdi }}</td>
            <td class="p-3">{{ firma.adres }}</td>
            <td class="p-3">{{ firma.il }}</td>
            <td class="p-3">{{ firma.ilce }}</td>
            <td class="p-3">{{ firma.telefon }}</td>
            <td class="p-3">{{ firma.email }}</td>
            <td class="p-3">{{ firma.yetkili }}</td>
            <td class="p-3">{{ firma.nace.kod }}</td>
            <td class="p-3">{{ firma.nace.tehlikeSinifi }}</td>
            <td class="p-3">{{ firma.isgkSicilNo }}</td>
            <td class="p-3 text-center flex justify-center space-x-2">
  <!-- Düzenle Düğmesi -->
  <button @click="editFirma(firma)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-pencil" class="w-5 h-5" />
  </button>

  <!-- Sil Düğmesi -->
  <button @click="deleteFirma(firma.id)" class="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
    <Icon name="mdi-trash-can" class="w-5 h-5" />
  </button>


    <!-- Dropdown Menüsü -->
   <div class="relative">
 <button @click="toggleMenu(firma.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
        <Icon name="mdi-dots-vertical" class="w-5 h-5" />
      </button> 
      <!-- Sadece activeDropdown ile eşleşen id için menü açılır -->
      <div v-if="activeDropdown === firma.id" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <ul class="py-1">
          <li>
            <button @click="addYerleske(firma.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-plus" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Taşeron Ekle</span>
            </button>
            <button @click="addEgtPlan(firma.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-calendar" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Eğitim Planı</span>
            </button>
            <button @click="addFirmaCalisan(firma.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-plus" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Çalışan Ekle</span>
            </button>
          </li>
          
          <!-- Diğer menü seçenekleri -->
        </ul>
      </div>
   </div>
     

     
    </td>
          </tr>
              <!-- Şube Başlıkları -->
              <tr v-if="expandedFirma === firma.id" class="bg-gray-300">
          <th class="p-3 border-b">Taşeron Adı</th>
          <th class="p-3 border-b">Adres</th>
          <th class="p-3 border-b">NACE Kodu</th>
          <th class="p-3 border-b">Tehlike Sınıfı</th>
          <th class="p-3 border-b">Telefon</th>
          <th class="p-3 border-b">Yetkili</th>
          <th class="p-3 border-b">SGK Sicil No</th>
          <th class="p-3 border-b text-center">İşlemler</th>
          </tr>

          <!-- Şube Bilgileri -->
          <tr v-if="expandedFirma === firma.id" v-for="sube in firmaSubeleri[firma.id]" :key="sube.id" class="bg-gray-100">
          <td class="p-3">{{ sube.subeAdi }}</td>
          <td class="p-3">{{ sube.adres }}</td>
          <td class="p-3">{{ sube.nace.kod }} </td>
          <td class="p-3">{{ sube.nace.tehlikeSinifi }} </td>
          <td class="p-3">{{ sube.telefon }}</td>
          <td class="p-3">{{ sube.yetkili }}</td>
          <td class="p-3">{{ sube.sgkSicilNo }}</td>
          <td class="p-3 text-center flex justify-center space-x-2">
  <!-- Düzenle Düğmesi -->
 


    <!-- Dropdown Menüsü -->
   <div class="relative">
<button @click="toggleDropdown2(sube.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">
        <Icon name="mdi-dots-vertical" class="w-5 h-5" />
      </button>
       <!-- Sadece activeDropdown ile eşleşen id için menü açılır -->
      <div v-if="activeDropdown2 === sube.id" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <ul class="py-1">
          <li>
            <button @click="addCalisan(sube.firma.id, sube.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
             <Icon name="mdi-plus" class="w-5 h-5 mr-2 text-gray-500 align-middle leading-none" />
            <span class="align-middle leading-none">Çalışan Ekle</span>
            </button>
          </li>
          <!-- Diğer menü seçenekleri -->
        </ul>
      </div>
   </div>
      

     
    </td>
        
  
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  </div>


</template>


<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const router = useRouter()
const activeDropdown = ref(null)
const activeDropdown2 = ref(null)
const naceList = ref([]);
const selectedNace = ref(null);

const subeler = ref([]);
const expandedFirma = ref(null);
const firmaSubeleri = ref({});




const selectFirma = ref(null);
const firmalar = ref([])
const searchQuery = ref({ name: '', yetkili: '' })

const ilceler = [
  "Akseki",
  "Aksu",
  "Alanya",
  "Demre",
  "Döşemealtı",
  "Elmalı",
  "Finike",
  "Gazipaşa",
  "Gündoğmuş",
  "İbradı",
  "Kaş",
  "Kemer",
  "Kepez",
  "Konyaaltı",
  "Korkuteli",
  "Kumluca",
  "Manavgat",
  "Muratpaşa",
  "Serik",
];

const toggleDropdown2 = (id) => {
  activeDropdown2.value = activeDropdown2.value === id ? null : id
 // activeDropdown.value = activeDropdown.value === id ? null : id
}
const addCalisan = (firmaId, yerleskeId) => {
  router.push({ path: '/calisanlar/ekle', query: { firmaId, yerleskeId } })
 
}

const addFirmaCalisan=(firmaId)=>{
  router.push({path:'/calisanlar/ekle',query:{firmaId}})
}


// Şube açma/kapama
const toggleSubeler = async (firmaId) => {
  if (expandedFirma.value === firmaId) {
    expandedFirma.value = null;
    subeler.value = [];
  } else {
    expandedFirma.value = firmaId;
    if (!firmaSubeleri.value[firmaId]) {
      await fetchSubeler(firmaId);
    }
  }
};
const fetchSubeler = async (firmaId) => {
  console.log('Menu Gelen FirmaID:',firmaId)
  try {
    const { data } = await useFetch(`/api/yerleske/getByFirmaId?firmaId=${firmaId}`);
                    
    firmaSubeleri.value[firmaId] = data.value || [];
  } catch (error) {
    console.error('Şubeler yüklenirken hata oluştu:', error);
  }
};
const toggleMenu = (firmaId) => {
  // Menüyü aç/kapat - Aynı id'ye tıklandıysa kapat, farklıysa aç
  activeDropdown.value = activeDropdown.value === firmaId ? null : firmaId
}

const addYerleske = (firmaId) => {
  // Menüyü kapat ve yerleşke ekleme işlemini başlat
  isOpen.value = false
  router.push(`/yerleske/ekle?firmaId=${firmaId}`)
}

const addEgtPlan = (firmaId) => {
  // Menüyü kapat ve yerleşke ekleme işlemini başlat
  isOpen.value = false
  router.push(`/firma/takvim?firmaId=${firmaId}`)
}

const test=ref();
const firma = ref({
  firmaKodu: '',
  firmaAdi: '',
  adres: '',
  il: '',
  ilce: '',
  telefon: '',
  email: '',
  yetkili: '',
  naceId: 0,
  isgkSicilNo: '',
  tehlikeSinifi:''
})
const showModal = ref(false)

const fetchFirmalar = async () => {
  const { data } = await useFetch('/api/firma/get')
  firmalar.value = data.value;
  
}

const firmakod = async()=>{
  try {
    const { data } = await useFetch('/api/firma/getLatestFirmaKodu'); // Backend'deki API endpoint
    if (data.value && data.value.success) {
      test.value = data.value.nextFirmaKodu;
      firma.value.firmaKodu = String(data.value.nextFirmaKodu);
      console.log('GELENKOD',data)
    } else {
      console.error('Firma kodu alınamadı.');
    }
  } catch (error) {
    console.error('Hata:', error);
  }

}

onMounted(()=>{
  fetchFirmalar();
  firmakod();
  console.log('Sayfa Yüklendi')
  console.log('DATA',firmalar)

})

const filteredFirmalar = computed(() => {
  return firmalar.value.filter(firma =>
    firma.firmaAdi.toLowerCase().includes(searchQuery.value.name.toLowerCase()) &&
    firma.yetkili.toLowerCase().includes(searchQuery.value.yetkili.toLowerCase())
  )
})

const toggleModal = () => {
  showModal.value = !showModal.value
  resetForm()
}

const resetForm = () => {
  firma.value = {
    firmaKodu: '',
    firmaAdi: '',
    adres: '',
    il: '',
    ilce: '',
    telefon: '',
    email: '',
    yetkili: '',
    naceId: '',
    isgkSicilNo: '',
    tehlikeSinifi:''
    
  }
}


const handleSubmit = async () => {
  
  if (selectFirma.value) {
    await useFetch(`/api/firma/${selectFirma.value.id}`,{
      method: 'PUT',
      body :{
      firmaKodu: firma.value.firmaKodu,
      firmaAdi: firma.value.firmaAdi,
      adres: firma.value.adres,
      il: firma.value.il,
      ilce: firma.value.ilce,
      telefon: firma.value.telefon,
      email: firma.value.email,
      yetkili: firma.value.yetkili,
      naceId: firma.value.naceId,
      isgkSicilNo: firma.value.isgkSicilNo,
      tehlikeSinifi:firma.value.tehlikeSinifi

      }
    });
    fetchFirmalar()
    selectFirma.value = null;
    showModal.value=false


    
  }
  else  {
    await $fetch('/api/firma/post', {
    method: 'POST',
    body: {
      firmaKodu: firma.value.firmaKodu,
      firmaAdi: firma.value.firmaAdi,
      adres: firma.value.adres,
      il: firma.value.il,
      ilce: firma.value.ilce,
      telefon: firma.value.telefon,
      email: firma.value.email,
      yetkili: firma.value.yetkili,
      naceId: firma.value.naceId,
      isgkSicilNo: firma.value.isgkSicilNo,
    },
  })
  alert('Firma başarıyla eklendi!')
  showModal.value = false
  fetchFirmalar()
  }
  
}


const editFirma = (selectedFirma) => {
  selectFirma.value={...selectedFirma}
  firma.value = { ...selectedFirma }
  showModal.value = true
}

const deleteFirma = async (id) => {
  await $fetch(`/api/firma/delete`, {
    method: 'DELETE',
    body:{
      id:id
    }
  })
  fetchFirmalar()
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchNaceCodes = async () => {
  if (firma.value.isgkSicilNo.length >= 4) {
    await delay(3000)
    const { data } = await useFetch('/api/firma/nace-search', {
      method: 'POST',
      body: { sgkSicilNo: firma.value.isgkSicilNo },
    });
    naceList.value = data.value || [];
  } else {
    naceList.value = [];
  }
};
const updateTehlikeSinifi = (nace) => {
  firma.value.tehlikeSinifi = nace.tehlikeSinifi; // Tehlike sınıfını atar
};



</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
