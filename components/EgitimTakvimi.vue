<template>
  <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-4">
      <button @click="prevMonth" :class="prevButtonColor"  class="text-white px-4 py-2 rounded">Önceki Ay</button>
      <h1 class="text-2xl font-bold text-center"> {{ formath1(currentMonth),{locale:tr} }} </h1>

      <button @click="nextMonth" :class="nextButtonColor" class=" text-white px-4 py-2 rounded">Sonraki Ay</button>
    </div>

    <!-- Takvim Başlıkları (Günler) -->
    <div class="grid grid-cols-7 gap-4 text-center font-semibold text-gray-600">
      <div v-for="day in daysOfWeek" :key="day">{{ day }}</div>
    </div>

    <!-- Takvim Günleri -->
    <div class="grid grid-cols-7 gap-4 mt-2">
      <!-- Boş Hücreler -->
      <div v-for="n in firstDayOfMonth" :key="'empty-' + n" class="h-20"></div>
      
      <!-- Ayın Günleri -->
      <div 
        v-for="day in daysInMonth" 
        :key="'day-' + day" 
        :class="{
          'h-20 border rounded p-1 cursor-pointer': true, 
          'bg-gray-100 text-white': isToday(day)
        }"
        @click="openModal(day)"
      >
        <div class="text-gray-800 font-bold">{{ day }}</div>
        
        <!-- Randevu Sayısı -->
        <div v-if="getEgtsForDay(day).length > 0" class="text-xs mt-1 text-blue-500">
          {{ getEgtsForDay(day).length }} Egitim
        </div>
      </div>
    </div>

    <!-- Randevu Detayları için Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg p-4 max-w-xl w-full space-y-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-bold">Eğitim Özeti {{ formatDate(selectedDate) }}</h2>
          <button @click="closeModal" class="text-gray-600">X</button>
        </div>
        <ul>
          <li v-for="egt in getEgtsForDay(selectedDate.getDate())" :key="egt.id" class="p-2 border-b">
           <span class="text-blue-600">{{ egt.calisan.firma.firmaAdi }}-{{ egt.calisan.yerleske.subeAdi }}</span> - {{ egt.calisan.adi }} {{ egt.calisan.soyadi }} -
          <span class="text-red-600 px-2">{{ egt.egitimKonu.baslik }} </span>
         
          </li>
        </ul>
      </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { addMonths, subMonths, startOfMonth, endOfMonth, isSameDay, format } from 'date-fns';
import { tr } from 'date-fns/locale';

const route = useRoute();

const egitim = ref([]);
const currentMonth = ref(new Date());
const selectedDate = ref(new Date());
const isModalOpen = ref(false);
const firmaId = ref('');

const daysOfWeek = ["Paz", "Pzt", "Salı", "Çar", "Per", "Cum", "Cmt"];

onMounted( ()=>{
  firmaId.value = route.query.firmaId
  if (!currentMonth.value) {
    currentMonth.value = new Date();
  }
fetchAppointments();
console.log('Gelen ID :',firmaId.value)

})

const firstDayOfMonth = computed(() => {
  const firstDay = startOfMonth(currentMonth.value);
  return firstDay.getDay();
});

const daysInMonth = computed(() => {
  const start = startOfMonth(currentMonth.value);
  const end = endOfMonth(currentMonth.value);
  return Array.from({ length: end.getDate() }, (_, i) => i + 1);
});

//eğitim tarihi
const getEgtsForDay = (day) => {
  const date = new Date(currentMonth.value);
  date.setDate(day);
  return egitim.value.filter(egt => isSameDay(new Date(egt.date), date));
};

const openModal = (day) => {
  selectedDate.value = new Date(currentMonth.value);
  selectedDate.value.setDate(day);
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const formatDate = (date) => format(date, 'dd-MM-yyyy');
const formath1 = (date) => format(date, 'MMMM yyyy', { locale: tr });


// Ayı değiştiren fonksiyonlar
const prevMonth = async () => {
  currentMonth.value = subMonths(currentMonth.value, 1);
  await fetchAppointments();
};

const nextMonth = async () => {
  currentMonth.value = addMonths(currentMonth.value, 1);
  await fetchAppointments();
};

// Eğitim API'den çekme
const fetchAppointments = async () => {
  try {
  const { data: egtdata } = await useFetch(`/api/egitim/getByFirmaId?firmaId=${firmaId.value}`);
  console.log('Eğitim Verileri:', egtdata.value);
  egitim.value = egtdata.value.map((apt) => ({
    ...apt,
    date: new Date(apt.egitimTarihi),
  }));
} catch (error) {
  console.error('Bir hata oluştu:', error);
}

 
};

// Bugün ile eşleşen günü kontrol etme
const isToday = (day) => {
  const date = new Date(currentMonth.value);
  date.setDate(day);
  return isSameDay(date, new Date());
};



// Mevsime göre buton rengi belirleme
const season = computed(() => {
  const month = currentMonth.value.getMonth() + 1; // Aylar 0'dan başladığı için 1 ekliyoruz
  if (month >= 3 && month <= 5) return 'spring'; // İlkbahar
  if (month >= 6 && month <= 8) return 'summer'; // Yaz
  if (month >= 9 && month <= 11) return 'autumn'; // Sonbahar
  return 'winter'; // Kış
});

const prevButtonColor = computed(() => {
  switch (season.value) {
    case 'spring':
      return 'bg-green-300'; // İlkbahar
    case 'summer':
      return 'bg-yellow-300'; // Yaz
    case 'autumn':
      return 'bg-orange-300'; // Sonbahar
    case 'winter':
      return 'bg-blue-300'; // Kış
  }
});
const nextButtonColor = computed(() => {
  switch (season.value) {
    case 'spring':
      return 'bg-green-500'; // İlkbahar
    case 'summer':
      return 'bg-yellow-500'; // Yaz
    case 'autumn':
      return 'bg-orange-500'; // Sonbahar
    case 'winter':
      return 'bg-blue-500'; // Kış
  }
});
  
</script>

<style scoped>
/* Modal için özel stiller */
.fixed {
  z-index: 50;
}
</style>
