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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/components/main/header-nav/header.component.ts":
/*!***************************************************************!*\
  !*** ./Source/components/main/header-nav/header.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst toggle = document.getElementById(\"toggleCheckbox\");\r\nconst anchors = document.querySelectorAll(\".dropdown-link\");\r\nif (anchors)\r\n    anchors.forEach(anchor => {\r\n        anchor.addEventListener('click', () => {\r\n            anchor.parentElement.classList.toggle('active');\r\n        });\r\n    });\r\nif (toggle)\r\n    toggle.addEventListener(\"click\", () => {\r\n        toggle.classList.toggle(\"checked\");\r\n    });\r\nfunction default_1() {\r\n    return true;\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./Source/components/main/header-nav/header.component.ts?");

/***/ }),

/***/ "./Source/main.site.scss":
/*!*******************************!*\
  !*** ./Source/main.site.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Source/main.site.scss?");

/***/ }),

/***/ "./Source/main.site.ts":
/*!*****************************!*\
  !*** ./Source/main.site.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nif (undefined === \"devlopment\" && module.hot) {\r\n    module.hot.accept();\r\n}\r\nconst fontawesome_svg_core_1 = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\r\nconst faEdit_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEdit */ \"./node_modules/@fortawesome/free-solid-svg-icons/faEdit.js\");\r\nconst faSearch_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ \"./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js\");\r\nconst faUser_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ \"./node_modules/@fortawesome/free-solid-svg-icons/faUser.js\");\r\nconst faAngleRight_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAngleRight */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAngleRight.js\");\r\nconst faAlignLeft_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignLeft */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAlignLeft.js\");\r\nconst faAlignCenter_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignCenter */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAlignCenter.js\");\r\nconst faAlignRight_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignRight */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAlignRight.js\");\r\nconst faAlignJustify_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAlignJustify */ \"./node_modules/@fortawesome/free-solid-svg-icons/faAlignJustify.js\");\r\nconst faBold_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBold */ \"./node_modules/@fortawesome/free-solid-svg-icons/faBold.js\");\r\nconst faItalic_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faItalic */ \"./node_modules/@fortawesome/free-solid-svg-icons/faItalic.js\");\r\nconst faUnderline_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUnderline */ \"./node_modules/@fortawesome/free-solid-svg-icons/faUnderline.js\");\r\nconst faListOl_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faListOl */ \"./node_modules/@fortawesome/free-solid-svg-icons/faListOl.js\");\r\nconst faListUl_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faListUl */ \"./node_modules/@fortawesome/free-solid-svg-icons/faListUl.js\");\r\nconst faLink_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ \"./node_modules/@fortawesome/free-solid-svg-icons/faLink.js\");\r\nconst faImage_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faImage */ \"./node_modules/@fortawesome/free-solid-svg-icons/faImage.js\");\r\nconst faStrikethrough_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faStrikethrough */ \"./node_modules/@fortawesome/free-solid-svg-icons/faStrikethrough.js\");\r\nconst faRemoveFormat_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faRemoveFormat */ \"./node_modules/@fortawesome/free-solid-svg-icons/faRemoveFormat.js\");\r\nconst faComment_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faComment */ \"./node_modules/@fortawesome/free-solid-svg-icons/faComment.js\");\r\nconst faChevronRight_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronRight */ \"./node_modules/@fortawesome/free-solid-svg-icons/faChevronRight.js\");\r\nconst faChevronLeft_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronLeft */ \"./node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js\");\r\nfontawesome_svg_core_1.library.add(faEdit_1.faEdit, faSearch_1.faSearch, faUser_1.faUser, faAngleRight_1.faAngleRight, faAlignLeft_1.faAlignLeft, faAlignCenter_1.faAlignCenter, faAlignRight_1.faAlignRight, faAlignJustify_1.faAlignJustify, faBold_1.faBold, faItalic_1.faItalic, faUnderline_1.faUnderline, faListOl_1.faListOl, faListUl_1.faListUl, faLink_1.faLink, faImage_1.faImage, faStrikethrough_1.faStrikethrough, faRemoveFormat_1.faRemoveFormat, faComment_1.faComment, faChevronRight_1.faChevronRight, faChevronLeft_1.faChevronLeft);\r\nfontawesome_svg_core_1.dom.watch();\r\n__webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\r\nPromise.resolve().then(() => __importStar(__webpack_require__(/*! ./pages/login-partial/login.partial */ \"./Source/pages/login-partial/login.partial.ts\")));\r\nPromise.resolve().then(() => __importStar(__webpack_require__(/*! ./components/main/header-nav/header.component */ \"./Source/components/main/header-nav/header.component.ts\")));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./Source/main.site.ts?");

