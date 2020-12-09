/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Source/pages/tutorial/detail.page.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/components/tutorial/aside/aside.component.ts":
/*!*************************************************************!*\
  !*** ./Source/components/tutorial/aside/aside.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActiveTutorialLink = void 0;\r\nclass ActiveTutorialLink {\r\n    constructor() {\r\n        this.prevAnchor = document.createElement('a');\r\n    }\r\n    activeAnchorLink(anchor) {\r\n        if (this.prevAnchor.classList.contains(\"active\"))\r\n            this.prevAnchor.classList.remove(\"active\");\r\n        anchor.classList.add(\"active\");\r\n        this.prevAnchor = anchor;\r\n    }\r\n}\r\nexports.ActiveTutorialLink = ActiveTutorialLink;\r\n\n\n//# sourceURL=webpack:///./Source/components/tutorial/aside/aside.component.ts?");

/***/ }),

/***/ "./Source/helper/AjaxHelper.ts":
/*!*************************************!*\
  !*** ./Source/helper/AjaxHelper.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ApiClient = exports.TutorialUI = exports.TutorialApiClient = void 0;\r\nclass TutorialApiClient {\r\n    constructor(baseUrl) {\r\n        this.baseUrl = baseUrl;\r\n    }\r\n    callWebApi(url, verb, data, callback) {\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.onload = function () {\r\n            let data = JSON.parse(xhr.responseText);\r\n            callback(data);\r\n        };\r\n        xhr.onerror = function () {\r\n            alert(\"Error messege\");\r\n        };\r\n        let httpVerb;\r\n        switch (verb) {\r\n            case HttpVerbs.GET:\r\n                httpVerb = \"GET\";\r\n                break;\r\n            case HttpVerbs.POST:\r\n                httpVerb = \"POST\";\r\n                break;\r\n            case HttpVerbs.PUT:\r\n                httpVerb = \"PUT\";\r\n                break;\r\n            case HttpVerbs.DELETE:\r\n                httpVerb = \"DELETE\";\r\n                break;\r\n        }\r\n        xhr.open(httpVerb, url);\r\n        xhr.setRequestHeader(\"Content-Type\", \"application/json\");\r\n        if (data == null) {\r\n            xhr.send();\r\n        }\r\n        else {\r\n            xhr.send(JSON.stringify(data));\r\n        }\r\n    }\r\n    getById(id, callback) {\r\n        this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);\r\n    }\r\n}\r\nexports.TutorialApiClient = TutorialApiClient;\r\nclass TutorialUI {\r\n    getByIdCallback(data) {\r\n        alert(data.htmlContent);\r\n    }\r\n}\r\nexports.TutorialUI = TutorialUI;\r\nclass ApiClient {\r\n    constructor(baseUrl) {\r\n        this.baseUrl = baseUrl;\r\n    }\r\n    requestOptions(data, verb) {\r\n        let initObject;\r\n        let httpVerb;\r\n        switch (verb) {\r\n            case HttpVerbs.GET:\r\n                httpVerb = \"GET\";\r\n                break;\r\n            case HttpVerbs.POST:\r\n                httpVerb = \"POST\";\r\n                break;\r\n            case HttpVerbs.PUT:\r\n                httpVerb = \"PUT\";\r\n                break;\r\n            case HttpVerbs.DELETE:\r\n                httpVerb = \"DELETE\";\r\n                break;\r\n        }\r\n        let requestHeader = new Headers();\r\n        requestHeader.append(\"Content-Type\", \"application/json\");\r\n        if (data != null) {\r\n            initObject = {\r\n                method: httpVerb,\r\n                headers: requestHeader,\r\n                body: JSON.stringify(data)\r\n            };\r\n        }\r\n        else {\r\n            initObject = {\r\n                method: httpVerb,\r\n                headers: requestHeader\r\n            };\r\n        }\r\n        return initObject;\r\n    }\r\n    callWebApi(url, verb, data, callback) {\r\n        let initObject = this.requestOptions(data, verb);\r\n        fetch(url, initObject)\r\n            .then((response) => {\r\n            return response.json();\r\n        })\r\n            .then((json) => {\r\n            callback(json);\r\n        })\r\n            .catch((error) => {\r\n            console.log(error);\r\n        });\r\n    }\r\n    getById(id, callback) {\r\n        this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);\r\n    }\r\n}\r\nexports.ApiClient = ApiClient;\r\nvar HttpVerbs;\r\n(function (HttpVerbs) {\r\n    HttpVerbs[HttpVerbs[\"GET\"] = 0] = \"GET\";\r\n    HttpVerbs[HttpVerbs[\"POST\"] = 1] = \"POST\";\r\n    HttpVerbs[HttpVerbs[\"PUT\"] = 2] = \"PUT\";\r\n    HttpVerbs[HttpVerbs[\"DELETE\"] = 3] = \"DELETE\";\r\n})(HttpVerbs || (HttpVerbs = {}));\r\n\n\n//# sourceURL=webpack:///./Source/helper/AjaxHelper.ts?");

/***/ }),

