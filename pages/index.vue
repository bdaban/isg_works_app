<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Sayfa Başlığı -->
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

    <!-- Genel Bilgiler Kartları -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <!-- Firma Sayısı Kartı -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-600 mb-2">Toplam Firma</h2>
        <p class="text-3xl font-bold text-blue-500">{{ firmaSayisi }}</p>
      </div>

      <!-- Yerleşke Sayısı Kartı -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-600 mb-2">Toplam Şube</h2>
        <p class="text-3xl font-bold text-blue-500">{{ yerleskeSayisi }}</p>
      </div>

      <!-- Çalışan Sayısı Kartı -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold text-gray-600 mb-2">Toplam Çalışan</h2>
        <p class="text-3xl font-bold text-blue-500">{{ calisanSayisi }}</p>
      </div>
    </div>
    <!-- Firma Filtreleme -->
    <div class="mb-6">
      <label for="firmaFilter" class="text-lg font-semibold text-gray-600">Firma Filtrele:</label>
      <select
        id="firmaFilter"
        v-model="selectedFirma"
        class="ml-4 p-2 border border-gray-300 rounded-md"
      >
        <option value="">Tümü</option>
        <option v-for="firma in uniqueFirmalar" :key="firma" :value="firma">
          {{ firma }}
        </option>
      </select>
    </div>

    <!-- Sağlık Raporu / Sertifika / Eğitim Geçerlilik Durumu -->
    

    <!--Testto-->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">
        Sağlık Raporları, Sertifikalar ve Eğitimler
      </h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Çalışan Adı</th>
            <th class="py-3 px-6 text-left">Çalışan Firma Adı</th>
            <th class="py-3 px-6 text-left">Sağlık Raporu Geçerlilik</th>
            <th class="py-3 px-6 text-left">Sertifika Geçerlilik</th>
            <th class="py-3 px-6 text-left">Eğitim Geçerlilik</th>
            <th class="py-3 px-6 text-left">Durum</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-for="calisan in filteredCalisanlar"
            :key="calisan.id"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-3 px-6">
              {{ calisan.adi }} {{ calisan.soyadi }}
            </td>
            <td class="py-3 px-6">{{ calisan.firma.firmaAdi }}</td>
            <td class="py-3 px-6">
              <span
                :class="getStatusClass(calisan.saglikRaporuGecerlilik)"
              >
                {{ calisan.saglikRaporuGecerlilik }}
                <span v-show="calisan.saglikRaporuGecerlilik !== 'Yok'">gün</span>
              </span>
            </td>
            <td class="py-3 px-6">
              <span
                :class="getStatusClass(calisan.sertifikaGecerlilik)"
              >
                {{ calisan.sertifikaGecerlilik }}
                <span v-show="calisan.sertifikaGecerlilik !== 'Yok'">gün</span>
              </span>
            </td>
            <td class="py-3 px-6">
              <span
                :class="getStatusClass(calisan.egitimGecerlilik)"
              >
                {{ calisan.egitimGecerlilik }}
                <span v-show="calisan.egitimGecerlilik !== 'Yok'">gün</span>
              </span>
            </td>
            <td class="py-3 px-6">
              <span
                :class="[calisan.aktif ? 'text-green-500' : 'text-red-500']"
              >
                {{ calisan.aktif ? 'Aktif' : 'Pasif' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const firmaSayisi = ref(0);
const yerleskeSayisi = ref(0);
const calisanSayisi = ref(0);
const calisanlar = ref([]);
const selectedFirma = ref(""); // Filtreleme için seçilen firma

onMounted(async () => {
  // Firma, yerleşke, çalışan verilerini çekme
  const { data: firmaData } = await useFetch('/api/firma/get');
  const { data: yerleskeData } = await useFetch('/api/yerleske/get');
  const { data: calisanData } = await useFetch('/api/calisan/get');

  firmaSayisi.value = firmaData.value.length;
  yerleskeSayisi.value = yerleskeData.value.length;
  calisanSayisi.value = calisanData.value.length;



  // Çalışanların sağlık raporu, sertifika ve eğitim geçerlilik sürelerini hesaplama
  calisanlar.value = await Promise.all(calisanData.value.map(async calisan => {
    const egitimGecerlilik = await fetchEgitimGecerlilik(calisan.id);
    return {
      ...calisan,
      saglikRaporuGecerlilik: calculateDaysRemaining(calisan.saglikRaporlari),
      sertifikaGecerlilik: calculateDaysRemaining(calisan.sertifikalar),
      egitimGecerlilik: egitimGecerlilik,
    };
  }));
});

  // Benzersiz firma adlarını çekmek
  const uniqueFirmalar = computed(() => {
  const firmalar = calisanlar.value.map((calisan) => calisan.firma.firmaAdi);
  return [...new Set(firmalar)];
});

// Firma adına göre filtrelenmiş çalışanlar
const filteredCalisanlar = computed(() => {
  if (!selectedFirma.value) return calisanlar.value; // Filtre seçilmemişse tüm çalışanları döndür
  return calisanlar.value.filter(
    (calisan) => calisan.firma.firmaAdi === selectedFirma.value
  );
});

// Çalışanları geçerlilik sürelerine göre azalan şekilde sıralama
const sortedCalisanlar = computed(() => {
  return [...calisanlar.value].sort((a, b) => {
    const aMin = Math.min(
      convertToNumber(a.saglikRaporuGecerlilik),
      convertToNumber(a.sertifikaGecerlilik),
      convertToNumber(a.egitimGecerlilik)
    );
    const bMin = Math.min(
      convertToNumber(b.saglikRaporuGecerlilik),
      convertToNumber(b.sertifikaGecerlilik),
      convertToNumber(b.egitimGecerlilik)
    );
    return aMin - bMin; // Azdan çoğa sıralama
  });
});

// 'Yok' olan geçerlilik sürelerini sayısal değere dönüştürme
const convertToNumber = (value) => {
  if (value === 'Yok') return Infinity; // 'Yok' varsa sonsuz olarak kabul et
  return Number(value); // Sayısal değeri döndür
};

const fetchEgitimGecerlilik = async (calisanId) => {
  const { data: egitimData } = await useFetch(`/api/egitim/getByCalisanId?calisanId=${calisanId}`);
  if (egitimData.value.length === 0) return 'Yok';
  
  const today = new Date();
  const expirationDate = new Date(egitimData.value[0].gecerlilikTarihi); // İlk eğitim kaydını alıyoruz
  const diffTime = expirationDate - today;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Gün olarak döndür
};

const calculateDaysRemaining = (documents) => {
  if (documents.length === 0) return 'Yok';
  const today = new Date();
  const expirationDate = new Date(documents[0].gecerlilikTarihi); // İlk belgeyi baz alıyoruz
  const diffTime = expirationDate - today;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Gün olarak döndür
};

const getStatusClass = (daysRemaining) => {
  if (daysRemaining === 'Yok') return 'text-gray-500';
  return daysRemaining > 30 ? 'text-green-500' : 'text-red-500';
};
</script>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}
</style>
