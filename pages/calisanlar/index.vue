<template>
  <div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">Çalışanlar</h1>
    
    <div class="mb-4 flex justify-between items-center">
  <!-- TC No ile Arama -->
  <div>
    <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="TC No ile Ara..." 
      class="w-48 p-2 border rounded-lg"
    />
  </div>

  <!-- Durum Filtreleme -->
  <div>
    <label for="durum" class="block text-sm font-medium text-gray-600 text-center">Durum</label>
    <select v-model="selectedDurum" id="durum" class="border p-2 w-48 rounded-lg">
      <option value="">Tümü</option>
      <option value="true">Aktif</option>
      <option value="false">Pasif</option>
    </select>
  </div>
</div>


    <!-- Çalışan Tablosu -->
    <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="p-3 border-b">Adı</th>
          <th class="p-3 border-b">Soyadı</th>
          <th class="p-3 border-b">TC</th>
          <th class="p-3 border-b">Mesleği</th>
          <th class="p-3 border-b">İşe Giriş Tarihi</th>
          <th class="p-3 border-b">İşden Çıkış Tarihi</th>
          <th class="p-3 border-b">Aktif</th>
          <th class="p-3 border-b">Firma Adı</th>
          <th class="p-3 border-b">Taşeron Adı</th>
          <th class="p-3 border-b">Sağlık Raporu (Gün)</th>
          <th class="p-3 border-b">Sağlık Raporu URL</th>
          <th class="p-3 border-b">Sertifika (Gün)</th>
          <th class="p-3 border-b">Sertifika URL</th>
          <th class="p-3 border-b text-center">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="calisan in paginatedCalisanlar" :key="calisan.id" class="border-b">
          <td class="p-3">{{ calisan.adi }}</td>
          <td class="p-3">{{ calisan.soyadi }}</td>
          <td class="p-3">{{ calisan.tc_no }}</td>
          <td class="p-3">{{ calisan.meslegi }}</td>
          <td class="p-3">{{ formatDate(calisan.isegiristarihi) }}</td>
          <td class="p-3">
          <span class="text-green-500" v-if="calisan.isecikistaarihi === null" >Devam Ediyor</span>
          <span v-else>{{ formatDate(calisan.isecikistaarihi) }}</span>
          </td>
          <td class="p-3">{{ calisan.aktif ? 'Evet' : 'Hayır' }}</td>
          <td class="p-3">{{ calisan.firma.firmaAdi }}</td>
          <td class="p-3">
  <span v-if="calisan.yerleske && calisan.yerleske.subeAdi">{{ calisan.yerleske.subeAdi }}</span>
  <span v-else>Merkez</span>
