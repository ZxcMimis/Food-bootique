// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _filtersJs = require("./js/sections/filters.js");
var _productsJs = require("./js/sections/products.js");
var _popularJs = require("./js/sections/popular.js");
var _discountJs = require("./js/sections/discount.js");
var _paginationJs = require("./js/sections/pagination.js");
var _productJs = require("./js/sections/product.js");
var _subscribeJs = require("./js/sections/subscribe.js");

},{"./js/sections/products.js":"7kVSa","./js/sections/discount.js":"2Dntu","./js/sections/pagination.js":"drJWK","./js/sections/subscribe.js":"4utt9","./js/sections/popular.js":"aJ9bM","./js/sections/product.js":"3SG3N","./js/sections/filters.js":"8U2Ig"}],"7kVSa":[function(require,module,exports,__globalThis) {

},{}],"2Dntu":[function(require,module,exports,__globalThis) {

},{}],"drJWK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makePagination", ()=>makePagination);
var _getFilteredProducts = require("../fetchs/getFilteredProducts");
var _filters = require("./filters");
let userPage = 1;
const makeMarkup = (page, category, keyword, sort)=>{
    (0, _getFilteredProducts.getFilteredProducts)(keyword, category, page, sort).then((products)=>{
        document.querySelector("#products-list").innerHTML = products.results.map(({ _id, name, img, category, size, price, is10PercentOff, popularity })=>`<li id="${_id}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${img}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map((item)=>item.id).includes(_id) ? "\u2713" : ` <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
                </svg>`}
            </div>
        </div>
    </li>`).join("");
    });
};
const makePagination = (page, category, keyword, sort)=>{
    (0, _getFilteredProducts.getFilteredProducts)(keyword, category, page, sort).then(({ totalPages })=>{
        let markup = "";
        for(let i = page; i <= totalPages && i <= page + 3; i += 1)markup += `<li id='${i}' class="pagination__item ${page === i ? "pagination__accent" : ""}">
        <button class="pagination__btn">${i}
        </button>
      </li>`;
        if (totalPages > 4) markup += `<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`;
        document.querySelector("#pagination-list").innerHTML = markup;
        if (page - 2 < 1) document.querySelector("#double-prev").classList.add("pagination__disable");
        else document.querySelector("#double-prev").classList.remove("pagination__disable");
        if (page - 1 < 1) document.querySelector("#prev").classList.add("pagination__disable");
        else document.querySelector("#prev").classList.remove("pagination__disable");
        if (page + 2 > totalPages) document.querySelector("#double-next").classList.add("pagination__disable");
        else document.querySelector("#double-next").classList.remove("pagination__disable");
        if (page + 1 > totalPages) document.querySelector("#next").classList.add("pagination__disable");
        else document.querySelector("#next").classList.remove("pagination__disable");
    });
};
makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
document.querySelector("#pagination-list").addEventListener("click", (e)=>{
    if (e.target.classList.contains("pagination__btn")) {
        if (Number.parseInt(e.target.parentElement.id) === userPage) return;
        userPage = Number.parseInt(e.target.parentElement.id);
        makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
        makeMarkup(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
    }
});
document.querySelector("#next").addEventListener("click", (e)=>{
    if (e.currentTarget.classList.contains("pagination__disable")) return;
    userPage += 1;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
    makeMarkup(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#double-next").addEventListener("click", (e)=>{
    if (e.currentTarget.classList.contains("pagination__disable")) return;
    userPage += 2;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
    makeMarkup(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#prev").addEventListener("click", (e)=>{
    if (e.currentTarget.classList.contains("pagination__disable")) return;
    userPage -= 1;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
    makeMarkup(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#double-prev").addEventListener("click", (e)=>{
    if (e.currentTarget.classList.contains("pagination__disable")) return;
    userPage -= 2;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
    makeMarkup(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#filters-form").addEventListener("submit", (e)=>{
    userPage = 1;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#filters-categories-list").addEventListener("click", (e)=>{
    userPage = 1;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});
document.querySelector("#filters-alphabet-list").addEventListener("click", (e)=>{
    userPage = 1;
    makePagination(userPage, (0, _filters.category), (0, _filters.keyword), (0, _filters.sort));
});

},{"../fetchs/getFilteredProducts":"cf4nK","./filters":"8U2Ig","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cf4nK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFilteredProducts", ()=>getFilteredProducts);
const getFilteredProducts = async (keyword, category, id, sort)=>{
    try {
        return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${keyword}${sort}&category=${category}&page=${id}&limit=9`).then((response)=>response.json());
    } catch (e) {
        return e;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8U2Ig":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyword", ()=>keyword);
parcelHelpers.export(exports, "category", ()=>category);
parcelHelpers.export(exports, "sort", ()=>sort);
var _getFilteredProducts = require("../fetchs/getFilteredProducts");
let keyword = "";
let category = "";
let sort = "";
const makeMarkup = (keyword, category, id, sort)=>{
    if (category.includes("&")) {
        document.querySelector("#products-list").innerHTML = `<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`;
        document.querySelector("#pagination-section").classList.add("display-none");
        return;
    }
    (0, _getFilteredProducts.getFilteredProducts)(keyword, category, id, sort).then((data)=>{
        if (data.results.length === 0) {
            document.querySelector("#products-list").innerHTML = `<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;
            document.querySelector("#pagination-section").classList.add("display-none");
            return;
        }
        document.querySelector("#products-list").innerHTML = data.results.map(({ _id, name, img, category, size, price, is10PercentOff, popularity })=>`
    <li id="${_id}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${img}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map((item)=>item.id).includes(_id) ? "\u2713" : ` <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
                </svg>`}
            </div>
        </div>
    </li>
    `).join("");
        document.querySelector("#pagination-section").classList.remove("display-none");
    });
};
document.querySelector("#filters-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    keyword = document.querySelector("#filters-input").value;
    makeMarkup(keyword, category, 1, sort);
});
document.querySelector("#filters-categories").addEventListener("click", (e)=>{
    e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});
document.querySelector("#filters-categories-list").addEventListener("click", (e)=>{
    e.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked");
    e.target.classList.add("filters__item--checked");
    e.currentTarget.classList.add("is-hidden");
    document.querySelector("#filters-categories-text").textContent = e.target.textContent;
    if (e.target.id === "all") category = "";
    else category = e.target.id;
    makeMarkup(keyword, category, 1, sort);
});
document.querySelector("#filters-alphabet").addEventListener("click", (e)=>{
    e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});
document.querySelector("#filters-alphabet-list").addEventListener("click", (e)=>{
    e.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked");
    e.target.classList.add("filters__item--checked");
    e.currentTarget.classList.add("is-hidden");
    document.querySelector("#filters-alphabet-text").textContent = e.target.textContent;
    if (e.target.id === "allAlphabet") sort = "";
    else sort = e.target.id;
    makeMarkup(keyword, category, 1, sort);
});

},{"../fetchs/getFilteredProducts":"cf4nK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4utt9":[function(require,module,exports,__globalThis) {
const page = document.querySelector('body');
const subscribeBackdrop = document.querySelector(`[data-thanks="backdrop"]`);
const subscribeCloseBtn = document.querySelector(`[data-thanks="close"]`);
const errorBackdrop = document.querySelector(`[data-email="backdrop"]`);
const errorCloseBtn = document.querySelector(`[data-email="close"]`);
const form = document.querySelector('#subscribe-form');
const emails = [];
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const isIncludingEmail = addEmail(e.currentTarget.querySelector('input').value);
    if (isIncludingEmail) {
        e.currentTarget.querySelector('input').value = '';
        page.classList.toggle('no-scroll');
        errorBackdrop.classList.toggle('is-hidden');
    } else {
        e.currentTarget.querySelector('input').value = '';
        page.classList.toggle('no-scroll');
        subscribeBackdrop.classList.toggle('is-hidden');
    }
});
errorCloseBtn.addEventListener('click', errorToggleModal);
errorBackdrop.addEventListener('click', errorToggleModal);
subscribeCloseBtn.addEventListener('click', subscribeToggleModal);
subscribeBackdrop.addEventListener('click', subscribeToggleModal);
function subscribeToggleModal(e) {
    e.preventDefault();
    if (e.currentTarget === subscribeBackdrop && e.currentTarget !== e.target) return;
    page.classList.toggle('no-scroll');
    subscribeBackdrop.classList.toggle('is-hidden');
}
function errorToggleModal(e) {
    e.preventDefault();
    if (e.currentTarget === errorBackdrop && e.currentTarget !== e.target) return;
    page.classList.toggle('no-scroll');
    errorBackdrop.classList.toggle('is-hidden');
}
function addEmail(email) {
    if (emails.includes(email)) return true;
    else {
        emails.push(email);
        return false;
    }
}

},{}],"aJ9bM":[function(require,module,exports,__globalThis) {
var _getPopularProducts = require("../fetchs/getPopularProducts");
(0, _getPopularProducts.getPopularProducts)().then((products)=>{
    document.querySelector("#popular__list").innerHTML = products.map(({ _id, name, img, category, size, is10PercentOff, popularity })=>`<li id='${_id}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${img}" alt="${name}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${name}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${category}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${size}</span>
            </li>
            <li class="popular__point">
              Popularity: <span class="popular__span">${popularity}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${JSON.parse(localStorage.getItem("cart")).map((item)=>item.id).includes(_id) ? "\u2713" : ` <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>`}
        </button>
      </li>`).join("");
});

},{"../fetchs/getPopularProducts":"9oSnk"}],"9oSnk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPopularProducts", ()=>getPopularProducts);
const getPopularProducts = async ()=>{
    try {
        return await fetch("https://food-boutique.b.goit.study/api/products/popular").then((response)=>response.json());
    } catch (e) {
        return e;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3SG3N":[function(require,module,exports,__globalThis) {
var _getProduct = require("../fetchs/getProduct");
if (!Object.keys(localStorage).includes("cart")) localStorage.setItem("cart", JSON.stringify([]));
document.querySelector("body").addEventListener("click", async (e)=>{
    if (e.target.dataset.productadd === "true" || e.target.closest("[data-productadd]") || e.target.dataset.productclose === "true" || e.target.closest(`[data-productclose="true"]`) || e.target.dataset.cart === "count" || e.target.closest(`[data-cart='count']`)) return;
    if (e.target.dataset.product === "true" || e.target.closest("[data-product]")) {
        document.querySelector("#product-backdrop").classList.remove("is-hidden");
        document.querySelector("body").classList.add("no-scroll");
        let id;
        if (!(e.target.id === "")) id = e.target.id;
        else id = e.target.closest("[data-product]").id;
        await (0, _getProduct.getProduct)(id).then(({ _id, name, img, category, price, size, desc, is10PercentOff, popularity })=>{
            document.querySelector(`[data-productmodal]`).id = _id;
            document.querySelector("#product-img").src = img;
            document.querySelector("#product-img").alt = name;
            document.querySelector("#product-name").textContent = name;
            document.querySelector("#product-category").textContent = category;
            document.querySelector("#product-size").textContent = size;
            document.querySelector("#product-popularity").textContent = popularity;
            document.querySelector("#product-price").textContent = price;
            document.querySelector("#product-desc").textContent = desc;
            document.querySelector("#product-add").innerHTML = JSON.parse(localStorage.getItem("cart")).map((product)=>product.id).includes(_id) ? `Added \u{2713}` : `Add to
          <svg class="product__icon" width="18" height="18">
            <use href="./svg/icons.svg#cart"></use>
          </svg>
        `;
        });
    }
});
document.querySelector("#product-close").addEventListener("click", async ()=>{
    document.querySelector("#product-backdrop").classList.add("is-hidden");
    document.querySelector(`[data-productmodal]`).id = "";
    document.querySelector("body").classList.remove("no-scroll");
    document.querySelector("#product-img").src = "";
    document.querySelector("#product-img").alt = "";
    document.querySelector("#product-name").textContent = "";
    document.querySelector("#product-category").textContent = "";
    document.querySelector("#product-size").textContent = "";
    document.querySelector("#product-popularity").textContent = "";
    document.querySelector("#product-price").textContent = "";
    document.querySelector("#product-desc").textContent = "";
});
document.querySelector("body").addEventListener("click", async (e)=>{
    if (e.target.dataset.productadd === "true" || e.target.closest("[data-productadd]")) {
        const target = e.target.dataset.productadd === "true" ? e.target : e.target.closest("[data-productadd]");
        const array = [
            ...JSON.parse(localStorage.getItem("cart"))
        ];
        if (array.map((item)=>item.id).includes(e.target.closest("[data-product]").id)) return;
        array.push({
            id: e.target.closest("[data-product]").id,
            count: 1
        });
        target.textContent = "\u2713";
        localStorage.setItem("cart", JSON.stringify(array));
    }
});
document.querySelector(`[data-productmodal]`).addEventListener("click", async (e)=>{
    if (e.target.dataset.productaddmodal === "true" || e.target.closest("[data-productaddmodal]")) {
        const target = e.target.dataset.productaddmodal === "true" ? e.target : e.target.closest("[data-productaddmodal]");
        const array = [
            ...JSON.parse(localStorage.getItem("cart"))
        ];
        if (array.map((item)=>item.id).includes(e.target.closest("[data-productmodal]").id)) return;
        array.push({
            id: e.target.closest("[data-productmodal]").id,
            count: 1
        });
        target.textContent = "Added \u2713";
        localStorage.setItem("cart", JSON.stringify(array));
        document.getElementById(`${e.target.closest("[data-productmodal]").id}`).querySelector(`[data-productadd='true']`).textContent = "\u2713";
    }
});

},{"../fetchs/getProduct":"2EjBq"}],"2EjBq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProduct", ()=>getProduct);
const getProduct = async (id)=>{
    try {
        return await fetch(`https://food-boutique.b.goit.study/api/products/${id}`).then((response)=>response.json());
    } catch (e) {
        return e;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire6801", {})

//# sourceMappingURL=async-masters-project.31b563d9.js.map
