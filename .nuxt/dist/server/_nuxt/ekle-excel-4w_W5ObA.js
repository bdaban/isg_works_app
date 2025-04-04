import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "hookable";
const _sfc_main = {
  __name: "ekle-excel",
  __ssrInlineRender: true,
  setup(__props) {
    const calisanlar = ref([]);
    const isUploading = ref(false);
    const uploadProgress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-2xl font-semibold mb-6">Excel ile Çalışan Ekle</h1><div class="mb-4"><a href="/ornek_calisanlar_format.xlsx" download class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"> Örnek Excel Dosyasını İndir </a></div><form><input type="file" accept=".xlsx, .xls" class="mb-4">`);
      if (!isUploading.value) {
        _push(`<button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md"> Yükle </button>`);
      } else {
        _push(`<!---->`);
      }
      if (isUploading.value) {
        _push(`<div class="w-full bg-gray-200 rounded-full h-8 mt-4"><div class="bg-blue-600 h-8 rounded-full text-center text-white" style="${ssrRenderStyle({ width: `${uploadProgress.value}%` })}">${ssrInterpolate(uploadProgress.value)}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
      if (calisanlar.value.length) {
        _push(`<div><h2 class="text-xl font-semibold mb-4">Yüklenenecek Çalışanlar</h2><div class="p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg"><table class="min-w-full bg-white rounded-lg shadow-lg"><thead><tr><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Adı</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Soyadı</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Mesleği</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">TC No</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(calisanlar.value, (calisan) => {
          _push(`<tr class="text-center bg-white border-b hover:bg-gray-100"><td class="py-2 px-4 text-gray-700">${ssrInterpolate(calisan.adi)}</td><td class="py-2 px-4 text-gray-700">${ssrInterpolate(calisan.soyadi)}</td><td class="py-2 px-4 text-gray-700">${ssrInterpolate(calisan.meslegi)}</td><td class="py-2 px-4 text-gray-700">${ssrInterpolate(calisan.tc_no)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calisanlar/ekle-excel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ekle-excel-4w_W5ObA.js.map
