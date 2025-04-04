import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "evrakyukle",
  __ssrInlineRender: true,
  setup(__props) {
    const firmalar = ref([]);
    const kategoriler = ref([]);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Firma Evrak Y\xFCkleme</h1><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700">Firma</label><select class="border p-2 rounded w-full"><!--[-->`);
      ssrRenderList(firmalar.value, (firma) => {
        _push(`<option${ssrRenderAttr("value", firma.id)}>${ssrInterpolate(firma.adi)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700">Kategori</label><select class="border p-2 rounded w-full"><!--[-->`);
      ssrRenderList(kategoriler.value, (kategori) => {
        _push(`<option${ssrRenderAttr("value", kategori.id)}>${ssrInterpolate(kategori.isim)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700">Dosyalar</label><input type="file" multiple class="border p-2 rounded w-full"></div><button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Y\xFCkle</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/firma/evrakyukle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=evrakyukle-CJsmKZYL.mjs.map
