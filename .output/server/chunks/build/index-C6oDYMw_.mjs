import __nuxt_component_1 from './index-DxiqHVyn.mjs';
import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-DMqtYQSF.mjs';
import './asyncData-yTgk537R.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const searchQuery = ref({ name: "" });
    const yerleskeler = ref([]);
    ref([...yerleskeler.value]);
    const isYerleskeModalOpen = ref(false);
    ref(false);
    const activeDropdown = ref(null);
    const isEditMode = ref(false);
    const yerleskeFormFields = ref({
      id: "",
      subeAdi: "",
      adres: "",
      tehlikeSinifi: "D\xFC\u015F\xFCk",
      naceKodu: "",
      telefon: "",
      yetkili: "",
      sgkSicilNo: ""
    });
    ref("");
    ref("");
    ref(null);
    const filterYerleskeler = computed(() => {
      return yerleskeler.value.filter(
        (yer) => yer.firma.firmaAdi.toLowerCase().includes(searchQuery.value.name.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg"><h1 class="text-3xl font-semibold mb-6 text-gray-800">\u015Eubeler</h1><div class="flex flex-wrap items-center mb-4"><input${ssrRenderAttr("value", searchQuery.value.name)} type="text" placeholder="Firma Ad\u0131nda Ara" class="w-full md:w-1/6 p-2 border rounded-lg mr-2 mb-2"></div><table class="w-full border-collapse bg-white text-left shadow-md rounded-md"><thead><tr class="bg-gray-200 text-gray-700"><th class="p-3 border-b">Firma Ad\u0131</th><th class="p-3 border-b">\u015Eube Ad\u0131</th><th class="p-3 border-b">Adres</th><th class="p-3 border-b">NACE Kodu</th><th class="p-3 border-b">Tehlike S\u0131n\u0131f\u0131</th><th class="p-3 border-b">Telefon</th><th class="p-3 border-b">Yetkili</th><th class="p-3 border-b">SGK Sicil No</th><th class="p-3 border-b text-center">\u0130\u015Flemler</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(filterYerleskeler), (yerleske) => {
        _push(`<tr class="border-b"><td class="p-3">${ssrInterpolate(yerleske.firma.firmaAdi)}</td><td class="p-3">${ssrInterpolate(yerleske.subeAdi)}</td><td class="p-3">${ssrInterpolate(yerleske.adres)}</td><td class="p-3">${ssrInterpolate(yerleske.nace.kod)}</td><td class="p-3">${ssrInterpolate(yerleske.nace.tehlikeSinifi)}</td><td class="p-3">${ssrInterpolate(yerleske.telefon)}</td><td class="p-3">${ssrInterpolate(yerleske.yetkili)}</td><td class="p-3">${ssrInterpolate(yerleske.sgkSicilNo)}</td><td class="p-3 text-center flex justify-center space-x-2"><button class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg inline-flex items-center">`);
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
        if (activeDropdown.value === yerleske.id) {
          _push(`<div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"><ul class="py-1"><li><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-plus",
            class: "w-5 h-5 mr-2 text-gray-500 align-middle leading-none"
          }, null, _parent));
          _push(`<span class="align-middle leading-none">\xC7al\u0131\u015Fan Ekle</span></button></li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if (isYerleskeModalOpen.value) {
        _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"><h2 class="text-2xl mb-4">${ssrInterpolate(isEditMode.value ? "Yerle\u015Fke D\xFCzenle" : "Yeni Yerle\u015Fke Ekle")}</h2><form><!--[-->`);
        ssrRenderList(yerleskeFormFields.value, (item, key) => {
          _push(`<div class="mb-4"><label class="block text-sm font-medium text-gray-600">${ssrInterpolate(key)}</label><input${ssrRenderAttr("value", yerleskeFormFields.value[key])} type="text" class="border p-2 w-full rounded-md" required></div>`);
        });
        _push(`<!--]--><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full flex items-center justify-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-content-save",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`<span>Kaydet</span></button><button class="bg-red-600 text-white py-2 px-4 mt-3 rounded-md w-full flex items-center justify-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-close",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`<span>Kapat</span></button></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><br><br><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/yerleske/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C6oDYMw_.mjs.map
