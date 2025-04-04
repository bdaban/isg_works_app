import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, getQuery as getQuery$1, getRequestURL, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, sendStream, getResponseStatusText } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/@prisma/client/default.js';
import formidable from 'file://D:/WEB_PROJELER/isg-programi/node_modules/formidable/src/index.js';
import fs$1, { promises } from 'fs';
import path, { join as join$1 } from 'path';
import fs from 'fs/promises';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/devalue/index.js';
import destr from 'file://D:/WEB_PROJELER/isg-programi/node_modules/destr/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/vue/server-renderer/index.mjs';
import { propsToString, renderSSRHead } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/WEB_PROJELER/isg-programi/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/radix3/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/consola/dist/index.mjs';
import { getContext } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/errx/dist/index.js';
import { isVNode, version, unref } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/vue/index.mjs';
import { basename } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file://D:/WEB_PROJELER/isg-programi/.nuxt/nuxt-icon-server-bundle.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/WEB_PROJELER/isg-programi/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 500
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "uploadDir": "/uploads"
  },
  "icon": {
    "serverKnownCssClasses": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/WEB_PROJELER/isg-programi/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\WEB_PROJELER\\isg-programi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\WEB_PROJELER\\isg-programi\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\WEB_PROJELER\\isg-programi\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\WEB_PROJELER\\isg-programi\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\WEB_PROJELER\\isg-programi\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _f8NsF9r9Xq = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "D:/WEB_PROJELER/isg-programi";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _AE0hdNd7Hh = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola.wrapConsole();
}

