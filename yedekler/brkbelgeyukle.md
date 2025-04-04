<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Firma Evrak Yükleme</h1>

    <!--Bura yeni-->
    <form @submit.prevent="uploadFile"  class="space-y-4">
      <div>
       <label class="block text-sm font-medium text-gray-700" for="firmaId">Firma:</label>
  <select class="border p-2 rounded w-80ss" v-model="firmaId" id="firmaId" required>
    <option v-for="firma in firmalar" :key="firma.id" :value="firma.id">{{ firma.firmaAdi }}</option>
  </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="kategoriId">Kategori:</label>
  <select class="border p-2 rounded w-80" v-model="kategoriId" id="kategoriId" required>
    <option value="1">Firma Evrakları</option>
    <option value="2">İSG Evrakları</option>
  </select>
      </div>
<!--Bura eklendi-->
<div>
      <label class="block text-sm font-medium text-gray-700"  for="evrakTuru">Evrak Türü</label>
      <select class="border p-2 rounded w-80" v-model="evrakTuru" id="evrakTuru" required>
        <option>Risk Analizi</option>
        <option>Acil Durum Eylem Planı</option>
        <option>KKD</option>
        <option>Zimmet Formu</option>
        <option>Oryantasyon Formu</option>
        <option>Çalışma Talimatı</option>
      </select>
    </div>

      <div>
          <label class="block text-sm font-medium text-gray-700" for="file">Dosya:</label>
  <input class="border p-2 rounded w-80" type="file" id="file" @change="handleFile" required />
      </div>
  <button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Yükle</button>
</form>

  </div>

  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Firma Evrak Yükleme</h1>

    <!-- Evrak Yükleme Formu -->
    <form @submit.prevent="uploadFile" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="firmaId">Firma:</label>
        <select class="border p-2 rounded w-80" v-model="firmaId" id="firmaId" required>
          <option v-for="firma in firmalar" :key="firma.id" :value="firma.id">{{ firma.firmaAdi }}</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="kategoriId">Kategori:</label>
        <select class="border p-2 rounded w-80" v-model="kategoriId" id="kategoriId" required>
          <option value="1">Firma Evrakları</option>
          <option value="2">İSG Evrakları</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="evrakTuru">Evrak Türü</label>
        <select class="border p-2 rounded w-80" v-model="evrakTuru" id="evrakTuru" required>
          <option>Risk Analizi</option>
          <option>Acil Durum Eylem Planı</option>
          <option>KKD</option>
          <option>Zimmet Formu</option>
          <option>Oryantasyon Formu</option>
          <option>Çalışma Talimatı</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="file">Dosya:</label>
        <input class="border p-2 rounded w-80" type="file" id="file" @change="handleFile" required />
      </div>

      <button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Yükle</button>
    </form>

    <!-- Evrak Listesi -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Yüklenen Evraklar</h2>

      <!-- Arama ve Filtreleme -->
      <div class="flex justify-between items-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Firma adına göre ara..."
          class="border p-2 rounded w-80"
        />
      </div>

      <table class="w-full border-collapse bg-white text-left shadow-md rounded-md">
        <thead>
          <tr class="bg-gray-200 text-gray-700">
            <th class="p-3 border-b">Firma Adı</th>
            <th class="p-3 border-b">Kategori</th>
            <th class="p-3 border-b">Evrak Türü</th>
            <th class="p-3 border-b">Dosya Adı</th>
            <th class="p-3 border-b">Yüklenme Tarihi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="evrak in filteredEvraklar"
            :key="evrak.id"
            class="border-b hover:bg-gray-100"
          >
            <td class="p-3">{{ evrak.firma.firmaAdi }}</td>
            <td class="p-3">{{ evrak.kategoriId === 1 ? 'Firma Evrakları' : 'İSG Evrakları' }}</td>
            <td class="p-3">{{ evrak.evrakTuru }}</td>
            <td class="p-3">
              <a :href="evrak.dosyaYolu" target="_blank" class="text-blue-500 underline">
                {{ evrak.dosyaAdi }}
              </a>
            </td>
            <td class="p-3">{{ formatDate(evrak.yuklenmeTarihi) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const firmalar = ref([]);
const kategoriler = ref([]);
const selectedFirmaId = ref(null);
const selectedKategoriId = ref(null);
const fileInput = ref(null);
const evraklar = ref([]);

onMounted(async () => {
  const { data: firmaData } = await useFetch('/api/firma/get');
  const { data: kategoriData } = await useFetch('/api/firmaevrak/get');
  firmalar.value = firmaData.value;
  kategoriler.value = kategoriData.value;
  fetchEvraklar();
});

// Evrakları arama ve filtreleme
const filteredEvraklar = computed(() => {
  return evraklar.value.filter((evrak) =>
    evrak.firma.firmaAdi.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};



const fetchEvraklar = async () => {
  const { data: evrakData } = await useFetch('/api/evrak/get');
  evraklar.value = evrakData.value;
};

const firmaId = ref(null);
const kategoriId = ref(null);
const evrakTuru=ref('');
const file = ref(null);

const handleFile = (event) => {
  file.value = event.target.files[0];
};

const uploadFile = async () => {
  const formData = new FormData();
  formData.append('firmaId', firmaId.value);
  formData.append('kategoriId', kategoriId.value);
  formData.append('file', file.value);
  formData.append('evrakTuru',evrakTuru.value);

  try {
    await $fetch('/api/evrak/upload', {
      method: 'POST',
      body: formData,
    });
    alert('Dosya başarıyla yüklendi');
  } catch (error) {
    console.error('Yükleme hatası:', error);
    alert('Dosya yüklenemedi');
  }
};
</script>
