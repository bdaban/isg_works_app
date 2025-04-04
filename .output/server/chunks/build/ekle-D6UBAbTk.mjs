import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';

const _sfc_main = {
  __name: "ekle",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const firmaId = ref("");
    const subeAdi = ref("");
    const adres = ref("");
    const tehlikeSinifi = ref("");
    const naceKodID = ref("");
    const telefon = ref("");
    const yetkili = ref("");
    const sgkSicilNo = ref("");
    const naceList = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 mx-auto max-w-2xl bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Yeni Ta\u015Feron Ekle</h1><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-600">Firma ID</label><input${ssrRenderAttr("value", firmaId.value)} type="text" class="border border-gray-300 p-2 w-full rounded-md" readonly></div><div><label class="block text-sm font-medium text-gray-600">Ta\u015Feron Ad\u0131</label><input${ssrRenderAttr("value", subeAdi.value)} type="text" class="border border-gray-300 p-2 w-full rounded-md" required></div><div><label class="block text-sm font-medium text-gray-600">Adres</label><input${ssrRenderAttr("value", adres.value)} type="text" class="border border-gray-300 p-2 w-full rounded-md" required></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label class="block text-sm font-medium text-gray-600">SGK Sicil No</label><input${ssrRenderAttr("value", sgkSicilNo.value)} type="text" class="border border-gray-300 p-2 w-full rounded-md" required></div><div><label class="block text-sm font-medium text-gray-600">NACE Kodu ID</label><input${ssrRenderAttr("value", naceKodID.value)} type="text" class="border border-gray-300 p-2 w-40 rounded-md" required></div><div><label class="block text-sm font-medium text-gray-600">Tehlike S\u0131n\u0131f\u0131</label><input${ssrRenderAttr("value", tehlikeSinifi.value)} class="border border-gray-300 p-2 w-40 rounded-md"></div></div>`);
      if (naceList.value.length > 0) {
        _push(`<div class="mt-4"><label class="block text-gray-600 mb-1">NACE Kodlar\u0131</label><!--[-->`);
        ssrRenderList(naceList.value, (nace) => {
          _push(`<div class="flex items-center"><input type="radio"${ssrRenderAttr("value", nace.id)}${ssrIncludeBooleanAttr(ssrLooseEqual(naceKodID.value, nace.id)) ? " checked" : ""} class="mr-2"><span>${ssrInterpolate(nace.kod)} - (${ssrInterpolate(nace.tehlikeSinifi)})</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-600">Telefon</label><input${ssrRenderAttr("value", telefon.value)} type="tel" class="border border-gray-300 p-2 w-full rounded-md"></div><div><label class="block text-sm font-medium text-gray-600">Yetkili</label><input${ssrRenderAttr("value", yetkili.value)} type="text" class="border border-gray-300 p-2 w-full rounded-md" required></div></div><button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full font-semibold"> Kaydet </button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/yerleske/ekle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ekle-D6UBAbTk.mjs.map
