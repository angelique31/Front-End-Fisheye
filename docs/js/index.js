/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/homePhotographer.js":
/*!*******************************************!*\
  !*** ./src/factories/homePhotographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n* Function of the creation of the cards of the photographers 1st page\r\n* @returns photographer card\r\n*/\r\n    \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((photographer) => {\r\n    const {name, id, portrait, city, country, tagline, price } = photographer;\r\n    const picture = `assets/photographers/${portrait}`;\r\n\r\n    return `\r\n    <article>\r\n        <a href= \"photographer.html?${id}\">\r\n            <img src=\"${picture}\" alt=\"${name}\" title=\"picture de photographer\">\r\n            <h2>${name}</h2>\r\n        </a>\r\n        <div class=info tabindex=\"0\" >\r\n            <h3>${city}, ${country}</h3>\r\n            <p>${tagline}</p>\r\n            <span>${price}€/jour</span>\r\n        </div>\r\n    </article>`;\r\n});\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/factories/homePhotographer.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _factories_homePhotographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/homePhotographer */ \"./src/factories/homePhotographer.js\");\n\r\n\r\n\r\n/**\r\n * Function display data photographers\r\n * @param {*} photographers \r\n */\r\nasync function displayData(photographers) {\r\n    const photographersSection = document.querySelector('.photographer_section');\r\n\r\n    photographers.forEach((photographer) => {\r\n        const userCardDOM = (0,_factories_homePhotographer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) (photographer);\r\n        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);\r\n    });\r\n}\r\n\r\n/**\r\n * Data photographers\r\n */\r\nasync function init() {\r\n    const { photographers } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getPhotographers)();\r\n   \r\n    displayData(photographers);\r\n}\r\ninit();\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMedias\": () => (/* binding */ getMedias),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// const url = 'https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye/blob/main/data/photographers.json';\r\n\r\n/**\r\n * Function to retrieve data from photographers\r\n * @returns data photographers\r\n */\r\nasync function getPhotographers() {\r\n    return fetch('data/photographers.json' , {mode: 'cors'})\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            return datas;\r\n        }); \r\n\r\n}\r\n\r\n/**\r\n * Function to retrieve data from medias\r\n * @returns data media\r\n */\r\nasync function getMedias() {\r\n    return fetch ('data/photographers.json' , {mode: 'cors'})\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            return datas.media;\r\n        }); \r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;