import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';

const _sfc_main = {
  __name: "yukle",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const calisanId = ref(route.query.calisanId);
    const calisanAdi = ref(route.query.calisanAdi);
    const calisanSoyadi = ref(route.query.calisanSoyadi);
    const selectedBelgeTur = ref(null);
    const gecerlilikTarihi = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-2xl font-semibold mb-6">Sa\u011Fl\u0131k Raporu / Sertifika Y\xFCkle</h1><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Se\xE7ilen \xC7al\u0131\u015Fan</label><div class="border p-2 w-80 rounded-md">${ssrInterpolate(calisanAdi.value)} ${ssrInterpolate(calisanSoyadi.value)} (ID: ${ssrInterpolate(calisanId.value)}) </div></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Belge T\xFCr\xFC</label><select class="border p-2 w-80 rounded-md" required><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(selectedBelgeTur.value) ? ssrLooseContain(selectedBelgeTur.value, "") : ssrLooseEqual(selectedBelgeTur.value, "")) ? " selected" : ""}>Belge T\xFCr\xFC Se\xE7iniz</option><option value="saglikRaporu"${ssrIncludeBooleanAttr(Array.isArray(selectedBelgeTur.value) ? ssrLooseContain(selectedBelgeTur.value, "saglikRaporu") : ssrLooseEqual(selectedBelgeTur.value, "saglikRaporu")) ? " selected" : ""}>Sa\u011Fl\u0131k Raporu</option><option value="sertifika"${ssrIncludeBooleanAttr(Array.isArray(selectedBelgeTur.value) ? ssrLooseContain(selectedBelgeTur.value, "sertifika") : ssrLooseEqual(selectedBelgeTur.value, "sertifika")) ? " selected" : ""}>Sertifika</option></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Ge\xE7erlilik Tarihi</label><input${ssrRenderAttr("value", gecerlilikTarihi.value)} type="date" class="border p-2 w-40 rounded-md" required></div><form enctype="multipart/form-data"><input type="file" name="file" accept=".pdf" class="mb-4"><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Y\xFCkle</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calisanlar/dokuman/yukle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=yukle-CSfYpGXW.mjs.map