const plugins = [
  _f8NsF9r9Xq,
_AE0hdNd7Hh
];

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _xGtIIi = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      console.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _lazy_YiV0Gk = () => Promise.resolve().then(function () { return _id__delete$9; });
const _lazy_AmlItx = () => Promise.resolve().then(function () { return _id__put$9; });
const _lazy_YwpTEl = () => Promise.resolve().then(function () { return excel$1; });
const _lazy_H2nGhE = () => Promise.resolve().then(function () { return get$f; });
const _lazy_UPhwLY = () => Promise.resolve().then(function () { return getByFirmaId$5; });
const _lazy_5AODSg = () => Promise.resolve().then(function () { return getByYerleskeId$1; });
const _lazy_g376m5 = () => Promise.resolve().then(function () { return post$b; });
const _lazy_X6nTVf = () => Promise.resolve().then(function () { return yukle$1; });
const _lazy_Lx3BAU = () => Promise.resolve().then(function () { return _id__delete$7; });
const _lazy_pWor3m = () => Promise.resolve().then(function () { return _id__put$7; });
const _lazy_n4HqLC = () => Promise.resolve().then(function () { return get$d; });
const _lazy_PbD6Qp = () => Promise.resolve().then(function () { return getByCalisanId$1; });
const _lazy_hstrpU = () => Promise.resolve().then(function () { return getByFirmaId$3; });
const _lazy_lFCDIm = () => Promise.resolve().then(function () { return getGroupedByKategori$1; });
const _lazy_hxJptv = () => Promise.resolve().then(function () { return post$9; });
const _lazy_vPchHS = () => Promise.resolve().then(function () { return _id__delete$5; });
const _lazy_MKEDnv = () => Promise.resolve().then(function () { return _id__put$5; });
const _lazy_zrlY6x = () => Promise.resolve().then(function () { return get$b; });
const _lazy_aVoZP1 = () => Promise.resolve().then(function () { return getByKategoriId$1; });
const _lazy_M4SqEF = () => Promise.resolve().then(function () { return post$7; });
const _lazy_bkK6Zr = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_PZIRz9 = () => Promise.resolve().then(function () { return download$1; });
const _lazy_aj51Cl = () => Promise.resolve().then(function () { return get$9; });
const _lazy_dFawVS = () => Promise.resolve().then(function () { return upload$1; });
const _lazy_DWp7yq = () => Promise.resolve().then(function () { return _id__delete$3; });
const _lazy_iulcJT = () => Promise.resolve().then(function () { return _id__put$3; });
const _lazy_NFnUqU = () => Promise.resolve().then(function () { return get$7; });
const _lazy_VbmSOO = () => Promise.resolve().then(function () { return getLatestFirmaKodu$1; });
const _lazy_0S3jKl = () => Promise.resolve().then(function () { return naceSearch$1; });
const _lazy_3cEbQw = () => Promise.resolve().then(function () { return post$5; });
const _lazy_OON6eL = () => Promise.resolve().then(function () { return get$5; });
const _lazy_VJbWnP = () => Promise.resolve().then(function () { return get$3; });
const _lazy_JS0jln = () => Promise.resolve().then(function () { return post$3; });
const _lazy_4xtmc5 = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_od5Pyq = () => Promise.resolve().then(function () { return _id__put$1; });
const _lazy_hjqu3z = () => Promise.resolve().then(function () { return get$1; });
const _lazy_kKJmE0 = () => Promise.resolve().then(function () { return getByFirmaId$1; });
const _lazy_jXXiYw = () => Promise.resolve().then(function () { return post$1; });
const _lazy_YmRSbW = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/calisan/:id', handler: _lazy_YiV0Gk, lazy: true, middleware: false, method: "delete" },
  { route: '/api/calisan/:id', handler: _lazy_AmlItx, lazy: true, middleware: false, method: "put" },
  { route: '/api/calisan/excel', handler: _lazy_YwpTEl, lazy: true, middleware: false, method: undefined },
  { route: '/api/calisan/get', handler: _lazy_H2nGhE, lazy: true, middleware: false, method: undefined },
  { route: '/api/calisan/getByFirmaId', handler: _lazy_UPhwLY, lazy: true, middleware: false, method: undefined },
  { route: '/api/calisan/getByYerleskeId', handler: _lazy_5AODSg, lazy: true, middleware: false, method: undefined },
  { route: '/api/calisan/post', handler: _lazy_g376m5, lazy: true, middleware: false, method: undefined },
  { route: '/api/dokuman/yukle', handler: _lazy_X6nTVf, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitim/:id', handler: _lazy_Lx3BAU, lazy: true, middleware: false, method: "delete" },
  { route: '/api/egitim/:id', handler: _lazy_pWor3m, lazy: true, middleware: false, method: "put" },
  { route: '/api/egitim/get', handler: _lazy_n4HqLC, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitim/getByCalisanId', handler: _lazy_PbD6Qp, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitim/getByFirmaId', handler: _lazy_hstrpU, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitim/getGroupedByKategori', handler: _lazy_lFCDIm, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitim/post', handler: _lazy_hxJptv, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitimkonu/:id', handler: _lazy_vPchHS, lazy: true, middleware: false, method: "delete" },
  { route: '/api/egitimkonu/:id', handler: _lazy_MKEDnv, lazy: true, middleware: false, method: "put" },
  { route: '/api/egitimkonu/get', handler: _lazy_zrlY6x, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitimkonu/getByKategoriId', handler: _lazy_aVoZP1, lazy: true, middleware: false, method: undefined },
  { route: '/api/egitimkonu/post', handler: _lazy_M4SqEF, lazy: true, middleware: false, method: undefined },
  { route: '/api/evrak/delete/:id', handler: _lazy_bkK6Zr, lazy: true, middleware: false, method: undefined },
  { route: '/api/evrak/download', handler: _lazy_PZIRz9, lazy: true, middleware: false, method: undefined },
  { route: '/api/evrak/get', handler: _lazy_aj51Cl, lazy: true, middleware: false, method: undefined },
  { route: '/api/evrak/upload', handler: _lazy_dFawVS, lazy: true, middleware: false, method: undefined },
  { route: '/api/firma/:id', handler: _lazy_DWp7yq, lazy: true, middleware: false, method: "delete" },
  { route: '/api/firma/:id', handler: _lazy_iulcJT, lazy: true, middleware: false, method: "put" },
  { route: '/api/firma/get', handler: _lazy_NFnUqU, lazy: true, middleware: false, method: undefined },
  { route: '/api/firma/getLatestFirmaKodu', handler: _lazy_VbmSOO, lazy: true, middleware: false, method: undefined },
  { route: '/api/firma/nace-search', handler: _lazy_0S3jKl, lazy: true, middleware: false, method: undefined },
  { route: '/api/firma/post', handler: _lazy_3cEbQw, lazy: true, middleware: false, method: undefined },
  { route: '/api/firmaevrak/get', handler: _lazy_OON6eL, lazy: true, middleware: false, method: undefined },
  { route: '/api/kategori/get', handler: _lazy_VJbWnP, lazy: true, middleware: false, method: undefined },
  { route: '/api/kategori/post', handler: _lazy_JS0jln, lazy: true, middleware: false, method: undefined },
  { route: '/api/yerleske/:id', handler: _lazy_4xtmc5, lazy: true, middleware: false, method: "delete" },
  { route: '/api/yerleske/:id', handler: _lazy_od5Pyq, lazy: true, middleware: false, method: "put" },
  { route: '/api/yerleske/get', handler: _lazy_hjqu3z, lazy: true, middleware: false, method: undefined },
  { route: '/api/yerleske/getByFirmaId', handler: _lazy_kKJmE0, lazy: true, middleware: false, method: undefined },
  { route: '/api/yerleske/post', handler: _lazy_jXXiYw, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_YmRSbW, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _xGtIIi, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_YmRSbW, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + messages.statusMessage + " | " + messages.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}h1,p,pre{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><pre class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</pre></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const prisma$B = new PrismaClient();
const _id__delete$8 = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const deletedCalisan = await prisma$B.calisan.delete({
      where: { id: parseInt(id) }
      // ID'yi parse et
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla silindi",
      calisan: deletedCalisan
    };
  } catch (error) {
    console.error("\xC7al\u0131\u015Fan silinirken hata olu\u015Ftu:", error);
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan silinirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

const _id__delete$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$8
});

const prisma$A = new PrismaClient();
const _id__put$8 = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  try {
    const updatedCalisan = await prisma$A.calisan.update({
      where: { id: parseInt(id) },
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: body.tc_no,
        meslegi: body.meslegi,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif
      }
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla g\xFCncellendi",
      calisan: updatedCalisan
    };
  } catch (error) {
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan g\xFCncellenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

const _id__put$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$8
});

const prisma$z = new PrismaClient();
const excel = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newCalisan = await prisma$z.calisan.create({
      data: {
        adi: body.adi,
        soyadi: body.soyadi,
        tc_no: String(body.tc_no),
        // TC numarasını string olarak kullan
        meslegi: body.meslegi,
        firmaId: body.firmaId,
        firmaYerleskeId: body.firmaYerleskeId,
        isegiristarihi: new Date(body.isegiristarihi),
        isecikistaarihi: body.isecikistaarihi ? new Date(body.isecikistaarihi) : null,
        aktif: body.aktif
      }
    });
    return {
      success: true,
      message: "\xC7al\u0131\u015Fan ba\u015Far\u0131yla eklendi",
      calisan: newCalisan
    };
  } catch (error) {
    console.error("Hata olu\u015Ftu:", error);
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fan eklenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

const excel$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: excel
});

