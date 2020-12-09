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
/******/ 		"account": 0
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
/******/ 	deferredModules.push([3,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/account.site.scss":
/*!**********************************!*\
  !*** ./Source/account.site.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Source/account.site.scss?");

/***/ }),

/***/ "./Source/account.site.ts":
/*!********************************!*\
  !*** ./Source/account.site.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nif (false) {}\r\nconst fontawesome_svg_core_1 = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\r\nconst faUser_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ \"./node_modules/@fortawesome/free-solid-svg-icons/faUser.js\");\r\n//import { } from \"@fortawesome/free-solid-svg-icons/\"\r\nfontawesome_svg_core_1.library.add(faUser_1.faUser);\r\nfontawesome_svg_core_1.dom.watch();\r\n__webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\r\nPromise.resolve().then(() => __importStar(__webpack_require__(/*! ./pages/account/account.page */ \"./Source/pages/account/account.page.ts\")));\r\n\n\n//# sourceURL=webpack:///./Source/account.site.ts?");

/***/ }),

/***/ "./Source/pages/account/account.page.ts":
/*!**********************************************!*\
  !*** ./Source/pages/account/account.page.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst labels = document.querySelectorAll('.star-lbl');\r\nconst inputs = document.querySelectorAll('.star-cont');\r\nconst spanValidates = document.querySelectorAll('[data-valmsg-for]');\r\nlet regex_presets = {\r\n    letters: /^[a-zA-Z]*$/,\r\n    name: /^[a-zA-Z \\-']*$/,\r\n    username: /^[a-zA-Z0-9_\\.!?-]*$/,\r\n    numbers: /^[0-9]*$/,\r\n    phone: /^[0-9 \\-+]*$/,\r\n    date: /^\\d{4}-\\d{2}-\\d{2}$/,\r\n    email: /[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/\r\n    // email regex was taken from this resource: http://www.regular-expressions.info/email.html\r\n    // it is a simplified implementation of the RFC 5322 syntax standard\r\n};\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    if (inputs.length > 0)\r\n        inputs.forEach(input => {\r\n            if (input.value)\r\n                findLabelForInput(true, input.id);\r\n        });\r\n});\r\ninputs.forEach(input => {\r\n    input.addEventListener('focus', () => {\r\n        findLabelForInput(true, input.id);\r\n    });\r\n    input.addEventListener('blur', () => {\r\n        if (input.value === null || input.value === \"\")\r\n            findLabelForInput(false, input.id);\r\n    });\r\n    input.addEventListener('keydown', () => {\r\n        doValidate(input);\r\n    });\r\n});\r\nfunction findLabelForInput(isActive, inputId) {\r\n    labels.forEach(lable => {\r\n        if (lable.htmlFor === inputId) {\r\n            if (isActive)\r\n                lable.classList.add('active');\r\n            else\r\n                lable.classList.remove('active');\r\n        }\r\n    });\r\n}\r\nfunction doValidate(element) {\r\n    if (element.type === 'email') {\r\n        if (!regex_presets.email.test(element.value)) {\r\n            element.parentElement.classList.add('invalid');\r\n            element.previousElementSibling.classList.add('invalid');\r\n        }\r\n        else {\r\n            element.parentElement.classList.remove('invalid');\r\n            element.previousElementSibling.classList.remove('invalid');\r\n        }\r\n    }\r\n    else if (element.type === 'password') {\r\n        if (element.value.length < 5) {\r\n            element.parentElement.classList.add('invalid');\r\n            element.previousElementSibling.classList.add('invalid');\r\n        }\r\n        else {\r\n            element.parentElement.classList.remove('invalid');\r\n            element.previousElementSibling.classList.remove('invalid');\r\n        }\r\n    }\r\n}\r\nfunction default_1() {\r\n    return true;\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./Source/pages/account/account.page.ts?");

/***/ }),

/***/ 3:
/*!*****************************************************************!*\
  !*** multi ./Source/account.site.ts ./Source/account.site.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./Source/account.site.ts */\"./Source/account.site.ts\");\nmodule.exports = __webpack_require__(/*! ./Source/account.site.scss */\"./Source/account.site.scss\");\n\n\n//# sourceURL=webpack:///multi_./Source/account.site.ts_./Source/account.site.scss?");

/***/ })

/******/ });