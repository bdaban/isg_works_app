<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold mb-6">Eğitim Konuları ve Kategoriler</h1>

    <!-- Yeni Kategori Ekleme -->
    <div class="mb-4">
      <form @submit.prevent="addKategori">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Kategori Adı</label>
          <input v-model="kategori.isim" type="text" class="border p-2 w-80 rounded-md" required />
        </div>
        <button type="submit" class="bg-green-600 text-white py-2 px-4 rounded-md">Kategori Ekle</button>
      </form>
    </div>

    <!-- Yeni Eğitim Konusu Ekleme -->
    <div class="mb-4">
      <form @submit.prevent="addEgitimKonu">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Kategori</label>
          <select v-model="egitimKonu.kategoriId" class="border p-2 w-80 rounded-md" required>
            <option v-for="kategori in kategoriler" :key="kategori.id" :value="kategori.id">
              {{ kategori.isim }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Başlık</label>
          <input v-model="egitimKonu.baslik" type="text" class="border p-2 w-full rounded-md" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Açıklama</label>
          <input v-model="egitimKonu.aciklama" type="text" class="border p-2 w-full rounded-md" />
        </div>
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Eğitim Konusu Ekle</button>
      </form>
    </div>

    <!-- Kategoriler ve Eğitim Konuları -->
    <div class="mt-6">
      <h2 class="text-xl font-semibold mb-4">Kategoriler ve Eğitim Konuları</h2>
      <div v-for="kategori in kategoriler" :key="kategori.id" class="mb-6">
        <h3 class="text-lg font-bold text-gray-700 mb-2">{{ kategori.isim }}</h3>
        <table class="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Başlık</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Açıklama</th>
              <th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="konu in kategori.egitimKonular"
              :key="konu.id"
              class="text-center bg-white border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 text-gray-700">{{ konu.baslik }}</td>
              <td class="py-2 px-4 text-gray-700">{{ konu.aciklama }}</td>
              <td class="py-2 px-4 text-center">
                <!-- Düzenle ve Sil Butonları -->
                <button @click="editEgitimKonu(konu)" class="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2">Düzenle</button>
                <button @click="deleteEgitimKonu(konu.id)" class="bg-red-500 text-white px-2 py-1 rounded-lg">Sil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

---

<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "#app";

const kategoriler = ref([]);
const egitimKonulari = ref([]);
const kategori = ref({ isim: "" });
const egitimKonu = ref({ baslik: "", aciklama: "", kategoriId: null });

// Kategorileri ve Eğitim Konularını Getir
const fetchKategoriler = async () => {
  const { data } = await useFetch("/api/kategori/get");
  kategoriler.value = data.value || [];
};

// Yeni Kategori Ekle
const addKategori = async () => {
  await useFetch("/api/kategori/post", {
    method: "POST",
    body: kategori.value,
  });
  kategori.value = { isim: "" };
  fetchKategoriler();
};

// Yeni Eğitim Konusu Ekle
const addEgitimKonu = async () => {
  await useFetch("/api/egitimkonu/post", {
    method: "POST",
    body: egitimKonu.value,
  });
  egitimKonu.value = { baslik: "", aciklama: "", kategoriId: null };
  fetchKategoriler();
};

// Eğitim Konusunu Düzenle
const editEgitimKonu = (konu) => {
  egitimKonu.value = { ...konu };
};

// Eğitim Konusunu Sil
const deleteEgitimKonu = async (id) => {
  try {
    // Dinamik rota üzerinden DELETE isteği yap
    const { data, error } = await useFetch(`/api/egitimkonu/${id}`, { 
      method: "DELETE" 
    });

    if (error) {
      console.error("Eğitim konusu silinirken bir hata oluştu:", error);
      alert("Eğitim konusu silinemedi. Lütfen tekrar deneyin.");
      fetchKategoriler();
    } else {
      alert("Eğitim konusu başarıyla silindi.");
      // Kategorileri güncelle
      fetchKategoriler();
    }
  } catch (err) {
    console.error("Beklenmeyen bir hata oluştu:", err);
    alert("Eğitim konusu silinirken bir hata oluştu.");
    fetchKategoriler();
  }
};

onMounted(() => {
  fetchKategoriler();
});
</script>