const prisma$y = new PrismaClient();
const get$e = defineEventHandler(async (event) => {
  const calisanlar = await prisma$y.calisan.findMany({
    select: {
      id: true,
      firmaId: true,
      aktif: true,
      adi: true,
      firmaYerleskeId: true,
      isegiristarihi: true,
      isecikistaarihi: true,
      meslegi: true,
      soyadi: true,
      tc_no: true,
      firma: {
        select: {
          firmaAdi: true
        }
      },
      yerleske: {
        select: {
          subeAdi: true
        }
      },
      saglikRaporlari: {
        // Sağlık raporu ilişkilendirilmesi
        select: {
          raporUrl: true,
          gecerlilikTarihi: true
        }
      },
      sertifikalar: {
        // Sertifika ilişkilendirilmesi
        select: {
          sertifikaUrl: true,
          gecerlilikTarihi: true
        }
      }
    }
  });
  return calisanlar;
});

const get$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$e
});

const prisma$x = new PrismaClient();
const getByFirmaId$4 = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;
  if (!firmaId) {
    return {
      status: 400,
      message: "Firma ID gerekli."
    };
  }
  try {
    const calisanlar = await prisma$x.calisan.findMany({
      where: { firmaId },
      include: {
        firma: true,
        yerleske: true
      }
    });
    return calisanlar;
  } catch (error) {
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fanlar listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getByFirmaId$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByFirmaId$4
});

const prisma$w = new PrismaClient();
const getByYerleskeId = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const yerleskeId = query.yerleskeId ? parseInt(query.yerleskeId) : null;
  if (!yerleskeId) {
    return {
      status: 400,
      message: "Yerle\u015Fke ID gerekli."
    };
  }
  try {
    const calisanlar = await prisma$w.calisan.findMany({
      where: { firmaYerleskeId: yerleskeId },
      include: {
        firma: true,
        yerleske: true
      }
    });
    return calisanlar;
  } catch (error) {
    return {
      status: 500,
      message: "\xC7al\u0131\u015Fanlar listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getByYerleskeId$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByYerleskeId
});