</td>
          <!-- <td class="p-3">{{ calisan.yerleske.subeAdi }}</td> -->
          <td class="p-3">
          <div v-if="calisan.saglikRaporlari.length">
           <!-- Dizinin son elemanını alıyoruz -->
          <div>
         {{ calculateDaysRemaining(calisan.saglikRaporlari[calisan.saglikRaporlari.length - 1].gecerlilikTarihi) }} - gün
    </div>
        </div>
        <div v-else>
          -
        </div>
          </td>
          <td class="p-3">
        <div v-if="calisan.saglikRaporlari.length">
          <div>
            <a :href="calisan.saglikRaporlari[calisan.saglikRaporlari.length -1].raporUrl" target="_blank">
              <span class="text-lg text-red-700">Raporu Görüntüle</span></a>
          </div>
        </div>
        <div v-else>
          Sağlık raporu yok
        </div>
          </td>
          <td class="p-3">
        <div v-if="calisan.sertifikalar.length">
          <div>
            {{ calculateDaysRemaining(calisan.sertifikalar[calisan.sertifikalar.length -1 ].gecerlilikTarihi) }} - gün
          </div>
        </div>
        <div v-else>
          -
        </div>
         </td>
         <td class="p-3">
        <div v-if="calisan.sertifikalar.length">
          <div>
            <a :href="calisan.sertifikalar[calisan.sertifikalar.length -1 ].sertifikaUrl" target="_blank"><span class="text-lg text-blue-500">Sertikika Görüntüle</span></a>
          </div>
        </div>
        <div v-else>
          Sertifika yok
        </div>
      </td>
      
          <td class="p-3 text-center">
            <!-- Dropdown Menü -->
            <div class="relative">
              <button @click="toggleDropdown(calisan.id)" class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">
                <Icon name="mdi-dots-vertical" class="w-5 h-5" />
              </button>
              <div v-if="activeDropdown === calisan.id" class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                <ul class="py-1">
                  <li>
                    <button @click="editCalisan(calisan)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                      <Icon name="mdi-pencil" class="w-4 h-4 mr-2" /> Düzenle
                    </button>
                  </li>
                  <li>
                    <button @click="deleteCalisan(calisan.id)" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                      <Icon name="mdi-delete" class="w-4 h-4 mr-2" /> Sil
                    </button>
                  </li>
                  <li>
                      <NuxtLink :to="`/calisanlar/dokuman/yukle?calisanId=${calisan.id}&calisanAdi=${calisan.adi}&calisanSoyadi=${calisan.soyadi}`" class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                      <Icon name="mdi-book-plus" class="w-4 h-4 mr-2" />
                      Belge Yükle
            </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
     <!-- Sayfalama -->
     <div class="mt-4 flex justify-between items-center">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-500 text-white py-2 px-4 rounded-lg">Önceki</button>
      <span>Sayfa {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-500 text-white py-2 px-4 rounded-lg">Sonraki</button>
    </div>


    

    <!-- Çalışan Ekleme Modal -->
     <!-- Çalışan Ekleme Modal -->
<div v-if="isCalisanModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
    <h2 class="text-2xl mb-4">Yeni Çalışan Ekle</h2>
    <form @submit.prevent="saveCalisan">
      <!-- Adı -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Adı</label>
        <input v-model="calisanFormFields.adi" type="text" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- Soyadı -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Soyadı</label>
        <input v-model="calisanFormFields.soyadi" type="text" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- TC No -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">TC No</label>
        <input v-model="calisanFormFields.tc_no" type="text" class="border p-2 w-full rounded-md" required maxlength="11" />
      </div>

      <!-- Mesleği -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Mesleği</label>
        <input v-model="calisanFormFields.meslegi" type="text" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- İşe Giriş Tarihi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">İşe Giriş Tarihi</label>
        <input v-model="calisanFormFields.isegiristarihi" type="date" class="border p-2 w-full rounded-md" required />
      </div>

      <!-- İşten Çıkış Tarihi -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">İşten Çıkış Tarihi (Opsiyonel)</label>
        <input v-model="calisanFormFields.isecikistaarihi" type="date" class="border p-2 w-full rounded-md" />
      </div>

      <!-- Aktif/Pasif Switch -->
<!-- Aktif/Pasif Switch -->
<div class="mb-4 flex items-center">
  <label class="block text-sm font-medium text-gray-600 mr-4">Durum</label>
  <label class="inline-flex relative items-center cursor-pointer">
    <input v-model="calisanFormFields.aktif" type="checkbox" class="sr-only peer">
    <!-- Switch arka planı -->
    <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition-all duration-300">
      <!-- Hareket eden nokta -->
      <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
    </div>
    <span class="ml-3 text-sm font-medium text-gray-900">{{ calisanFormFields.aktif ? 'Aktif' : 'Pasif' }}</span>
  </label>
</div>

      <!-- Kaydet ve Kapat Butonları -->
      <div class="space-y-2">
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">Kaydet</button>
        <button @click="closeCalisanModal" class="bg-red-600 text-white py-2 px-4 rounded-md w-full">Kapat</button>
      </div>
    </form>
  </div>
</div>




  </div>
  <div class="mt-4">
      <NuxtLink to="/calisanlar/ekle-excel" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
        Excel ile Ekle
      </NuxtLink>
    </div>

    <!-- <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
  <thead>
    <tr class="bg-gray-200 text-gray-700">
      <th class="p-3 border-b">Adı</th>
      <th class="p-3 border-b">Soyadı</th>
      <th class="p-3 border-b">Sağlık Raporu URL</th>
      <th class="p-3 border-b">Geçerlilik Tarihi</th>
      <th class="p-3 border-b">Sertifika URL</th>
      <th class="p-3 border-b">Geçerlilik Tarihi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="calisan in calisanlar" :key="calisan.id">
      <td class="p-3">{{ calisan.adi }}</td>
      <td class="p-3">{{ calisan.soyadi }}</td>
      
      <td class="p-3">
        <div v-for="rapor in calisan.saglikRaporlari" :key="rapor.raporUrl">
          <a :href="rapor.raporUrl" target="_blank">{{ rapor.raporUrl }}</a>
        </div>
      </td>
      <td class="p-3">
        <div v-for="rapor in calisan.saglikRaporlari" :key="rapor.raporUrl">
          {{ formatDate(rapor.gecerlilikTarihi) }}
        </div>
      </td>

      <td class="p-3">
        <div v-for="sertifika in calisan.sertifikalar" :key="sertifika.sertifikaUrl">
          <a :href="sertifika.sertifikaUrl" target="_blank">{{ sertifika.sertifikaUrl }}</a>
        </div>
      </td>
      <td class="p-3">
        <div v-for="sertifika in calisan.sertifikalar" :key="sertifika.sertifikaUrl">
          {{ formatDate(sertifika.gecerlilikTarihi) }}
        </div>
      </td>
    </tr>
  </tbody>
</table> -->
</template>

<script setup>


const calisanlar = ref([])
const searchQuery = ref('')
const itemsPerPage = ref(10)
const currentPage = ref(1)
const isCalisanModalOpen = ref(false)
const activeDropdown = ref(null)
const selectedDurum = ref('');
const calisanFormFields = ref({
  adi: '',
  soyadi: '',
  tc_no: '',
  meslegi: '',
  firmaId: 0,
  firmaYerleskeId: 0,
  isegiristarihi: '',
  isecikistaarihi: null,
  aktif: true,
})

onMounted( ()=>{
  fetchCalisanlar();
  console.log('Sayfa Yüklendi')
  console.log('DATA',calisanlar)
  
})



const fetchCalisanlar = async () => {
  const { data } = await useFetch('/api/calisan/get')
  calisanlar.value = data.value
  
}

const calculateDaysRemaining = (gecerlilikTarihi) => {
  const today = new Date();
  const gecerlilikDate = new Date(gecerlilikTarihi);
  const diffTime = gecerlilikDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Milisaniye -> Gün çevirme
  return diffDays >= 0 ? diffDays : 0; // Eğer süre geçmişse, 0 döner
}

// Filtrelenmiş çalışan listesi (TC No ile arama)
const filteredCalisanlar22 = computed(() => {
  return calisanlar.value.filter(calisan =>
    calisan.tc_no.toString().includes(searchQuery.value)
  )
})

const filteredCalisanlar = computed(() => {
  return calisanlar.value.filter(calisan => {
    const durumUygun = selectedDurum.value === '' || String(calisan.aktif) === selectedDurum.value;
    const tcUygun = calisan.tc_no.toString().includes(searchQuery.value);
    return durumUygun && tcUygun;
  });
});

// Toplam sayfa sayısı
const totalPages = computed(() => {
  return Math.ceil(filteredCalisanlar.value.length / itemsPerPage.value)
})

// Sayfalama ile filtrelenmiş çalışan listesi
const paginatedCalisanlar = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredCalisanlar.value.slice(start, end)
})

