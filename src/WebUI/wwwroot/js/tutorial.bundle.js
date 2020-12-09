/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"tutorial": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/components/tutorial/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./Source/components/tutorial/header/header.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nlet isButton = false;\r\nwindow.onload = () => {\r\n    window.onscroll = () => {\r\n        var _a;\r\n        const nav = document.getElementById(\"main-nav\");\r\n        const scroll = document.getElementById(\"side-bar\");\r\n        let sticky = (_a = nav.offsetTop) !== null && _a !== void 0 ? _a : 0;\r\n        if (window.pageXOffset > sticky) {\r\n            scroll.classList.add(\"sticky\");\r\n        }\r\n        else {\r\n            scroll.classList.remove(\"sticky\");\r\n        }\r\n    };\r\n    activeAnchorLink();\r\n};\r\nfunction mobileMenu() {\r\n    let sidebar = document.getElementById(\"side-bar\");\r\n    if (!isButton) {\r\n        sidebar.classList.add(\"active\");\r\n        isButton = true;\r\n    }\r\n    else {\r\n        sidebar.classList.remove(\"active\");\r\n        isButton = false;\r\n    }\r\n}\r\ndocument.getElementById(\"mobile-toggle-open\").addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n    mobileMenu();\r\n});\r\ndocument.getElementById(\"menu-toggle-close\").addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n    mobileMenu();\r\n});\r\nlet isActiveSearch = false;\r\nfunction searchBox() {\r\n    const searchForm = document.getElementById(\"search-form\");\r\n    const searchBox = document.getElementById(\"search-input\");\r\n    const searchButton = document.getElementById(\"search-button\");\r\n    const searchButtonSubmit = document.getElementById(\"search-button-submit\");\r\n    if (!isActiveSearch) {\r\n        searchForm.classList.add(\"active\");\r\n        searchBox.focus();\r\n        isActiveSearch = true;\r\n        searchButton.style.display = \"none\";\r\n        searchButtonSubmit.style.display = \"block\";\r\n    }\r\n    else {\r\n        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.remove(\"active\");\r\n        isActiveSearch = false;\r\n        searchButton.style.display = \"block\";\r\n        searchButtonSubmit.style.display = \"none\";\r\n    }\r\n}\r\ndocument.getElementById(\"search-button\").addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n    searchBox();\r\n});\r\ndocument.getElementById(\"search-input\").addEventListener(\"blur\", e => {\r\n    e.preventDefault();\r\n    let relatedTarget = e.relatedTarget;\r\n    if (relatedTarget && relatedTarget.type === \"submit\")\r\n        return;\r\n    searchBox();\r\n});\r\nfunction activeAnchorLink() {\r\n    let mainsection = document.getElementById(\"tutorial-aside-list\");\r\n    let anchors = mainsection.getElementsByTagName(\"a\");\r\n    let current = window.location.pathname.concat(window.location.search);\r\n    for (let i = 0; i < anchors.length; i++) {\r\n        let anchor = anchors[i].pathname.concat(anchors[i].search);\r\n        if (!window.location.search.includes(\"&\")) {\r\n            anchors[0].classList.add(\"active\");\r\n        }\r\n        if (anchor === current)\r\n            anchors[i].classList.add(\"active\");\r\n    }\r\n}\r\nfunction default_1() {\r\n    return true;\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./Source/components/tutorial/header/header.component.ts?");

/***/ }),

/***/ "./Source/tutorial.site.scss":
/*!***********************************!*\
  !*** ./Source/tutorial.site.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Source/tutorial.site.scss?");

/***/ }),

/***/ "./Source/tutorial.site.ts":
/*!*********************************!*\
  !*** ./Source/tutorial.site.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nif (undefined === \"devlopment\" && module.hot) {\r\n    module.hot.accept();\r\n}\r\nconst fontawesome_svg_core_1 = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\r\nconst faEdit_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEdit */ \"./node_modules/@fortawesome/free-solid-svg-icons/faEdit.js\");\r\nconst faSearch_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ \"./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js\");\r\nconst faUser_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ \"./node_modules/@fortawesome/free-solid-svg-icons/faUser.js\");\r\nconst faAngleRight_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAngleRight */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAngleRight.js\");\r\nfontawesome_svg_core_1.library.add(faEdit_1.faEdit, faSearch_1.faSearch, faUser_1.faUser, faAngleRight_1.faAngleRight);\r\nfontawesome_svg_core_1.dom.watch();\r\n__webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\r\nPromise.resolve().then(() => __importStar(__webpack_require__(/*! ./components/tutorial/header/header.component */ \"./Source/components/tutorial/header/header.component.ts\")));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./Source/tutorial.site.ts?");

/***/ }),

/***/ 1:
/*!*******************************************************************!*\
  !*** multi ./Source/tutorial.site.ts ./Source/tutorial.site.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./Source/tutorial.site.ts */\"./Source/tutorial.site.ts\");\nmodule.exports = __webpack_require__(/*! ./Source/tutorial.site.scss */\"./Source/tutorial.site.scss\");\n\n\n//# sourceURL=webpack:///multi_./Source/tutorial.site.ts_./Source/tutorial.site.scss?");

/***/ })

/******/ });