const prisma$v = new PrismaClient();
const post$a = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const calisan = await prisma$v.Calisan.create({
    data: {
      firmaId: parseInt(body.firmaId),
      firmaYerleskeId: parseInt(body.firmaYerleskeId),
      aktif: body.aktif,
      adi: body.adi,
      isegiristarihi: new Date(body.isegiristarihi),
      meslegi: body.meslegi,
      soyadi: body.soyadi,
      tc_no: body.tc_no
    }
  });
  return calisan;
});

const post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post$a
});

const prisma$u = new PrismaClient();
const yukle = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;
  const form = formidable({
    uploadDir: join$1(process.cwd(), `./public${uploadDir}`),
    // Dosya yükleme yolunu dinamik yapıyoruz
    keepExtensions: true,
    multiples: false
  });
  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.req, (err, fields2, files2) => {
        if (err) {
          reject(err);
        }
        resolve({ fields: fields2, files: files2 });
      });
    });
    console.log("Y\xFCklenen dosyalar:", files);
    const file = files.file[0];
    if (!file || !file.filepath) {
      console.error("Dosya y\xFCklenemedi, dosya bilgileri:", file);
      throw new Error("Dosya y\xFCklenemedi. Dosya bulunamad\u0131 veya hatal\u0131.");
    }
    const oldPath = file.filepath || file.path || file.tempFilePath;
    const newFileName = `${Date.now()}_${file.originalFilename}`;
    const newPath = join$1(process.cwd(), `./public${uploadDir}/${newFileName}`);
    await promises.rename(oldPath, newPath);
    const { calisanId, belgeTur, gecerlilikTarihi } = fields;
    console.log("Gelen Data", fields);
    if (belgeTur[0] === "saglikRaporu") {
      await prisma$u.saglikRapor.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          raporUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: /* @__PURE__ */ new Date()
        }
      });
    } else if (belgeTur[0] === "sertifika") {
      await prisma$u.sertifika.create({
        data: {
          calisanId: parseInt(calisanId[0]),
          sertifikaUrl: `./public${uploadDir}/${newFileName}`,
          gecerlilikTarihi: new Date(gecerlilikTarihi[0]),
          yuklemeTarihi: /* @__PURE__ */ new Date()
        }
      });
    }
    return { success: true, message: "Belge ba\u015Far\u0131yla y\xFCklendi" };
  } catch (error) {
    console.error("Hata olu\u015Ftu:", error.message);
    return { status: 500, message: "Belge y\xFCklenirken bir hata olu\u015Ftu", error: error.message };
  }
});

const yukle$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: yukle
});

const prisma$t = new PrismaClient();
const _id__delete$6 = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const deletedEgitim = await prisma$t.egitim.delete({
      where: { id: parseInt(id) }
    });
    return {
      success: true,
      message: "E\u011Fitim ba\u015Far\u0131yla silindi.",
      egitim: deletedEgitim
    };
  } catch (error) {
    console.log("Hata Delete", error);
    return {
      status: 500,
      message: "E\u011Fitim silinirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const _id__delete$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$6
});

const prisma$s = new PrismaClient();
const _id__put$6 = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  try {
    const updatedEgitim = await prisma$s.egitim.update({
      where: { id: parseInt(id) },
      data: {
        calisanId: body.calisanId,
        egitimKonuId: body.egitimKonuId,
        egitimTarihi: new Date(body.egitimTarihi),
        gecerlilikTarihi: new Date(body.gecerlilikTarihi),
        sure: body.sure,
        belge: body.belge || null
        // Belge var mı kontrol ediyoruz
      }
    });
    return {
      success: true,
      message: "E\u011Fitim ba\u015Far\u0131yla g\xFCncellendi",
      egitim: updatedEgitim
    };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim g\xFCncellenirken bir hata olu\u015Ftu",
      error: error.message
    };
  }
});

const _id__put$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$6
});

const prisma$r = new PrismaClient();
const get$c = defineEventHandler(async (event) => {
  try {
    const egitimler = await prisma$r.egitim.findMany({
      include: {
        calisan: {
          include: {
            firma: true,
            yerleske: true
          }
        },
        egitimKonu: {
          include: {
            kategori: true
          }
        }
      }
    });
    return egitimler;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitimler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const get$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$c
});

const prisma$q = new PrismaClient();
const getByCalisanId = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const calisanId = query.calisanId ? parseInt(query.calisanId) : null;
  if (!calisanId) {
    return {
      status: 400,
      message: "\xC7al\u0131\u015Fan ID gerekli."
    };
  }
  try {
    const egitimler = await prisma$q.egitim.findMany({
      where: { calisanId },
      include: {
        egitimKonu: true
      }
    });
    return egitimler;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitimler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getByCalisanId$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByCalisanId
});

