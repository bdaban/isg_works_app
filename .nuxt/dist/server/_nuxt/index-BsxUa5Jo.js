import __nuxt_component_1 from "./index-DxiqHVyn.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CKx3Dd7p.js";
import { ref, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
import "vue-router";
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
    const calisanlar = ref([]);
    const searchQuery = ref("");
    const itemsPerPage = ref(10);
    const currentPage = ref(1);
    const isCalisanModalOpen = ref(false);
    const activeDropdown = ref(null);
    const selectedDurum = ref("");
    const calisanFormFields = ref({
      adi: "",
      soyadi: "",
      tc_no: "",
      meslegi: "",
      firmaId: 0,
      firmaYerleskeId: 0,
      isegiristarihi: "",
      isecikistaarihi: null,
      aktif: true
    });
    const calculateDaysRemaining = (gecerlilikTarihi) => {
      const today = /* @__PURE__ */ new Date();
      const gecerlilikDate = new Date(gecerlilikTarihi);
      const diffTime = gecerlilikDate - today;
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      return diffDays >= 0 ? diffDays : 0;
    };
    computed(() => {
      return calisanlar.value.filter(
        (calisan) => calisan.tc_no.toString().includes(searchQuery.value)
      );
    });
    const filteredCalisanlar = computed(() => {
      return calisanlar.value.filter((calisan) => {
        const durumUygun = selectedDurum.value === "" || String(calisan.aktif) === selectedDurum.value;
        const tcUygun = calisan.tc_no.toString().includes(searchQuery.value);
        return durumUygun && tcUygun;
      });
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredCalisanlar.value.length / itemsPerPage.value);
    });
    const paginatedCalisanlar = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredCalisanlar.value.slice(start, end);
    });
    const formatDate = (dateString) => {
      if (!dateString) {
        return "";
      } else {
        const date = new Date(dateString);
        return date.toLocaleDateString("tr-TR", {
          // 'tr-TR' Türkiye formatı kullanılıyor
          day: "2-digit",
          // Günü 2 basamaklı yapar
          month: "2-digit",
          // Ayı 2 basamaklı yapar
          year: "numeric"
          // Yılı 4 basamaklı gösterir
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="p-4 max-w-full mx-auto bg-white rounded-lg shadow-lg"><h1 class="text-3xl font-semibold mb-6 text-gray-800">Çalışanlar</h1><div class="mb-4 flex justify-between items-center"><div><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="TC No ile Ara..." class="w-48 p-2 border rounded-lg"></div><div><label for="durum" class="block text-sm font-medium text-gray-600 text-center">Durum</label><select id="durum" class="border p-2 w-48 rounded-lg"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedDurum)) ? ssrLooseContain(unref(selectedDurum), "") : ssrLooseEqual(unref(selectedDurum), "")) ? " selected" : ""}>Tümü</option><option value="true"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedDurum)) ? ssrLooseContain(unref(selectedDurum), "true") : ssrLooseEqual(unref(selectedDurum), "true")) ? " selected" : ""}>Aktif</option><option value="false"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedDurum)) ? ssrLooseContain(unref(selectedDurum), "false") : ssrLooseEqual(unref(selectedDurum), "false")) ? " selected" : ""}>Pasif</option></select></div></div><table class="w-full border-collapse bg-white text-left shadow-md rounded-md"><thead><tr class="bg-gray-200 text-gray-700"><th class="p-3 border-b">Adı</th><th class="p-3 border-b">Soyadı</th><th class="p-3 border-b">TC</th><th class="p-3 border-b">Mesleği</th><th class="p-3 border-b">İşe Giriş Tarihi</th><th class="p-3 border-b">İşden Çıkış Tarihi</th><th class="p-3 border-b">Aktif</th><th class="p-3 border-b">Firma Adı</th><th class="p-3 border-b">Taşeron Adı</th><th class="p-3 border-b">Sağlık Raporu (Gün)</th><th class="p-3 border-b">Sağlık Raporu URL</th><th class="p-3 border-b">Sertifika (Gün)</th><th class="p-3 border-b">Sertifika URL</th><th class="p-3 border-b text-center">İşlemler</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(paginatedCalisanlar), (calisan) => {
        _push(`<tr class="border-b"><td class="p-3">${ssrInterpolate(calisan.adi)}</td><td class="p-3">${ssrInterpolate(calisan.soyadi)}</td><td class="p-3">${ssrInterpolate(calisan.tc_no)}</td><td class="p-3">${ssrInterpolate(calisan.meslegi)}</td><td class="p-3">${ssrInterpolate(formatDate(calisan.isegiristarihi))}</td><td class="p-3">`);
        if (calisan.isecikistaarihi === null) {
          _push(`<span class="text-green-500">Devam Ediyor</span>`);
        } else {
          _push(`<span>${ssrInterpolate(formatDate(calisan.isecikistaarihi))}</span>`);
        }
        _push(`</td><td class="p-3">${ssrInterpolate(calisan.aktif ? "Evet" : "Hayır")}</td><td class="p-3">${ssrInterpolate(calisan.firma.firmaAdi)}</td><td class="p-3">`);
        if (calisan.yerleske && calisan.yerleske.subeAdi) {
          _push(`<span>${ssrInterpolate(calisan.yerleske.subeAdi)}</span>`);
        } else {
          _push(`<span>Merkez</span>`);
        }
        _push(`</td><td class="p-3">`);
        if (calisan.saglikRaporlari.length) {
          _push(`<div><div>${ssrInterpolate(calculateDaysRemaining(calisan.saglikRaporlari[calisan.saglikRaporlari.length - 1].gecerlilikTarihi))} - gün </div></div>`);
        } else {
          _push(`<div> - </div>`);
        }
        _push(`</td><td class="p-3">`);
        if (calisan.saglikRaporlari.length) {
          _push(`<div><div><a${ssrRenderAttr("href", calisan.saglikRaporlari[calisan.saglikRaporlari.length - 1].raporUrl)} target="_blank"><span class="text-lg text-red-700">Raporu Görüntüle</span></a></div></div>`);
        } else {
          _push(`<div> Sağlık raporu yok </div>`);
        }
        _push(`</td><td class="p-3">`);
        if (calisan.sertifikalar.length) {
          _push(`<div><div>${ssrInterpolate(calculateDaysRemaining(calisan.sertifikalar[calisan.sertifikalar.length - 1].gecerlilikTarihi))} - gün </div></div>`);
        } else {
          _push(`<div> - </div>`);
        }
        _push(`</td><td class="p-3">`);
        if (calisan.sertifikalar.length) {
          _push(`<div><div><a${ssrRenderAttr("href", calisan.sertifikalar[calisan.sertifikalar.length - 1].sertifikaUrl)} target="_blank"><span class="text-lg text-blue-500">Sertikika Görüntüle</span></a></div></div>`);
        } else {
          _push(`<div> Sertifika yok </div>`);
        }
        _push(`</td><td class="p-3 text-center"><div class="relative"><button class="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi-dots-vertical",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button>`);
        if (unref(activeDropdown) === calisan.id) {
          _push(`<div class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"><ul class="py-1"><li><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-pencil",
            class: "w-4 h-4 mr-2"
          }, null, _parent));
          _push(` Düzenle </button></li><li><button class="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi-delete",
            class: "w-4 h-4 mr-2"
          }, null, _parent));
          _push(` Sil </button></li><li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/calisanlar/dokuman/yukle?calisanId=${calisan.id}&calisanAdi=${calisan.adi}&calisanSoyadi=${calisan.soyadi}`,
            class: "w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi-book-plus",
                  class: "w-4 h-4 mr-2"
                }, null, _parent2, _scopeId));
                _push2(` Belge Yükle `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "mdi-book-plus",
                    class: "w-4 h-4 mr-2"
                  }),
                  createTextVNode(" Belge Yükle ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="mt-4 flex justify-between items-center"><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="bg-gray-500 text-white py-2 px-4 rounded-lg">Önceki</button><span>Sayfa ${ssrInterpolate(unref(currentPage))} / ${ssrInterpolate(unref(totalPages))}</span><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""} class="bg-gray-500 text-white py-2 px-4 rounded-lg">Sonraki</button></div>`);
      if (unref(isCalisanModalOpen)) {
        _push(`<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"><h2 class="text-2xl mb-4">Yeni Çalışan Ekle</h2><form><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Adı</label><input${ssrRenderAttr("value", unref(calisanFormFields).adi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Soyadı</label><input${ssrRenderAttr("value", unref(calisanFormFields).soyadi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">TC No</label><input${ssrRenderAttr("value", unref(calisanFormFields).tc_no)} type="text" class="border p-2 w-full rounded-md" required maxlength="11"></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">Mesleği</label><input${ssrRenderAttr("value", unref(calisanFormFields).meslegi)} type="text" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">İşe Giriş Tarihi</label><input${ssrRenderAttr("value", unref(calisanFormFields).isegiristarihi)} type="date" class="border p-2 w-full rounded-md" required></div><div class="mb-4"><label class="block text-sm font-medium text-gray-600">İşten Çıkış Tarihi (Opsiyonel)</label><input${ssrRenderAttr("value", unref(calisanFormFields).isecikistaarihi)} type="date" class="border p-2 w-full rounded-md"></div><div class="mb-4 flex items-center"><label class="block text-sm font-medium text-gray-600 mr-4">Durum</label><label class="inline-flex relative items-center cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(unref(calisanFormFields).aktif) ? ssrLooseContain(unref(calisanFormFields).aktif, null) : unref(calisanFormFields).aktif) ? " checked" : ""} type="checkbox" class="sr-only peer"><div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 transition-all duration-300"><div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div></div><span class="ml-3 text-sm font-medium text-gray-900">${ssrInterpolate(unref(calisanFormFields).aktif ? "Aktif" : "Pasif")}</span></label></div><div class="space-y-2"><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md w-full">Kaydet</button><button class="bg-red-600 text-white py-2 px-4 rounded-md w-full">Kapat</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/calisanlar/ekle-excel",
        class: "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Excel ile Ekle `);
          } else {
            return [
              createTextVNode(" Excel ile Ekle ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calisanlar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BsxUa5Jo.js.map
