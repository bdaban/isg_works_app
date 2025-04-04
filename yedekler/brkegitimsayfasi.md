<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Eğitimler</h1>

    
    <div class="mb-4">
      <button @click="openEgitimModal(null)" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
        Yeni Eğitim Ekle
      </button>
      <!-- Eğitim Konusu Ekleme Butonu -->
      <NuxtLink to="/egitimler/ekle" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-4">
        Eğitim Konusu Ekle
      </NuxtLink>
    </div>


<!--Soninsallah-->
<table class="min-w-full bg-white rounded-lg shadow-lg border border-gray-300">
  <thead>
    <tr class="border-b border-gray-300">
      <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">Çalışan Adı</th>
      <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">Firma Adı</th>
      <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">Yerleşke Adı</th>
      <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Eğitim Kategorileri ve Detaylar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, calisanId) in groupedEgitimler22" :key="calisanId" class="border-b border-gray-300">
      <!-- Çalışan Bilgileri -->
      <td class="py-2 px-4 text-gray-700 border-r border-gray-300">{{ data.calisanName }}</td>
      <td class="py-2 px-4 text-gray-700 border-r border-gray-300">{{ data.firmaAdi }}</td>
      <td class="py-2 px-4 text-gray-700 border-r border-gray-300">{{ data.yerleskeAdi }}</td>

      <!-- Eğitim Kategorileri ve Detayları -->
      <td class="py-2 px-4 text-gray-700">
        <button @click="toggleRow(calisanId)" class="text-blue-500 hover:text-blue-700">
          {{ expandedRow === calisanId ? 'Detayları Gizle' : 'Detayları Gör' }}
        </button>
        <div v-if="expandedRow === calisanId" class="mt-2 border-t border-gray-300 pt-2">
          <div v-for="(egitimler, kategori) in data.kategoriler" :key="kategori" class="mb-4">
            <strong class="text-red-400">{{ kategori }}</strong>
            <ul class="mt-2 ml-4 list-disc">
              <li v-for="egitim in egitimler" :key="egitim.baslik" class="mb-2">
                <strong class="font-bold">{{ egitim.baslik }}</strong>
                <div>Tarih: {{ formatDate(egitim.egitimTarihi) }}</div>
                <div>Geçerlilik Tarihi: {{ formatDate(egitim.gecerlilikTarihi) }}</div>
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>










<!-- Modal -->
<div v-if="isModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto">
    <h2 class="text-2xl font-bold mb-4">{{ selectedKategori.isim }}</h2>
    <ul class="list-disc ml-6">
      <li v-for="egitim in selectedKategori.egitimKonular" :key="egitim.id">
        {{ egitim.baslik }}
      </li>
    </ul>
    <button @click="closeModal" class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
      Kapat
    </button>
  </div>
</div>


    <!-- Eğitim Ekleme ve Düzenleme Modalı -->
    
    <div v-if="isEgitimModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto">
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

          <!-- Eğitim Kategorisi -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Eğitim Kategorisi</label>
            <select v-model="selectedKategoriId" @change="fetchFilteredEgitimKonular()" class="border p-2 w-full rounded-md" required>
              <option v-for="kategori in egitimKategorileri" :key="kategori.id" :value="kategori.id">{{ kategori.isim }}</option>
            </select>
          </div>

          <!-- Eğitim Konuları (Çoklu Seçim) -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Eğitim Konuları</label>
            <div v-if="filteredEgitimKonular.length > 0">
              <div v-for="konu in filteredEgitimKonular" :key="konu.id" class="flex items-center mb-2">
                <input type="checkbox" v-model="selectedEgitimKonular" :value="konu.id" class="mr-2" />
                <span>{{ konu.baslik }}</span>
              </div>
            </div>
            <p v-else class="text-sm text-gray-500">Bu kategoride eğitim konusu bulunmamaktadır.</p>
          </div>

          <!-- Eğitim Süresi -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Eğitim Süresi</label>
            <input v-model="egitimFormFields.sure" type="number" min="1" class="border p-2 w-full rounded-md" placeholder="Saat veya dakika olarak giriniz" required />
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
  <div>
   
  </div>
 

</template>


<script setup>

//test bölümü

const kategoriler = ref([]);
const selectedKategori = ref(null);
const isModalOpen = ref(false);



const egitimler = ref([]);
const egitimKategorileri = ref([]);
const filteredEgitimKonular = ref([]);
const selectedKategoriId = ref(null);
const selectedEgitimKonular = ref([]);
const isEgitimModalOpen = ref(false);
const isEditMode = ref(false);
const egitimFormFields = ref({
  id: null,
  egitimTarihi: '',
  gecerlilikTarihi: '',
  sure: '',
});
const firmalar = ref([])
const yerleskeler = ref([])
const calisanlar = ref([])
const selectedFirmaId = ref(null)
const selectedYerleskeId = ref(null)
const selectedCalisanlar = ref([])
const expandedCalisan = ref(null);


const fetchKategoriler = async () => {
  const { data } = await useFetch('/api/kategori/get');
  kategoriler.value = data.value || [];
};
const expandedRow = ref(null);

const toggleRow = (rowId) => {
  expandedRow.value = expandedRow.value === rowId ? null : rowId;
};

const groupedEgitimler = computed(() => {
  const grouped = {};
  egitimler.value.forEach((egitim) => {
    const kategori = egitim.egitimKonu.kategori.isim;
    if (!grouped[kategori]) {
      grouped[kategori] = [];
    }
    grouped[kategori].push(egitim);
  });
  return grouped;
});