const prisma$p = new PrismaClient();
const getByFirmaId$2 = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;
  if (!firmaId) {
    return {
      status: 400,
      message: "Firma ID gerekli."
    };
  }
  try {
    const egitimler = await prisma$p.egitim.findMany({
      where: { calisan: { firmaId } },
      include: {
        calisan: {
          include: {
            firma: true,
            yerleske: true
          }
        },
        egitimKonu: true
      }
    });
    return egitimler;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitimler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getByFirmaId$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByFirmaId$2
});

const prisma$o = new PrismaClient();
const getGroupedByKategori = defineEventHandler(async () => {
  try {
    const kategoriler = await prisma$o.kategori.findMany({
      include: {
        egitimKonular: {
          include: {
            egitimler: {
              include: {
                calisan: true
                // Eğitim alan çalışan bilgisi
              }
            }
          }
        }
      }
    });
    return {
      status: 200,
      data: kategoriler
    };
  } catch (error) {
    return {
      status: 500,
      message: "Kategorilere g\xF6re e\u011Fitimler getirilirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getGroupedByKategori$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getGroupedByKategori
});

const prisma$n = new PrismaClient();
const post$8 = defineEventHandler(async (event) => {
  const { payloads } = await readBody(event);
  if (!payloads || payloads.length === 0) {
    return {
      status: 400,
      message: "Kaydedilecek veri bulunamad\u0131."
    };
  }
  try {
    await prisma$n.egitim.createMany({
      data: payloads.map((payload) => ({
        calisanId: payload.calisanId,
        egitimKonuId: payload.egitimKonuId,
        egitimTarihi: new Date(payload.egitimTarihi),
        gecerlilikTarihi: new Date(payload.gecerlilikTarihi),
        sure: parseInt(payload.sure, 10),
        belge: payload.belge || null
      }))
    });
    return {
      status: 200,
      message: "E\u011Fitimler ba\u015Far\u0131yla kaydedildi."
    };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim kaydedilirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post$8
});

const prisma$m = new PrismaClient();
const _id__delete$4 = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) {
    return {
      status: 400,
      message: "E\u011Fitim konu ID gerekli."
    };
  }
  try {
    await prisma$m.egitimKonu.delete({
      where: { id: parseInt(id) }
    });
    return { message: "E\u011Fitim konusu ba\u015Far\u0131yla silindi." };
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu silinirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const _id__delete$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$4
});

const prisma$l = new PrismaClient();
const _id__put$4 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.id || !body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: "ID, ba\u015Fl\u0131k ve kategori ID gereklidir."
    };
  }
  try {
    const guncellenenEgitimKonu = await prisma$l.egitimKonu.update({
      where: { id: body.id },
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId
      }
    });
    return guncellenenEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu g\xFCncellenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const _id__put$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$4
});

const prisma$k = new PrismaClient();
const get$a = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const kategoriId = query.kategoriId ? parseInt(query.kategoriId) : null;
  if (!kategoriId) {
    return {
      status: 400,
      message: "Kategori ID gerekli."
    };
  }
  try {
    const egitimKonular = await prisma$k.egitimKonu.findMany({
      where: { kategoriId }
    });
    return egitimKonular;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konular\u0131 listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const get$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$a
});

const prisma$j = new PrismaClient();
const getByKategoriId = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const kategoriId = query.kategoriId ? parseInt(query.kategoriId) : null;
  if (!kategoriId) {
    return { status: 400, message: "Kategori ID gerekli." };
  }
  try {
    const egitimKonular = await prisma$j.egitimKonu.findMany({
      where: { kategoriId }
    });
    return egitimKonular;
  } catch (error) {
    return { status: 500, message: "E\u011Fitim konular\u0131 getirilirken bir hata olu\u015Ftu.", error: error.message };
  }
});

const getByKategoriId$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByKategoriId
});

const prisma$i = new PrismaClient();
const post$6 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.baslik || !body.kategoriId) {
    return {
      status: 400,
      message: "Ba\u015Fl\u0131k ve kategori ID gereklidir."
    };
  }
  try {
    const yeniEgitimKonu = await prisma$i.egitimKonu.create({
      data: {
        baslik: body.baslik,
        aciklama: body.aciklama,
        kategoriId: body.kategoriId
      }
    });
    return yeniEgitimKonu;
  } catch (error) {
    return {
      status: 500,
      message: "E\u011Fitim konusu eklenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post$6
});

