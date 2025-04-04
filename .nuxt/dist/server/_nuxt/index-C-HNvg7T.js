import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@iconify/vue";
import "klona";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const firmaSayisi = ref(0);
    const yerleskeSayisi = ref(0);
    const calisanSayisi = ref(0);
    const calisanlar = ref([]);
    const selectedFirma = ref("");
    const uniqueFirmalar = computed(() => {
      const firmalar = calisanlar.value.map((calisan) => calisan.firma.firmaAdi);
      return [...new Set(firmalar)];
    });
    const filteredCalisanlar = computed(() => {
      if (!selectedFirma.value) return calisanlar.value;
      return calisanlar.value.filter(
        (calisan) => calisan.firma.firmaAdi === selectedFirma.value
      );
    });
    computed(() => {
      return [...calisanlar.value].sort((a, b) => {
        const aMin = Math.min(
          convertToNumber(a.saglikRaporuGecerlilik),
          convertToNumber(a.sertifikaGecerlilik),
          convertToNumber(a.egitimGecerlilik)
        );
        const bMin = Math.min(
          convertToNumber(b.saglikRaporuGecerlilik),
          convertToNumber(b.sertifikaGecerlilik),
          convertToNumber(b.egitimGecerlilik)
        );
        return aMin - bMin;
      });
    });
    const convertToNumber = (value) => {
      if (value === "Yok") return Infinity;
      return Number(value);
    };
    const getStatusClass = (daysRemaining) => {
      if (daysRemaining === "Yok") return "text-gray-500";
      return daysRemaining > 30 ? "text-green-500" : "text-red-500";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-gray-100 min-h-screen" }, _attrs))} data-v-bb6a22ec><h1 class="text-4xl font-bold text-gray-800 mb-6" data-v-bb6a22ec>Dashboard</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" data-v-bb6a22ec><div class="bg-white p-4 rounded-lg shadow-md" data-v-bb6a22ec><h2 class="text-lg font-semibold text-gray-600 mb-2" data-v-bb6a22ec>Toplam Firma</h2><p class="text-3xl font-bold text-blue-500" data-v-bb6a22ec>${ssrInterpolate(firmaSayisi.value)}</p></div><div class="bg-white p-4 rounded-lg shadow-md" data-v-bb6a22ec><h2 class="text-lg font-semibold text-gray-600 mb-2" data-v-bb6a22ec>Toplam Şube</h2><p class="text-3xl font-bold text-blue-500" data-v-bb6a22ec>${ssrInterpolate(yerleskeSayisi.value)}</p></div><div class="bg-white p-4 rounded-lg shadow-md" data-v-bb6a22ec><h2 class="text-lg font-semibold text-gray-600 mb-2" data-v-bb6a22ec>Toplam Çalışan</h2><p class="text-3xl font-bold text-blue-500" data-v-bb6a22ec>${ssrInterpolate(calisanSayisi.value)}</p></div></div><div class="mb-6" data-v-bb6a22ec><label for="firmaFilter" class="text-lg font-semibold text-gray-600" data-v-bb6a22ec>Firma Filtrele:</label><select id="firmaFilter" class="ml-4 p-2 border border-gray-300 rounded-md" data-v-bb6a22ec><option value="" data-v-bb6a22ec${ssrIncludeBooleanAttr(Array.isArray(selectedFirma.value) ? ssrLooseContain(selectedFirma.value, "") : ssrLooseEqual(selectedFirma.value, "")) ? " selected" : ""}>Tümü</option><!--[-->`);
      ssrRenderList(uniqueFirmalar.value, (firma) => {
        _push(`<option${ssrRenderAttr("value", firma)} data-v-bb6a22ec>${ssrInterpolate(firma)}</option>`);
      });
      _push(`<!--]--></select></div><div class="bg-white p-6 rounded-lg shadow-md" data-v-bb6a22ec><h2 class="text-2xl font-semibold text-gray-700 mb-4" data-v-bb6a22ec> Sağlık Raporları, Sertifikalar ve Eğitimler </h2><table class="min-w-full bg-white" data-v-bb6a22ec><thead data-v-bb6a22ec><tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal" data-v-bb6a22ec><th class="py-3 px-6 text-left" data-v-bb6a22ec>Çalışan Adı</th><th class="py-3 px-6 text-left" data-v-bb6a22ec>Çalışan Firma Adı</th><th class="py-3 px-6 text-left" data-v-bb6a22ec>Sağlık Raporu Geçerlilik</th><th class="py-3 px-6 text-left" data-v-bb6a22ec>Sertifika Geçerlilik</th><th class="py-3 px-6 text-left" data-v-bb6a22ec>Eğitim Geçerlilik</th><th class="py-3 px-6 text-left" data-v-bb6a22ec>Durum</th></tr></thead><tbody class="text-gray-600 text-sm font-light" data-v-bb6a22ec><!--[-->`);
      ssrRenderList(filteredCalisanlar.value, (calisan) => {
        _push(`<tr class="border-b border-gray-200 hover:bg-gray-100" data-v-bb6a22ec><td class="py-3 px-6" data-v-bb6a22ec>${ssrInterpolate(calisan.adi)} ${ssrInterpolate(calisan.soyadi)}</td><td class="py-3 px-6" data-v-bb6a22ec>${ssrInterpolate(calisan.firma.firmaAdi)}</td><td class="py-3 px-6" data-v-bb6a22ec><span class="${ssrRenderClass(getStatusClass(calisan.saglikRaporuGecerlilik))}" data-v-bb6a22ec>${ssrInterpolate(calisan.saglikRaporuGecerlilik)} <span style="${ssrRenderStyle(calisan.saglikRaporuGecerlilik !== "Yok" ? null : { display: "none" })}" data-v-bb6a22ec>gün</span></span></td><td class="py-3 px-6" data-v-bb6a22ec><span class="${ssrRenderClass(getStatusClass(calisan.sertifikaGecerlilik))}" data-v-bb6a22ec>${ssrInterpolate(calisan.sertifikaGecerlilik)} <span style="${ssrRenderStyle(calisan.sertifikaGecerlilik !== "Yok" ? null : { display: "none" })}" data-v-bb6a22ec>gün</span></span></td><td class="py-3 px-6" data-v-bb6a22ec><span class="${ssrRenderClass(getStatusClass(calisan.egitimGecerlilik))}" data-v-bb6a22ec>${ssrInterpolate(calisan.egitimGecerlilik)} <span style="${ssrRenderStyle(calisan.egitimGecerlilik !== "Yok" ? null : { display: "none" })}" data-v-bb6a22ec>gün</span></span></td><td class="py-3 px-6" data-v-bb6a22ec><span class="${ssrRenderClass([calisan.aktif ? "text-green-500" : "text-red-500"])}" data-v-bb6a22ec>${ssrInterpolate(calisan.aktif ? "Aktif" : "Pasif")}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb6a22ec"]]);
export {
  index as default
};
//# sourceMappingURL=index-C-HNvg7T.js.map
