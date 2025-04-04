import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const firmalar = ref([]);
    const evraklar = ref([]);
    ref(null);
    const kategoriId = ref(null);
    const evrakTuru = ref("");
    ref(null);
    const searchQuery = ref("");
    const filteredEvraklar = computed(() => {
      return evraklar.value.filter(
        (evrak) => evrak.firma.firmaAdi.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-3xl font-bold mb-4">Firma Evrak Y\xFCkleme</h1><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700" for="firmaId">Firma:</label><select class="border p-2 rounded w-80" id="firmaId" required><!--[-->`);
      ssrRenderList(firmalar.value, (firma) => {
        _push(`<option${ssrRenderAttr("value", firma.id)}>${ssrInterpolate(firma.firmaAdi)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700" for="kategoriId">Kategori:</label><select class="border p-2 rounded w-80" id="kategoriId" required><option value="1"${ssrIncludeBooleanAttr(Array.isArray(kategoriId.value) ? ssrLooseContain(kategoriId.value, "1") : ssrLooseEqual(kategoriId.value, "1")) ? " selected" : ""}>Firma Evraklar\u0131</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(kategoriId.value) ? ssrLooseContain(kategoriId.value, "2") : ssrLooseEqual(kategoriId.value, "2")) ? " selected" : ""}>\u0130SG Evraklar\u0131</option></select></div><div><label class="block text-sm font-medium text-gray-700" for="evrakTuru">Evrak T\xFCr\xFC</label><select class="border p-2 rounded w-80" id="evrakTuru" required><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>Risk Analizi</option><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>Acil Durum Eylem Plan\u0131</option><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>KKD</option><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>Zimmet Formu</option><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>Oryantasyon Formu</option><option${ssrIncludeBooleanAttr(Array.isArray(evrakTuru.value) ? ssrLooseContain(evrakTuru.value, null) : ssrLooseEqual(evrakTuru.value, null)) ? " selected" : ""}>\xC7al\u0131\u015Fma Talimat\u0131</option></select></div><div><label class="block text-sm font-medium text-gray-700" for="file">Dosya:</label><input class="border p-2 rounded w-80" type="file" id="file" required></div><button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Y\xFCkle</button></form><div class="mt-8"><h2 class="text-2xl font-bold mb-4">Y\xFCklenen Evraklar</h2><div class="flex justify-between items-center mb-4"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Firma ad\u0131na g\xF6re ara..." class="border p-2 rounded w-80"></div><table class="w-full border-collapse bg-white text-left shadow-md rounded-md"><thead><tr class="bg-gray-200 text-gray-700"><th class="p-3 border-b">Firma Ad\u0131</th><th class="p-3 border-b">Kategori</th><th class="p-3 border-b">Evrak T\xFCr\xFC</th><th class="p-3 border-b">Dosya Ad\u0131</th><th class="p-3 border-b">Y\xFCklenme Tarihi</th><th class="p-3 border-b text-center">\u0130\u015Flemler</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredEvraklar.value, (evrak) => {
        _push(`<tr class="border-b hover:bg-gray-100"><td class="p-3">${ssrInterpolate(evrak.firma.firmaAdi)}</td><td class="p-3">${ssrInterpolate(evrak.kategoriId === 1 ? "Firma Evraklar\u0131" : "\u0130SG Evraklar\u0131")}</td><td class="p-3">${ssrInterpolate(evrak.evrakTuru)}</td><td class="p-3"><a${ssrRenderAttr("href", evrak.dosyaYolu)} target="_blank" class="text-blue-500 underline"><span class="text-lg text-red-700">Belgeyi G\xF6r\xFCnt\xFCle</span></a></td><td class="p-3">${ssrInterpolate(formatDate(evrak.yuklenmeTarihi))}</td><td class="p-3 text-center"><button class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"> Sil </button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Belgeler/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DCyvLdFY.mjs.map