// Sayfaları değiştirme
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}




const openCalisanModal = () => {
  isCalisanModalOpen.value = true
  activeDropdown.value=null
  
}

const closeCalisanModal = () => {
  isCalisanModalOpen.value = false
}

// Çalışanı kaydet veya güncelle
// Çalışanı kaydet (Güncelleme)
const saveCalisan = async () => {
  await useFetch(`/api/calisan/${calisanFormFields.value.id}`, {
    method: 'PUT',
    body: calisanFormFields.value,
  });
  fetchCalisanlar(); // Güncel listeyi çek
  closeCalisanModal(); // Modalı kapat
};



const editCalisan = (calisan) => {
  calisanFormFields.value = { ...calisan,
    isegiristarihi: formatDateForInput(calisan.isegiristarihi),
    isecikistaarihi: calisan.isecikistaarihi ? formatDateForInput(calisan.isecikistaarihi) : null,
   }
  openCalisanModal()
}
const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD formatında döndür
};


const deleteCalisan = async (id) => {
  try {
    await useFetch(`/api/calisan/${id}`, {
      method: 'DELETE',
    });
    alert('Çalışan başarıyla silindi');
    fetchCalisanlar(); // Güncel çalışan listesini çek
  } catch (error) {
    alert('Çalışan silinirken bir hata oluştu');
    console.error(error);
  }
};

const addEgitim = (calisanId) => {
  // Eğitim ekleme işlevi buraya gelecek
}

const toggleDropdown = (id) => {
  activeDropdown.value = activeDropdown.value === id ? null : id
}


const formatDate = (dateString) => {
if (!dateString) {
  return ''
  
}
else{
   const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', { // 'tr-TR' Türkiye formatı kullanılıyor
    day: '2-digit',    // Günü 2 basamaklı yapar
    month: '2-digit',  // Ayı 2 basamaklı yapar
    year: 'numeric',   // Yılı 4 basamaklı gösterir
  });
}
 
};

</script>
