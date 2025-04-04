import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "hookable";
import { u as useRoute, a as useRouter } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@iconify/vue";
const _sfc_main = {
  __name: "ekle",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const firmalar = ref([]);
    const yerleskeler = ref([]);
    const calisanFormFields = ref({
      adi: "",
      soyadi: "",
      tc_no: "",
      meslegi: "",
      isegiristarihi: "",
      firmaId: route.query.firmaId || "",
      // Firma ID, URL'den geliyor
      firmaYerleskeId: route.query.yerleskeId || "",
      // Yerleşke ID, URL'den geliyor
      aktif: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-2xl font-semibold mb-6">Çalışan Ekle</h1><form><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Adı</label><input${ssrRenderAttr("value", calisanFormFields.value.adi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Soyadı</label><input${ssrRenderAttr("value", calisanFormFields.value.soyadi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">TC No</label><input${ssrRenderAttr("value", calisanFormFields.value.tc_no)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Mesleği</label><input${ssrRenderAttr("value", calisanFormFields.value.meslegi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">İşe Giriş Tarihi</label><input${ssrRenderAttr("value", calisanFormFields.value.isegiristarihi)} type="date" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Firma</label><select class="border p-2 w-full rounded-md" required><!--[-->`);
      ssrRenderList(firmalar.value, (firma) => {
        _push(`<option${ssrRenderAttr("value", firma.id)}>${ssrInterpolate(firma.firmaAdi)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Yerleşke</label><select class="border p-2 w-full rounded-md"><!--[-->`);
      ssrRenderList(yerleskeler.value, (yerleske) => {
        _push(`<option${ssrRenderAttr("value", yerleske.id)}>${ssrInterpolate(yerleske.subeAdi)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Aktif</label><select class="border p-2 w-full rounded-md"><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(calisanFormFields.value.aktif) ? ssrLooseContain(calisanFormFields.value.aktif, true) : ssrLooseEqual(calisanFormFields.value.aktif, true)) ? " selected" : ""}>Evet</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(calisanFormFields.value.aktif) ? ssrLooseContain(calisanFormFields.value.aktif, false) : ssrLooseEqual(calisanFormFields.value.aktif, false)) ? " selected" : ""}>Hayır</option></select></div><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">Kaydet</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calisanlar/ekle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ekle-DTnv6EYQ.js.map
