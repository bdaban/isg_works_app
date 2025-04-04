import { _ as __nuxt_component_0 } from "./nuxt-link-CKx3Dd7p.js";
import __nuxt_component_1 from "./index-DxiqHVyn.js";
import { c as __nuxt_component_2 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "hookable";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "consola";
import "./index-DMqtYQSF.js";
import "@unhead/shared";
import "./asyncData-yTgk537R.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "klona";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 pointer-events-none"><div class="interactive-bg"></div></div><div class="relative z-10 bg-gray-800 w-64 flex-shrink-0 hidden md:block overflow-hidden"><nav class="relative text-white p-6 z-10"><div class="flex flex-col items-center justify-center mb-6"><h2 class="text-2xl text-gray-400 font-semibold">FORSE</h2><span class="px-2 text-gray-400">İş Güveniliği ve Sağlığı</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-extrabold mb-4 tracking-wider hover:animate-pulse"${_scopeId}>Menü</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-extrabold mb-4 tracking-wider hover:animate-pulse" }, "Menü")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-office-building",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/firma",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Firmalar`);
          } else {
            return [
              createTextVNode("Firmalar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-map-marker",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yerleske",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Taşeronlar`);
          } else {
            return [
              createTextVNode("Taşeronlar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-account-group",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/calisanlar",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Çalışanlar`);
          } else {
            return [
              createTextVNode("Çalışanlar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-school",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/egitimler",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Eğitimler`);
          } else {
            return [
              createTextVNode("Eğitimler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mb-4 flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-teach",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/egitim-verenler",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Eğitim Verenler`);
          } else {
            return [
              createTextVNode("Eğitim Verenler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="flex items-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-500 hover:bg-opacity-80 p-4 rounded-lg shadow-lg">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi-file-document",
        class: "w-6 h-6 mr-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/belgeler",
        class: "hover:text-white transition-colors text-lg font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Belgeler`);
          } else {
            return [
              createTextVNode("Belgeler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav></div><div class="flex-1 p-6 relative z-20 overflow-y-auto">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CwfaiaSg.js.map
