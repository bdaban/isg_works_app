import __nuxt_component_1 from "./index-DxiqHVyn.js";
import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "hookable";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "consola";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "klona";
import "./index-DMqtYQSF.js";
import "./asyncData-yTgk537R.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(0);
    ref(0);
    useRouter();
    const activeDropdown = ref(null);
    const activeDropdown2 = ref(null);
    const naceList = ref([]);
    ref(null);
    ref([]);
    const expandedFirma = ref(null);
    const firmaSubeleri = ref({});
    ref(null);
    const firmalar = ref([]);
    const searchQuery = ref({ name: "", yetkili: "" });
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
      "Serik"
    ];
    ref();
    const firma = ref({
      firmaKodu: "",
      firmaAdi: "",
      adres: "",
      il: "",
      ilce: "",
      telefon: "",
      email: "",
      yetkili: "",
      naceId: 0,
      isgkSicilNo: "",
      tehlikeSinifi: ""
    });
    const showModal = ref(false);
    const filteredFirmalar = computed(() => {
      return firmalar.value.filter(
        (firma2) => firma2.firmaAdi.toLowerCase().includes(searchQuery.value.name.toLowerCase()) && firma2.yetkili.toLowerCase().includes(searchQuery.value.yetkili.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-3xl font-semibold mb-6 text-gray-800">Firmalar</h1><div class="flex flex-wrap items-center mb-4"><input${ssrRenderAttr("value", searchQuery.value.name)} type="text" placeholder="Firma Adında Ara" class="w-full md:w-1/6 p-2 border rounded-lg mr-2 mb-2"><button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md ml-auto mb-2 transition duration-300"> Yeni Firma Ekle </button></div>`);
      if (showModal.value) {
        _push(`<div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"><h2 class="text-2xl font-medium text-gray-700 mb-4">${ssrInterpolate(firma.value.id ? "Firmayı Düzenle" : "Yeni Firma Ekle")}</h2><form><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-gray-600 mb-1">Firma Kodu</label><input${ssrRenderAttr("value", firma.value.firmaKodu)} type="text" class="w-24 p-3 border rounded-lg" placeholder="Firma kodu yükleniyor..." required><button type="button" class="px-4 py-2 mx-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md">KodAl</button></div><div><label class="block text-gray-600 mb-1">Firma Adı</label><input${ssrRenderAttr("value", firma.value.firmaAdi)} type="text" class="w-full p-3 border rounded-lg" required></div><div class="col-span-1 md:col-span-2"><label class="block text-gray-600 mb-1">Adres</label><input${ssrRenderAttr("value", firma.value.adres)} type="text" class="w-full p-3 border rounded-lg" required></div><div><label class="block text-gray-600 mb-1">İl</label><select class="w-full p-3 border rounded-lg" required><option value="Antalya"${ssrIncludeBooleanAttr(Array.isArray(firma.value.il) ? ssrLooseContain(firma.value.il, "Antalya") : ssrLooseEqual(firma.value.il, "Antalya")) ? " selected" : ""}>Antalya</option></select></div><div><label class="block text-gray-600 mb-1">İlçe</label><select class="w-full p-3 border rounded-lg" required><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(firma.value.ilce) ? ssrLooseContain(firma.value.ilce, "") : ssrLooseEqual(firma.value.ilce, "")) ? " selected" : ""}>Lütfen bir ilçe seçiniz</option><!--[-->`);
        ssrRenderList(ilceler, (ilce) => {
          _push(`<option${ssrRenderAttr("value", ilce)}>${ssrInterpolate(ilce)}</option>`);
        });
        _push(`<!--]--></select></div><div><label class="block text-gray-600 mb-1">SGK Sicil No</label><input${ssrRenderAttr("value", firma.value.isgkSicilNo)} type="text" class="w-full p-3 border rounded-lg" required></div>`);
        if (naceList.value.length > 0) {
          _push(`<div class="mt-4"><label class="block text-gray-600 mb-1">NACE Kodları</label><!--[-->`);
          ssrRenderList(naceList.value, (nace) => {
            _push(`<div class="flex items-center"><input type="radio"${ssrRenderAttr("value", nace.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(firma.value.naceId, nace.id)) ? " checked" : ""} class="mr-2"><span>${ssrInterpolate(nace.kod)} - (${ssrInterpolate(nace.tehlikeSinifi)})</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><label class="block text-gray-600 mb-1">NACE Kodu ID</label><input${ssrRenderAttr("value", firma.value.naceId)} type="text" class="w-full p-3 border rounded-lg" required></div><div><label class="block text-gray-600 mb-1">Tehlike Sınıfı</label><input${ssrRenderAttr("value", firma.value.tehlikeSinifi)} type="text" class="w-full p-3 border rounded-lg"></div><div><label class="block text-gray-600 mb-1">Telefon</label><input${ssrRenderAttr("value", firma.value.telefon)} type="text" class="w-full p-3 border rounded-lg"></div><div><label class="block text-gray-600 mb-1">Email</label><input${ssrRenderAttr("value", firma.value.email)} type="text" class="w-full p-3 border rounded-lg"></div><div><label class="block text-gray-600 mb-1">Yetkili</label><input${ssrRenderAttr("value", firma.value.yetkili)} type="text" class="w-full p-3 border rounded-lg" required></div></div><div class="mt-6 flex justify-end"><button type="button" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md mr-2">İptal</button><button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md">Kaydet</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg"><h1 class="text-3xl font-semibold mb-6 text-gray-800">Firmalar</h1><table class="w-full border-collapse bg-white text-left shadow-md rounded-md"><thead><tr class="bg-gray-200 text-gray-700"><th class="p-3 text-left">Firma Kodu</th><th class="p-3 text-left">Firma Adı</th><th class="p-3 text-left">Adres</th><th class="p-3 text-left">İl</th><th class="p-3 text-left">İlçe</th><th class="p-3 text-left">Telefon</th><th class="p-3 text-left">Email</th><th class="p-3 text-left">Yetkili</th><th class="p-3 text-left">NACE Kodu</th><th class="p-3 text-left">Teklike Sınıfı</th><th class="p-3 text-left">SGK Sicil No</th><th class="p-3 text-center">İşlemler</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredFirmalar.value, (firma2) => {
        _push(`<!--[--><tr class="border-b hover:bg-gray-50"><td class="p-3"><button class="text-blue-500 hover:text-blue-700">${ssrInterpolate(expandedFirma.value === firma2.id ? "<" : ">")}</button> ${ssrInterpolate(firma2.firmaKodu)}</td><td class="p-3">${ssrInterpolate(firma2.firmaAdi)}</td><td class="p-3">${ssrInterpolate(firma2.adres)}</td><td class="p-3">${ssrInterpolate(firma2.il)}</td><td class="p-3">${ssrInterpolate(firma2.ilce)}</td><td class="p-3">${ssrInterpolate(firma2.telefon)}</td><td class="p-3">${ssrInterpolate(firma2.email)}</td><td class="p-3">${ssrInterpolate(firma2.yetkili)}</td><td class="p-3">${ssrInterpolate(firma2.nace.kod)}</td><td class="p-3">${ssrInterpolate(firma2.nace.tehlikeSinifi)}</td><td class="p-3">${ssrInterpolate(firma2.isgkSicilNo)}</td><td class="p-3 text-center flex justify-center space-x-2"><button class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg inline-flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-pencil",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button><button class="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-lg inline-flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-trash-can",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button><div class="relative"><button class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-dots-vertical",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button>`);
        if (activeDropdown.value === firma2.id) {
          _push(`<div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"><ul class="py-1"><li><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-plus",
            class: "w-5 h-5 mr-2 text-gray-500 align-middle leading-none"
          }, null, _parent));
          _push(`<span class="align-middle leading-none">Taşeron Ekle</span></button><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-calendar",
            class: "w-5 h-5 mr-2 text-gray-500 align-middle leading-none"
          }, null, _parent));
          _push(`<span class="align-middle leading-none">Eğitim Planı</span></button><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-plus",
            class: "w-5 h-5 mr-2 text-gray-500 align-middle leading-none"
          }, null, _parent));
          _push(`<span class="align-middle leading-none">Çalışan Ekle</span></button></li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
        if (expandedFirma.value === firma2.id) {
          _push(`<tr class="bg-gray-300"><th class="p-3 border-b">Taşeron Adı</th><th class="p-3 border-b">Adres</th><th class="p-3 border-b">NACE Kodu</th><th class="p-3 border-b">Tehlike Sınıfı</th><th class="p-3 border-b">Telefon</th><th class="p-3 border-b">Yetkili</th><th class="p-3 border-b">SGK Sicil No</th><th class="p-3 border-b text-center">İşlemler</th></tr>`);
        } else {
          _push(`<!---->`);
        }
        if (expandedFirma.value === firma2.id) {
          _push(`<!--[-->`);
          ssrRenderList(firmaSubeleri.value[firma2.id], (sube) => {
            _push(`<tr class="bg-gray-100"><td class="p-3">${ssrInterpolate(sube.subeAdi)}</td><td class="p-3">${ssrInterpolate(sube.adres)}</td><td class="p-3">${ssrInterpolate(sube.nace.kod)}</td><td class="p-3">${ssrInterpolate(sube.nace.tehlikeSinifi)}</td><td class="p-3">${ssrInterpolate(sube.telefon)}</td><td class="p-3">${ssrInterpolate(sube.yetkili)}</td><td class="p-3">${ssrInterpolate(sube.sgkSicilNo)}</td><td class="p-3 text-center flex justify-center space-x-2"><div class="relative"><button class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-2 rounded-lg inline-flex items-center">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi-dots-vertical",
              class: "w-5 h-5"
            }, null, _parent));
            _push(`</button>`);
            if (activeDropdown2.value === sube.id) {
              _push(`<div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"><ul class="py-1"><li><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "mdi-plus",
                class: "w-5 h-5 mr-2 text-gray-500 align-middle leading-none"
              }, null, _parent));
              _push(`<span class="align-middle leading-none">Çalışan Ekle</span></button></li></ul></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></td></tr>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/firma/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DLXWadDz.js.map