const prisma$h = new PrismaClient();
const _id_ = defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params.id);
    const evrak = await prisma$h.firmaEvrak.findUnique({
      where: { id }
    });
    if (!evrak) {
      return { status: 404, message: "Evrak bulunamad\u0131" };
    }
    await fs.unlink(evrak.dosyaYolu);
    await prisma$h.firmaEvrak.delete({
      where: { id }
    });
    return { status: 200, message: "Evrak ba\u015Far\u0131yla silindi" };
  } catch (error) {
    console.error("Hata:", error);
    return { status: 500, message: "Evrak silinirken bir hata olu\u015Ftu", error: error.message };
  }
});

const _id_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id_
});

const download = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const evrakId = parseInt(query.evrakId);
  const evrak = await prisma.firmaEvrak.findUnique({ where: { id: evrakId } });
  if (!evrak) {
    return { status: 404, message: "Evrak bulunamad\u0131" };
  }
  const filePath = evrak.dosyaYolu;
  if (!fs$1.existsSync(filePath)) {
    return { status: 404, message: "Dosya bulunamad\u0131" };
  }
  return sendStream(event, fs$1.createReadStream(filePath));
});

const download$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: download
});

const prisma$g = new PrismaClient();
const get$8 = defineEventHandler(async (event) => {
  const evraklar = await prisma$g.firmaEvrak.findMany({
    include: {
      firma: true,
      kategori: true
    }
  });
  return evraklar;
});

const get$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$8
});

const prisma$f = new PrismaClient();
const upload = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const uploadDir = config.public.uploadDir;
  try {
    console.log("API \xE7a\u011Fr\u0131ld\u0131");
    const form = formidable({
      multiples: true,
      uploadDir: path.join(process.cwd(), `./public${uploadDir}`),
      keepExtensions: true
    });
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields2, files2) => {
        if (err) {
          console.error("Form ayr\u0131\u015Ft\u0131rma hatas\u0131:", err);
          reject(err);
        }
        console.log("Form ayr\u0131\u015Ft\u0131r\u0131ld\u0131:", { fields: fields2, files: files2 });
        resolve({ fields: fields2, files: files2 });
      });
    });
    const firmaId = parseInt(fields.firmaId);
    const kategoriId = parseInt(fields.kategoriId);
    const evrakTuru = String(fields.evrakTuru).trim();
    if (!firmaId || !kategoriId || !evrakTuru) {
      return { status: 400, message: "Firma veya kategori bilgisi eksik" };
    }
    const firma = await prisma$f.firma.findUnique({ where: { id: firmaId } });
    console.log("Firma bilgisi:", firma);
    if (!firma || !firma.firmaKodu) {
      return { status: 400, message: "Firma bulunamad\u0131 veya firma kodu eksik" };
    }
    const firmaDir = path.join(uploadDir, String(firma.firmaKodu) || "default");
    const kategoriDir = kategoriId === 1 ? path.join(firmaDir, "FirmaEvraklari") : path.join(firmaDir, "IsgEvraklari");
    console.log("Firma klas\xF6r\xFC:", firmaDir);
    console.log("Kategori klas\xF6r\xFC:", kategoriDir);
    await fs.mkdir(path.join(process.cwd(), `./public${kategoriDir}`), { recursive: true });
    const uploadedFiles = [];
    const fileArray = Array.isArray(files.file) ? files.file : [files.file];
    console.log("Y\xFCklenecek dosyalar:", fileArray);
    for (const file of fileArray) {
      if (!file.newFilename || !file.filepath) {
        console.error("Ge\xE7ersiz dosya bilgisi:", file);
        return { status: 400, message: "Ge\xE7ersiz dosya bilgisi" };
      }
      const newFilePath = path.join(kategoriDir, file.newFilename);
      const fullFilePath = path.join(process.cwd(), `./public${newFilePath}`);
      console.log("Yeni dosya yolu:", fullFilePath);
      await fs.rename(file.filepath, fullFilePath);
      console.log("Dosya ta\u015F\u0131nd\u0131:", fullFilePath);
      const evrak = await prisma$f.firmaEvrak.create({
        data: {
          firmaId,
          kategoriId,
          evrakTuru,
          dosyaYolu: `./public${newFilePath}`,
          // Sadece `public` altındaki dosya yolunu kaydediyoruz
          dosyaAdi: file.newFilename
        }
      });
      console.log("Veritaban\u0131na kaydedilen evrak:", evrak);
      uploadedFiles.push(evrak);
    }
    return { status: 200, message: "Evraklar ba\u015Far\u0131yla y\xFCklendi", evraklar: uploadedFiles };
  } catch (error) {
    console.error("Hata:", error);
    return { status: 500, message: "Bir hata olu\u015Ftu", error: error.message };
  }
});

