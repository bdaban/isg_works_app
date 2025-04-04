import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useSSRContext, ref, computed, mergeProps, unref } from 'vue';
import { useRoute } from 'vue-router';
import { startOfMonth, endOfMonth, isSameDay, format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@iconify/vue';

const _sfc_main$1 = {
  __name: "EgitimTakvimi",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const egitim = ref([]);
    const currentMonth = ref(/* @__PURE__ */ new Date());
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const isModalOpen = ref(false);
    ref("");
    const daysOfWeek = ["Paz", "Pzt", "Sal\u0131", "\xC7ar", "Per", "Cum", "Cmt"];
    const firstDayOfMonth = computed(() => {
      const firstDay = startOfMonth(currentMonth.value);
      return firstDay.getDay();
    });
    const daysInMonth = computed(() => {
      startOfMonth(currentMonth.value);
      const end = endOfMonth(currentMonth.value);
      return Array.from({ length: end.getDate() }, (_, i) => i + 1);
    });
    const getEgtsForDay = (day) => {
      const date = new Date(currentMonth.value);
      date.setDate(day);
      return egitim.value.filter((egt) => isSameDay(new Date(egt.date), date));
    };
    const formatDate = (date) => format(date, "dd-MM-yyyy");
    const formath1 = (date) => format(date, "MMMM yyyy", { locale: tr });
    const isToday = (day) => {
      const date = new Date(currentMonth.value);
      date.setDate(day);
      return isSameDay(date, /* @__PURE__ */ new Date());
    };
    const season = computed(() => {
      const month = currentMonth.value.getMonth() + 1;
      if (month >= 3 && month <= 5)
        return "spring";
      if (month >= 6 && month <= 8)
        return "summer";
      if (month >= 9 && month <= 11)
        return "autumn";
      return "winter";
    });
    const prevButtonColor = computed(() => {
      switch (season.value) {
        case "spring":
          return "bg-green-300";
        case "summer":
          return "bg-yellow-300";
        case "autumn":
          return "bg-orange-300";
        case "winter":
          return "bg-blue-300";
      }
    });
    const nextButtonColor = computed(() => {
      switch (season.value) {
        case "spring":
          return "bg-green-500";
        case "summer":
          return "bg-yellow-500";
        case "autumn":
          return "bg-orange-500";
        case "winter":
          return "bg-blue-500";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md" }, _attrs))} data-v-cb650fc1><div class="flex justify-between items-center mb-4" data-v-cb650fc1><button class="${ssrRenderClass([prevButtonColor.value, "text-white px-4 py-2 rounded"])}" data-v-cb650fc1>\xD6nceki Ay</button><h1 class="text-2xl font-bold text-center" data-v-cb650fc1>${ssrInterpolate(formath1(currentMonth.value), { locale: unref(tr) })}</h1><button class="${ssrRenderClass([nextButtonColor.value, "text-white px-4 py-2 rounded"])}" data-v-cb650fc1>Sonraki Ay</button></div><div class="grid grid-cols-7 gap-4 text-center font-semibold text-gray-600" data-v-cb650fc1><!--[-->`);
      ssrRenderList(daysOfWeek, (day) => {
        _push(`<div data-v-cb650fc1>${ssrInterpolate(day)}</div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-7 gap-4 mt-2" data-v-cb650fc1><!--[-->`);
      ssrRenderList(firstDayOfMonth.value, (n) => {
        _push(`<div class="h-20" data-v-cb650fc1></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(daysInMonth.value, (day) => {
        _push(`<div class="${ssrRenderClass({
          "h-20 border rounded p-1 cursor-pointer": true,
          "bg-gray-100 text-white": isToday(day)
        })}" data-v-cb650fc1><div class="text-gray-800 font-bold" data-v-cb650fc1>${ssrInterpolate(day)}</div>`);
        if (getEgtsForDay(day).length > 0) {
          _push(`<div class="text-xs mt-1 text-blue-500" data-v-cb650fc1>${ssrInterpolate(getEgtsForDay(day).length)} Egitim </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (isModalOpen.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" data-v-cb650fc1><div class="bg-white rounded-lg p-4 max-w-xl w-full space-y-4" data-v-cb650fc1><div class="flex justify-between items-center" data-v-cb650fc1><h2 class="text-xl font-bold" data-v-cb650fc1>E\u011Fitim \xD6zeti ${ssrInterpolate(formatDate(selectedDate.value))}</h2><button class="text-gray-600" data-v-cb650fc1>X</button></div><ul data-v-cb650fc1><!--[-->`);
        ssrRenderList(getEgtsForDay(selectedDate.value.getDate()), (egt) => {
          _push(`<li class="p-2 border-b" data-v-cb650fc1><span class="text-blue-600" data-v-cb650fc1>${ssrInterpolate(egt.calisan.firma.firmaAdi)}-${ssrInterpolate(egt.calisan.yerleske.subeAdi)}</span> - ${ssrInterpolate(egt.calisan.adi)} ${ssrInterpolate(egt.calisan.soyadi)} - <span class="text-red-600 px-2" data-v-cb650fc1>${ssrInterpolate(egt.egitimKonu.baslik)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EgitimTakvimi.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EgitimTakvimi = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cb650fc1"]]);
const _sfc_main = {
  __name: "takvim",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(EgitimTakvimi, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/firma/takvim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=takvim-BhuPkwSE.mjs.map