/***/ }),

/***/ "./Source/pages/login-partial/login.partial.ts":
/*!*****************************************************!*\
  !*** ./Source/pages/login-partial/login.partial.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst loginButton = document.getElementById(\"auth-button\");\r\nconst loggedButton = document.getElementById(\"logged-button\");\r\nlet isActiveLogin = false;\r\nlet isActiveLogged = false;\r\nif (loginButton)\r\n    loginButton.addEventListener(\"click\", () => {\r\n        isActiveLogin = loginButton.classList.toggle(\"active\");\r\n    });\r\nif (loggedButton)\r\n    loggedButton.addEventListener(\"click\", () => {\r\n        isActiveLogged = loggedButton.classList.toggle(\"active\");\r\n        loggedButton.parentElement.classList.toggle(\"active\");\r\n    });\r\ndocument.addEventListener(\"click\", (e) => {\r\n    if (isActiveLogged)\r\n        loggedBlur(e);\r\n    else if (isActiveLogin)\r\n        loginBlur(e);\r\n});\r\nfunction loggedBlur(e) {\r\n    const loggedOption = document.getElementById(\"logged-options\");\r\n    let clickInside = false;\r\n    if (loggedButton && loggedOption) {\r\n        clickInside = loggedButton.contains(e.target);\r\n        for (let child of loggedButton.childNodes) {\r\n            if (clickInside)\r\n                break;\r\n            clickInside = child.contains(e.target);\r\n        }\r\n        for (let child of loggedOption.childNodes) {\r\n            if (clickInside)\r\n                break;\r\n            clickInside = child.contains(e.target);\r\n        }\r\n        if (!clickInside) {\r\n            loggedButton.classList.remove(\"active\");\r\n            loggedButton.parentElement.classList.remove(\"active\");\r\n            isActiveLogged = !isActiveLogged;\r\n        }\r\n    }\r\n}\r\nfunction loginBlur(e) {\r\n    const authPopup = document.getElementById(\"auth-popup\");\r\n    let clickInside = false;\r\n    if (loginButton && authPopup) {\r\n        clickInside = loginButton.contains(e.target);\r\n        for (let child of loginButton.childNodes) {\r\n            if (clickInside)\r\n                break;\r\n            clickInside = child.contains(e.target);\r\n        }\r\n        for (let child of authPopup.childNodes) {\r\n            if (clickInside)\r\n                break;\r\n            clickInside = child.contains(e.target);\r\n        }\r\n        if (!clickInside) {\r\n            loginButton.classList.remove(\"active\");\r\n            loginButton.parentElement.classList.remove(\"active\");\r\n            isActiveLogin = !isActiveLogin;\r\n        }\r\n    }\r\n}\r\nfunction default_1() {\r\n    return true;\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./Source/pages/login-partial/login.partial.ts?");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./Source/main.site.ts ./Source/main.site.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./Source/main.site.ts */\"./Source/main.site.ts\");\nmodule.exports = __webpack_require__(/*! ./Source/main.site.scss */\"./Source/main.site.scss\");\n\n\n//# sourceURL=webpack:///multi_./Source/main.site.ts_./Source/main.site.scss?");

/***/ })

/******/ });