const groupedEgitimler2 = computed(() => {
  const grouped = {};

  egitimler.value.forEach((egitim) => {
    const calisan = `${egitim.calisan.adi} ${egitim.calisan.soyadi}`;
    if (!grouped[calisan]) {
      grouped[calisan] = {};
    }

    const kategori = egitim.egitimKonu.kategori.isim;
    if (!grouped[calisan][kategori]) {
      grouped[calisan][kategori] = [];
    }

    grouped[calisan][kategori].push(egitim);
  });

  return grouped;
});
const groupedEgitimler22 = computed(() => {
  const grouped = {};

  egitimler.value.forEach((egitim) => {
    // Çalışan bilgisi
    const calisanId = egitim.calisan.id;
    const calisanName = `${egitim.calisan.adi} ${egitim.calisan.soyadi}`;
    const firmaAdi = egitim.calisan.firma.firmaAdi;
    const yerleskeAdi = egitim.calisan.yerleske?.subeAdi || "Yerleşke Yok"; // Yerleşke yoksa alternatif metin
    const egttarih=egitim.egitimTarihi
    

    // Eğer çalışan grupta yoksa, ekle
    if (!grouped[calisanId]) {
      grouped[calisanId] = {
        calisanName,
        firmaAdi,
        yerleskeAdi,
        egttarih,
        kategoriler: {}
      };
    }

    // Eğitim kategorisi
    const kategori = egitim.egitimKonu.kategori.isim;

    // Eğer kategori grupta yoksa, ekle
    if (!grouped[calisanId].kategoriler[kategori]) {
      grouped[calisanId].kategoriler[kategori] = [];
    }

    // Sadece aldığı eğitim konu başlığını ekle
   // grouped[calisanId].kategoriler[kategori].push(egitim.egitimKonu.baslik);

   // Eğitim bilgilerini kategori altına ekle
   grouped[calisanId].kategoriler[kategori].push({
      baslik: egitim.egitimKonu.baslik,
      egitimTarihi: egitim.egitimTarihi,
      gecerlilikTarihi: egitim.gecerlilikTarihi,
    });
    

  });

  return grouped;
});


const toggleCalisan = (calisan) => {
  expandedCalisan.value = expandedCalisan.value === calisan ? null : calisan;
};



const expandedKategori = ref(null);

const toggleKategori = (kategori) => {
  expandedKategori.value = expandedKategori.value === kategori ? null : kategori;
};

const openModal = (kategori) => {
  selectedKategori.value = kategori;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedKategori.value = null;
};

// Firmaları yükle
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

// Eğitim kategorilerini ve konularını yükle
const fetchEgitimKategorileri = async () => {
  const { data } = await useFetch('/api/kategori/get');
  egitimKategorileri.value = data.value || [];
};

const fetchFilteredEgitimKonular = async () => {
  if (selectedKategoriId.value) {
    const { data } = await useFetch(`/api/egitimkonu/getByKategoriId?kategoriId=${selectedKategoriId.value}`);
    filteredEgitimKonular.value = data.value || [];
  }
};

// Eğitimleri yükle
const fetchEgitimler = async () => {
  const { data } = await useFetch('/api/egitim/get');
  egitimler.value = data.value || [];
};

const openEgitimModal = (egitim) => {
  isEditMode.value = !!egitim;
  selectedEgitimKonular.value = egitim ? egitim.egitimKonular.map((k) => k.id) : [];
  egitimFormFields.value = egitim ? { ...egitim } : {
    id: null,
    egitimTarihi: '',
    gecerlilikTarihi: '',
    sure: '',
  };
  isEgitimModalOpen.value = true;
};

const closeEgitimModal = () => {
  isEgitimModalOpen.value = false;
};

const saveEgitim12 = async () => {
  const payload = {
    ...egitimFormFields.value,
    egitimKonular: selectedEgitimKonular.value,
  };
  

  if (isEditMode.value) {
    await useFetch(`/api/egitim/${egitimFormFields.value.id}`, {
      method: 'PUT',
      body: payload,
    });
  } else {
    await useFetch('/api/egitim/post', {
      method: 'POST',
      body: payload,
    });
  }

  fetchEgitimler();
  closeEgitimModal();
};
const saveEgitim = async () => {
  const payloads = []; // Gönderilecek payload listesi

  // Çalışanlar ve Eğitim Konuları için iç içe döngü
  for (const calisanId of selectedCalisanlar.value) {
    for (const egitimKonuId of selectedEgitimKonular.value) {
      payloads.push({
        calisanId, // Çalışan ID
        egitimKonuId, // Eğitim Konusu ID
        egitimTarihi: egitimFormFields.value.egitimTarihi,
        gecerlilikTarihi: egitimFormFields.value.gecerlilikTarihi,
        sure: egitimFormFields.value.sure,
        belge: egitimFormFields.value.belge || null,
      });
    }
  }

  try {
    // Tüm payloadları tek bir API isteği ile gönder
    await useFetch('/api/egitim/post', {
      method: 'POST',
      body: { payloads },
    });

    // Başarılı bir işlem sonrası
    alert('Eğitimler başarıyla kaydedildi.');
    fetchEgitimler(); // Eğitimleri yeniden yükle
    closeEgitimModal(); // Modalı kapat
  } catch (error) {
    console.error('Eğitim kaydedilirken bir hata oluştu:', error);
    alert('Eğitim kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
  }
};


const deleteEgitim = async (id) => {
  await useFetch(`/api/egitim/${id}`, { method: 'DELETE' });
  fetchEgitimler();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR');
};

onMounted(() => {
  fetchEgitimKategorileri();
  fetchEgitimler();
  fetchFirmalar();
  fetchKategoriler();
});
</script>