/***/ "./Source/pages/tutorial/detail.page.ts":
/*!**********************************************!*\
  !*** ./Source/pages/tutorial/detail.page.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst AjaxHelper_1 = __webpack_require__(/*! ../../helper/AjaxHelper */ \"./Source/helper/AjaxHelper.ts\");\r\nconst aside_component_1 = __webpack_require__(/*! ../../components/tutorial/aside/aside.component */ \"./Source/components/tutorial/aside/aside.component.ts\");\r\nconst titleArticle = document.getElementById(\"title-article\");\r\nconst contentArticle = document.getElementById(\"content-article\");\r\nconst tutorialLink = document.querySelectorAll(\"[property=tutorial-link]\");\r\nconst activeLinks = new aside_component_1.ActiveTutorialLink();\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    if (tutorialLink.length > 0) {\r\n        let anchorUrl = regexUrl(tutorialLink[0].pathname);\r\n        getArticle(anchorUrl.id, anchorUrl.baseUrl);\r\n        activeLinks.activeAnchorLink(tutorialLink[0]);\r\n    }\r\n});\r\ntutorialLink.forEach(i => {\r\n    i.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n        let anchorUrl = regexUrl(i.pathname);\r\n        getArticle(anchorUrl.id, anchorUrl.baseUrl);\r\n        activeLinks.activeAnchorLink(i);\r\n    });\r\n});\r\n//let data = {\r\n//    id: 0,\r\n//    title: \"\",\r\n//    htmlContent: \"\"\r\n//};\r\nfunction getArticle(id, url) {\r\n    titleArticle.innerText = \"\";\r\n    contentArticle.innerHTML = \"\";\r\n    let data = {};\r\n    let ajax = new AjaxHelper_1.ApiClient(url);\r\n    showHideSpinner(true);\r\n    ajax.getById(id, (result) => {\r\n        data = result;\r\n        showHideSpinner(false);\r\n        titleArticle.innerText = data.title;\r\n        contentArticle.innerHTML = data.htmlContent;\r\n    });\r\n}\r\nfunction regexUrl(url) {\r\n    let toReturn = {};\r\n    let link = url.split('/');\r\n    let id = parseInt(link[3]);\r\n    toReturn.id = id;\r\n    toReturn.baseUrl = `/${link[1]}/${link[2]}`;\r\n    return toReturn;\r\n}\r\n;\r\nfunction showHideSpinner(isShow) {\r\n    const spinner = document.getElementById(\"spinner\");\r\n    if (isShow) {\r\n        spinner.removeAttribute('hidden');\r\n    }\r\n    else {\r\n        spinner.setAttribute('hidden', '');\r\n    }\r\n}\r\nfunction default_1() {\r\n    return true;\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./Source/pages/tutorial/detail.page.ts?");

/***/ })

/******/ });