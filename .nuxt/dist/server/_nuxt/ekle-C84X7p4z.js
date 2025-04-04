import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
const _sfc_main = {
  __name: "ekle",
  __ssrInlineRender: true,
  setup(__props) {
    const kategoriler = ref([]);
    ref([]);
    const kategori = ref({ isim: "" });
    const egitimKonu = ref({ baslik: "", aciklama: "", kategoriId: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-full mx-auto bg-white rounded-lg shadow-lg" }, _attrs))}><h1 class="text-2xl font-semibold mb-6">Eğitim Konuları ve Kategoriler</h1><div class="mb-4"><form><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Kategori Adı</label><input${ssrRenderAttr("value", kategori.value.isim)} type="text" class="border p-2 w-80 rounded-md" required></div><button type="submit" class="bg-green-600 text-white py-2 px-4 rounded-md">Kategori Ekle</button></form></div><div class="mb-4"><form><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Kategori</label><select class="border p-2 w-80 rounded-md" required><!--[-->`);
      ssrRenderList(kategoriler.value, (kategori2) => {
        _push(`<option${ssrRenderAttr("value", kategori2.id)}>${ssrInterpolate(kategori2.isim)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Başlık</label><input${ssrRenderAttr("value", egitimKonu.value.baslik)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Açıklama</label><input${ssrRenderAttr("value", egitimKonu.value.aciklama)} type="text" class="border p-2 w-full rounded-md"></div><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md">Eğitim Konusu Ekle</button></form></div><div class="mt-6"><h2 class="text-xl font-semibold mb-4">Kategoriler ve Eğitim Konuları</h2><!--[-->`);
      ssrRenderList(kategoriler.value, (kategori2) => {
        _push(`<div class="mb-6"><h3 class="text-lg font-bold text-gray-700 mb-2">${ssrInterpolate(kategori2.isim)}</h3><table class="min-w-full bg-white rounded-lg shadow-lg"><thead><tr><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Başlık</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">Açıklama</th><th class="py-2 px-4 bg-gray-200 text-gray-600 font-semibold text-sm uppercase">İşlemler</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(kategori2.egitimKonular, (konu) => {
          _push(`<tr class="text-center bg-white border-b hover:bg-gray-100"><td class="py-2 px-4 text-gray-700">${ssrInterpolate(konu.baslik)}</td><td class="py-2 px-4 text-gray-700">${ssrInterpolate(konu.aciklama)}</td><td class="py-2 px-4 text-center"><button class="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2">Düzenle</button><button class="bg-red-500 text-white px-2 py-1 rounded-lg">Sil</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/egitimler/ekle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ekle-C84X7p4z.js.map
