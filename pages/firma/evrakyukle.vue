<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Firma Evrak Yükleme</h1>

    <form @submit.prevent="uploadEvrak" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Firma</label>
        <select v-model="selectedFirmaId" class="border p-2 rounded w-full">
          <option v-for="firma in firmalar" :key="firma.id" :value="firma.id">{{ firma.adi }}</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Kategori</label>
        <select v-model="selectedKategoriId" class="border p-2 rounded w-full">
          <option v-for="kategori in kategoriler" :key="kategori.id" :value="kategori.id">{{ kategori.isim }}</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Dosyalar</label>
        <input type="file" ref="fileInput" multiple class="border p-2 rounded w-full" />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Yükle</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const firmalar = ref([]);
const kategoriler = ref([]);
const selectedFirmaId = ref(null);
const selectedKategoriId = ref(null);
const fileInput = ref(null);

onMounted(async () => {
  const { data: firmaData } = await useFetch('/api/firma/get');
  const { data: kategoriData } = await useFetch('/api/kategori/get');
  firmalar.value = firmaData.value;
  kategoriler.value = kategoriData.value;
});

const uploadEvrak = async () => {
  const formData = new FormData();
  formData.append('firmaId', selectedFirmaId.value);
  formData.append('kategoriId', selectedKategoriId.value);
  
  for (const file of fileInput.value.files) {
    formData.append('file', file);
  }

  await useFetch('/api/evrak/upload', { method: 'POST', body: formData });
  alert('Dosyalar başarıyla yüklendi!');
};
</script>