const upload$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: upload
});

const prisma$e = new PrismaClient();
const _id__delete$2 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  try {
    await prisma$e.firma.delete({
      where: {
        id: parseInt(id)
      }
    });
    return {
      status: 200,
      message: "Firma Silindi"
    };
  } catch (error) {
    console.error("Failed to delete firma:", error);
    return {
      status: 500,
      message: "Failed to delete firma",
      error
    };
  }
});

const _id__delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete$2
});

const prisma$d = new PrismaClient();
const _id__put$2 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;
  const updatedFirma = await prisma$d.firma.update({
    where: { id: parseInt(id) },
    data: {
      firmaKodu: body.firmaKodu,
      firmaAdi: body.firmaAdi,
      adres: body.adres,
      il: body.il,
      ilce: body.ilce,
      telefon: body.telefon,
      email: body.email,
      yetkili: body.yetkili,
      naceId: body.naceId,
      isgkSicilNo: body.isgkSicilNo
    }
  });
  return updatedFirma;
});

const _id__put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put$2
});

const prisma$c = new PrismaClient();
const get$6 = defineEventHandler(async (event) => {
  try {
    const firmalar = await prisma$c.firma.findMany({
      include: {
        nace: true
      }
    });
    return firmalar;
  } catch (error) {
    console.error("Veritaban\u0131 ba\u011Flant\u0131 hatas\u0131:", error.message || error);
    return {
      statusCode: 500,
      message: "Veritaban\u0131 ba\u011Flant\u0131s\u0131 sa\u011Flanamad\u0131"
    };
  }
});

const get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$6
});

const prisma$b = new PrismaClient();
const getLatestFirmaKodu = defineEventHandler(async () => {
  try {
    const latestFirma = await prisma$b.firma.findFirst({
      orderBy: {
        firmaKodu: "desc"
        // En yüksek firma kodunu getir
      }
    });
    const nextFirmaKodu = latestFirma ? parseInt(latestFirma.firmaKodu) + 1 : 1;
    return { success: true, nextFirmaKodu };
  } catch (error) {
    console.error("Hata:", error);
    return { success: false, message: "Firma kodu al\u0131n\u0131rken bir hata olu\u015Ftu." };
  }
});

const getLatestFirmaKodu$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getLatestFirmaKodu
});

const prisma$a = new PrismaClient();
const naceSearch = defineEventHandler(async (event) => {
  const { sgkSicilNo } = await readBody(event);
  if (!sgkSicilNo || sgkSicilNo.length < 4) {
    return { error: "SGK Sicil No en az 4 karakter olmal\u0131d\u0131r" };
  }
  const searchCode = sgkSicilNo.slice(1, 5);
  console.log("serach", searchCode);
  const results = await prisma$a.nace.findMany({
    where: {
      kod: {
        startsWith: searchCode
        // 2. ve 4. basamağı içeren kodları getir
      }
    }
  });
  return results;
});

const naceSearch$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: naceSearch
});

const prisma$9 = new PrismaClient();
const post$4 = async (event) => {
  const body = await readBody(event);
  const newFirma = await prisma$9.firma.create({
    data: {
      firmaKodu: parseInt(body.firmaKodu),
      firmaAdi: body.firmaAdi,
      adres: body.adres,
      il: body.il,
      ilce: body.ilce,
      telefon: body.telefon,
      email: body.email,
      yetkili: body.yetkili,
      naceId: body.naceId,
      isgkSicilNo: body.isgkSicilNo
    }
  });
  return newFirma;
};

const post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post$4
});

