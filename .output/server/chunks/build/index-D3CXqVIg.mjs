import { _ as __nuxt_component_0 } from './nuxt-link-CKx3Dd7p.mjs';
import { ref, computed, watch, withCtx, createTextVNode, unref, useSSRContext, toValue, reactive } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { F as hash } from '../runtime.mjs';
import { f as fetchDefaults, b as useNuxtApp } from './server.mjs';
import { u as useAsyncData } from './asyncData-yTgk537R.mjs';
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
import 'vue-router';
import '@iconify/vue';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, "Request aborted as another request to the same endpoint was initiated.");
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort("Request aborted due to timeout."), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const selectedKategori = ref(null);
    const isModalOpen = ref(false);
    const egitimler = ref([]);
    const egitimKategorileri = ref([]);
    const filteredEgitimKonular = ref([]);
    ref(null);
    const selectedEgitimKonular = ref([]);
    const isEgitimModalOpen = ref(false);
    const isEditMode = ref(false);
    const egitimFormFields = ref({
      id: null,
      egitimTarihi: "",
      gecerlilikTarihi: "",
      sure: ""
    });
    const firmalar = ref([]);
    const yerleskeler = ref([]);
    const calisanlar = ref([]);
    const selectedFirmaId = ref(null);
    const selectedYerleskeId = ref(null);
    const selectedCalisanlar = ref([]);
    ref(null);
    const expandedRow = ref(null);
    const groupedEgitimler22 = computed(() => {
      const grouped = {};
      egitimler.value.forEach((egitim) => {
        var _a;
        const calisanId = egitim.calisan.id;
        const calisanName = `${egitim.calisan.adi} ${egitim.calisan.soyadi}`;
        const firmaAdi = egitim.calisan.firma.firmaAdi;
        const yerleskeAdi = ((_a = egitim.calisan.yerleske) == null ? void 0 : _a.subeAdi) || "Merkez";
        const egttarih = egitim.egitimTarihi;
        if (!grouped[calisanId]) {
          grouped[calisanId] = {
            calisanName,
            firmaAdi,
            yerleskeAdi,
            egttarih,
            kategoriler: {}
          };
        }
        const kategori = egitim.egitimKonu.kategori.isim;
        if (!grouped[calisanId].kategoriler[kategori]) {
          grouped[calisanId].kategoriler[kategori] = [];
        }
        grouped[calisanId].kategoriler[kategori].push({
          baslik: egitim.egitimKonu.baslik,
          egitimTarihi: egitim.egitimTarihi,
          gecerlilikTarihi: egitim.gecerlilikTarihi
        });
      });
      return grouped;
    });
    ref(null);
    const fetchCalisanlar22 = async () => {
      let endpoint = "";
      if (selectedYerleskeId.value) {
        endpoint = `/api/calisan/getByYerleskeId?yerleskeId=${selectedYerleskeId.value}`;
      } else if (selectedFirmaId.value) {
        endpoint = `/api/calisan/getByFirmaId?firmaId=${selectedFirmaId.value}`;
      }
      if (endpoint) {
        const { data } = await useFetch(endpoint, "$YxkwfVwZHg");
        calisanlar.value = data.value || [];
      } else {
        calisanlar.value = [];
      }
    };
    watch(
      [selectedFirmaId, selectedYerleskeId],
      () => {
        fetchCalisanlar22();
      },
      { immediate: true }
    );
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("tr-TR");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg"><h1 class="text-2xl font-semibold mb-6">E\u011Fitimler</h1><div class="mb-4"><button class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"> Yeni E\u011Fitim Ekle </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/egitimler/ekle",
        class: "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` E\u011Fitim Konusu Ekle `);
          } else {
            return [
              createTextVNode(" E\u011Fitim Konusu Ekle ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><table class="min-w-full bg-white rounded-lg shadow-lg border border-gray-300"><thead><tr class="border-b border-gray-300"><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">\xC7al\u0131\u015Fan Ad\u0131</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">Firma Ad\u0131</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase border-r border-gray-300">Ta\u015Feron Ad\u0131</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">E\u011Fitim Kategorileri ve Detaylar</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(groupedEgitimler22), (data, calisanId) => {
        _push(`<tr class="border-b border-gray-300"><td class="py-2 px-4 text-gray-700 border-r border-gray-300">${ssrInterpolate(data.calisanName)}</td><td class="py-2 px-4 text-gray-700 border-r border-gray-300">${ssrInterpolate(data.firmaAdi)}</td><td class="py-2 px-4 text-gray-700 border-r border-gray-300">${ssrInterpolate(data.yerleskeAdi)}</td><td class="py-2 px-4 text-gray-700"><button class="text-blue-500 hover:text-blue-700">${ssrInterpolate(unref(expandedRow) === calisanId ? "Detaylar\u0131 Gizle" : "Detaylar\u0131 G\xF6r")}</button>`);
        if (unref(expandedRow) === calisanId) {
          _push(`<div class="mt-2 border-t border-gray-300 pt-2"><!--[-->`);
          ssrRenderList(data.kategoriler, (egitimler2, kategori) => {
            _push(`<div class="mb-4"><strong class="text-red-400">${ssrInterpolate(kategori)}</strong><ul class="mt-2 ml-4 list-disc"><!--[-->`);
            ssrRenderList(egitimler2, (egitim) => {
              _push(`<li class="mb-2"><strong class="font-bold">${ssrInterpolate(egitim.baslik)}</strong><div>Tarih: ${ssrInterpolate(formatDate(egitim.egitimTarihi))}</div><div>Ge\xE7erlilik Tarihi: ${ssrInterpolate(formatDate(egitim.gecerlilikTarihi))}</div></li>`);
            });
            _push(`<!--]--></ul></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if (unref(isModalOpen)) {
        _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"><h2 class="text-2xl font-bold mb-4">${ssrInterpolate(unref(selectedKategori).isim)}</h2><ul class="list-disc ml-6"><!--[-->`);
        ssrRenderList(unref(selectedKategori).egitimKonular, (egitim) => {
          _push(`<li>${ssrInterpolate(egitim.baslik)}</li>`);
        });
        _push(`<!--]--></ul><button class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"> Kapat </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isEgitimModalOpen)) {
        _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"><h2 class="text-2xl mb-4">${ssrInterpolate(unref(isEditMode) ? "E\u011Fitimi D\xFCzenle" : "Yeni E\u011Fitim Ekle")}</h2><form><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Firma Se\xE7imi</label><select class="border p-2 w-full rounded-md" required><!--[-->`);
        ssrRenderList(unref(firmalar), (firma) => {
          _push(`<option${ssrRenderAttr("value", firma.id)}>${ssrInterpolate(firma.firmaAdi)}</option>`);
        });
        _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Ta\u015Feron Se\xE7imi</label><select class="border p-2 w-full rounded-md"${ssrIncludeBooleanAttr(unref(yerleskeler).length > 0) ? " required" : ""}><!--[-->`);
        ssrRenderList(unref(yerleskeler), (yerleske) => {
          _push(`<option${ssrRenderAttr("value", yerleske.id)}>${ssrInterpolate(yerleske.subeAdi)}</option>`);
        });
        _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">\xC7al\u0131\u015Fan Se\xE7imi</label><div class="grid grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(unref(calisanlar), (calisan) => {
          _push(`<div class="flex items-center border-b border-gray-200 py-2 px-4"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCalisanlar)) ? ssrLooseContain(unref(selectedCalisanlar), calisan.id) : unref(selectedCalisanlar)) ? " checked" : ""}${ssrRenderAttr("value", calisan.id)} class="mr-4"><div class="flex-1 flex space-x-2"><span>${ssrInterpolate(calisan.adi)}</span><span>${ssrInterpolate(calisan.soyadi)}</span></div></div>`);
        });
        _push(`<!--]--></div></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">E\u011Fitim Kategorisi</label><select class="border p-2 w-full rounded-md" required><!--[-->`);
        ssrRenderList(unref(egitimKategorileri), (kategori) => {
          _push(`<option${ssrRenderAttr("value", kategori.id)}>${ssrInterpolate(kategori.isim)}</option>`);
        });
        _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">E\u011Fitim Konular\u0131</label>`);
        if (unref(filteredEgitimKonular).length > 0) {
          _push(`<div><!--[-->`);
          ssrRenderList(unref(filteredEgitimKonular), (konu) => {
            _push(`<div class="flex items-center mb-2"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedEgitimKonular)) ? ssrLooseContain(unref(selectedEgitimKonular), konu.id) : unref(selectedEgitimKonular)) ? " checked" : ""}${ssrRenderAttr("value", konu.id)} class="mr-2"><span>${ssrInterpolate(konu.baslik)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<p class="text-sm text-gray-500">Bu kategoride e\u011Fitim konusu bulunmamaktad\u0131r.</p>`);
        }
        _push(`</div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">E\u011Fitim S\xFCresi</label><input${ssrRenderAttr("value", unref(egitimFormFields).sure)} type="number" min="1" class="border p-2 w-full rounded-md" placeholder="Saat veya dakika olarak giriniz" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">E\u011Fitim Tarihi</label><input${ssrRenderAttr("value", unref(egitimFormFields).egitimTarihi)} type="date" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Ge\xE7erlilik Tarihi</label><input${ssrRenderAttr("value", unref(egitimFormFields).gecerlilikTarihi)} type="date" class="border p-2 w-full rounded-md" required></div><div class="space-y-2"><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">${ssrInterpolate(unref(isEditMode) ? "G\xFCncelle" : "Kaydet")}</button><button class="bg-red-600 text-white py-2 px-4 rounded-md w-full">Kapat</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/egitimler/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D3CXqVIg.mjs.map