const prisma$8 = new PrismaClient();
const get$4 = defineEventHandler(async (event) => {
  try {
    const kategoriler = await prisma$8.firmaEvrakKategori.findMany();
    return kategoriler;
  } catch (error) {
    return {
      status: 500,
      message: "Kategoriler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$4
});

const prisma$7 = new PrismaClient();
const get$2 = defineEventHandler(async (event) => {
  try {
    const kategoriler = await prisma$7.kategori.findMany({
      include: {
        egitimKonular: true
        // İlgili eğitim konularını dahil et
      }
    });
    return kategoriler;
  } catch (error) {
    return {
      status: 500,
      message: "Kategoriler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get$2
});

const prisma$6 = new PrismaClient();
const post$2 = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.isim) {
    return {
      status: 400,
      message: "Kategori ad\u0131 gereklidir."
    };
  }
  try {
    const yeniKategori = await prisma$6.kategori.create({
      data: {
        isim: body.isim
      }
    });
    return yeniKategori;
  } catch (error) {
    return {
      status: 500,
      message: "Kategori eklenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post$2
});

const prisma$5 = new PrismaClient();
const _id__delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  try {
    await prisma$5.yerleske.delete({
      where: {
        id: parseInt(id)
      }
    });
    return {
      status: 200,
      message: "Yerle\u015Fke Silindi"
    };
  } catch (error) {
    console.error("Failed to delete yerleske:", error);
    return {
      status: 500,
      message: "Failed to delete yerleske",
      error
    };
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const prisma$4 = new PrismaClient();
const _id__put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;
  const updatedYerleske = await prisma$4.yerleske.update({
    where: { id: parseInt(id) },
    data: {
      subeAdi: body.subeAdi,
      adres: body.adres,
      tehlikeSinifi: body.tehlikeSinifi,
      naceKodu: body.naceKodu,
      telefon: body.telefon,
      yetkili: body.yetkili,
      sgkSicilNo: body.sgkSicilNo
    }
  });
  return updatedYerleske;
});

const _id__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put
});

const prisma$3 = new PrismaClient();
const get = defineEventHandler(async (event) => {
  const yerleskeler = await prisma$3.yerleske.findMany({
    select: {
      id: true,
      subeAdi: true,
      adres: true,
      telefon: true,
      yetkili: true,
      sgkSicilNo: true,
      firma: {
        select: {
          firmaAdi: true,
          // Sadece firmaAdi alanını alıyoruz
          id: true
        }
      },
      nace: {
        select: {
          kod: true,
          tehlikeSinifi: true
        }
      }
    }
  });
  return yerleskeler;
});

const get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: get
});

const prisma$2 = new PrismaClient();
const getByFirmaId = defineEventHandler(async (event) => {
  const query = getQuery$1(event);
  const firmaId = query.firmaId ? parseInt(query.firmaId) : null;
  if (!firmaId) {
    return {
      status: 400,
      message: "Firma ID gerekli."
    };
  }
  try {
    const yerleskeler = await prisma$2.yerleske.findMany({
      where: { firmaId },
      // firmaId'ye göre filtreleme
      include: {
        firma: true,
        // Firma bilgilerini dahil et
        nace: true
        // NACE bilgilerini dahil et
      }
    });
    return yerleskeler;
  } catch (error) {
    return {
      status: 500,
      message: "Yerle\u015Fkeler listelenirken bir hata olu\u015Ftu.",
      error: error.message
    };
  }
});

const getByFirmaId$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getByFirmaId
});

const prisma$1 = new PrismaClient();
const post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newyerleske = await prisma$1.yerleske.create({
    data: {
      firmaId: parseInt(body.firmaId),
      subeAdi: body.subeAdi,
      adres: body.adres,
      naceId: body.naceKodID,
      telefon: body.telefon,
      yetkili: body.yetkili,
      sgkSicilNo: body.sgkSicilNo
    }
  });
  return newyerleske;
});

const post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: post
});

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/WEB_PROJELER/isg-programi/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://D:/WEB_PROJELER/isg-programi/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG);
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  if (!isRenderingIsland || true) {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.headEntries()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link = islandHead.link || [];
    islandHead.style = islandHead.style || [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(htmlContext.body),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}
function getServerComponentHTML(body) {
  const match = body[0].match(ROOT_NODE_REGEX);
  return match ? match[1] : body[0];
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=[^;]*;(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const slot in ssrContext.islandContext.slots) {
    response[slot] = {
      ...ssrContext.islandContext.slots[slot],
      fallback: ssrContext.teleports?.[`island-fallback=${slot}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const clientUid in ssrContext.islandContext.components) {
    const html = ssrContext.teleports?.[clientUid].replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...ssrContext.islandContext.components[clientUid],
      html,
      slots: getComponentSlotTeleport(ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, slot] = match;
      if (!slot) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
