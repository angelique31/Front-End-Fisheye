/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/pagePhotographer/lightboxCard.js":
/*!********************************************************!*\
  !*** ./src/factories/pagePhotographer/lightboxCard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightboxCard\": () => (/* binding */ lightboxCard)\n/* harmony export */ });\nconst lightboxCard = (media) => {\r\n    const { video, image, title, id, photographerId } = media;\r\n    const picture = `assets/medias/${photographerId}/${image} `; \r\n    const videos = `assets/medias/${photographerId}/${video} `; \r\n\r\n    return `\r\n        ${video? `<video controls=\"controls\" id=${id}><source src=\"${videos}\" type=\"video/mp4\" title=\"video de ${title}\"></video>` \r\n        :\r\n        `<img src=\"${picture}\" tabindex=\"0\" alt=\"Photo de ${title}\" title=\"picture de ${title}\" id=${id}>` }\r\n        <h3 tabindex=\"0\">${title}</h3>`;\r\n};\n\n//# sourceURL=webpack://front-end-fisheye/./src/factories/pagePhotographer/lightboxCard.js?");

/***/ }),

/***/ "./src/factories/pagePhotographer/mediaFactoryCard.js":
/*!************************************************************!*\
  !*** ./src/factories/pagePhotographer/mediaFactoryCard.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mediaFactory\": () => (/* binding */ mediaFactory)\n/* harmony export */ });\n/**\r\n * Factory function (function data medias)\r\n * @param {*} data \r\n * @returns - getUserCardDOM,  getUserCardLightbox\r\n */\r\nfunction mediaFactory(data) {\r\n    const { id, photographerId, title, image, video, likes, date, price } = data;\r\n    \r\n    const picture = `assets/medias/${photographerId}/${image} `; \r\n    const videos = `assets/medias/${photographerId}/${video} `; \r\n\r\n    /**\r\n  Function card photographers 2nd page\r\n  * @returns \r\n  */\r\n    const getUserCardDOM = () => `\r\n        <article>\r\n            <div tabindex=\"0\" id=\"media-${id}\">\r\n                ${video? `<strong class=\"far fa-play-circle\"></strong><video><source src=\"${videos}\" type=\"video/mp4\" title=\"video de ${title}\" tabindex=\"0\"></video>` \r\n        :\r\n        `<img src=\"${picture}\" tabindex=\"0\" alt=\"Photo de ${title}\" title=\"picture de ${title}\" id=${id}>` }\r\n            </div>\r\n    \r\n            <div class=title-likes>\r\n                <h2 tabindex=\"0\">${title}</h2>\r\n                <span title=\"number of like picture\">${likes}</span>\r\n                <span class=like aria-label=\"likes\">\r\n                <strong class=\"fas fa-heart heart-fas\" tabindex=\"0\" aria-label=\"${likes}like\" aria-hidden=\"true\"></strong>\r\n                </span>\r\n            </div>\r\n        </article>`;\r\n\r\n    /**\r\n  * Function card lightbox\r\n  * @returns \r\n  */           \r\n    const getUserCardLightbox = () => `\r\n            <div class=\"slide_hide\">\r\n                ${video? `<video controls=\"controls\"><source src=\"${videos}\" type=\"video/mp4\" title=\"video de ${title}\"></video>` \r\n        :\r\n        `<img src=\"${picture}\" alt=\"Photo de ${title}\" tabindex=\"0\" title=\"picture de ${title}\" id=${id}>` }\r\n                <h3 tabindex=\"0\">${title}</h3>\r\n            </div>`;\r\n    return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM, getUserCardLightbox };\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/factories/pagePhotographer/mediaFactoryCard.js?");

/***/ }),

/***/ "./src/factories/pagePhotographer/photographerFactory.js":
/*!***************************************************************!*\
  !*** ./src/factories/pagePhotographer/photographerFactory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photographerFactory\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\n/**\r\n * Factory function (function data photographers)\r\n * @param {*} data \r\n * @returns - getUserCardDOM\r\n */\r\nfunction photographerFactory(data) {\r\n    const { name, id, portrait, city, country, tagline, price } = data;\r\n\r\n    const priceDay = document.querySelector('.price-day');\r\n    priceDay.innerHTML = `${price} €/jour`;\r\n\r\n    const contact = document.querySelector('.contact');\r\n    contact.innerHTML = `Contactez-moi ${name}`;\r\n\r\n    const formModal = document.querySelector('.modal');\r\n    formModal.ariaLabel = `Contactez-moi, ${name}`;\r\n\r\n    return { name, id, portrait, city, country, tagline, price};\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/factories/pagePhotographer/photographerFactory.js?");

/***/ }),

/***/ "./src/factories/pagePhotographer/photographerHeader.js":
/*!**************************************************************!*\
  !*** ./src/factories/pagePhotographer/photographerHeader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n* Function cards of the photographers 2nd page\r\n* @returns photographer card\r\n*/\r\n    \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((photographer) => {\r\n    const {name, portrait, city, country, tagline,} = photographer;\r\n    const picture = `assets/photographers/${portrait}`;\r\n\r\n    return `\r\n        <article>\r\n            <div class=info tabindex=\"2\">\r\n                <h1>${name}</h1>\r\n                <h2>${city}, ${country}</h2>\r\n                <p>${tagline}</p>\r\n            </div>\r\n                <img src=\"${picture}\" alt=\"${name}\">\r\n            </article>`;\r\n});\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/factories/pagePhotographer/photographerHeader.js?");

/***/ }),

/***/ "./src/pages/photographer.js":
/*!***********************************!*\
  !*** ./src/pages/photographer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMedia\": () => (/* binding */ displayMedia),\n/* harmony export */   \"initMedias\": () => (/* binding */ initMedias)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _factories_pagePhotographer_mediaFactoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/pagePhotographer/mediaFactoryCard */ \"./src/factories/pagePhotographer/mediaFactoryCard.js\");\n/* harmony import */ var _factories_pagePhotographer_photographerFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/pagePhotographer/photographerFactory */ \"./src/factories/pagePhotographer/photographerFactory.js\");\n/* harmony import */ var _factories_pagePhotographer_photographerHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/pagePhotographer/photographerHeader */ \"./src/factories/pagePhotographer/photographerHeader.js\");\n/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/form */ \"./src/scripts/form.js\");\n/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/lightbox */ \"./src/utils/lightbox.js\");\n/* harmony import */ var _utils_likes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/likes */ \"./src/utils/likes.js\");\n/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/sort */ \"./src/utils/sort.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Function display data photographers\r\n * @param {*} photographers \r\n */\r\nasync function displayData(photographers) {\r\n    const photographersSection = document.querySelector('.photograph-header');\r\n\r\n    photographers.forEach((photographer) => {\r\n        (0,_factories_pagePhotographer_photographerFactory__WEBPACK_IMPORTED_MODULE_2__.photographerFactory)(photographer);\r\n        const userCardDomHeader = (0,_factories_pagePhotographer_photographerHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) (photographer);\r\n        \r\n        photographersSection.insertAdjacentHTML('beforeEnd', userCardDomHeader);\r\n\r\n    });\r\n}\r\n\r\n/**\r\n * Data photographers\r\n */\r\nasync function init() {\r\n    const { photographers } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getPhotographers)();\r\n    \r\n    const idRequest = window.location.href.split('?')[1];\r\n    const photographer = await photographers.filter(photographer => photographer.id == idRequest);\r\n    \r\n    displayData(photographer);\r\n}\r\ninit();\r\n\r\n\r\n\r\n/*********************************************************/ \r\n\r\n/**\r\n * function to display medias data\r\n * @param {*} medias \r\n */\r\nasync function displayMedia(medias) {\r\n   \r\n    const photographersSection = document.querySelector('.galleryPhotos');\r\n    photographersSection.innerHTML='';\r\n    \r\n    let totalLikes = 0;\r\n    \r\n    medias.forEach((media) => {\r\n        const photographerModel = (0,_factories_pagePhotographer_mediaFactoryCard__WEBPACK_IMPORTED_MODULE_1__.mediaFactory)(media);\r\n        const userCardDOM = photographerModel.getUserCardDOM();\r\n        photographersSection.insertAdjacentHTML('beforeEnd', userCardDOM);\r\n\r\n        totalLikes += media.likes;\r\n        const  total_likes = document.querySelector('#total_likes');\r\n        total_likes.innerHTML = totalLikes;\r\n        \r\n        const { id } = media;\r\n        (0,_utils_lightbox__WEBPACK_IMPORTED_MODULE_5__.openLightbox)(`media-${id}`, medias);\r\n        \r\n    });\r\n    (0,_utils_likes__WEBPACK_IMPORTED_MODULE_6__.numberLikes)();\r\n}\r\n\r\n/**\r\n * Datas medias\r\n*/\r\nasync function initMedias() {\r\n    const  medias  = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getMedias)();\r\n   \r\n    const idRequest = window.location.href.split('?')[1];\r\n    const media =  await medias.filter(media => media.photographerId == idRequest);\r\n   \r\n\r\n    displayMedia(media);\r\n\r\n    _utils_sort__WEBPACK_IMPORTED_MODULE_7__.menuSelect.onchange = function () {\r\n        (0,_utils_sort__WEBPACK_IMPORTED_MODULE_7__.selectMedia)(media);\r\n    };\r\n}\r\ninitMedias();\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ (() => {

eval("const contactBtn = document.querySelector('.contact_button');\r\nconst closeBtn = document.querySelector('.close');\r\nconst modalbg = document.querySelector('#contact_modal');\r\nconst firstName = document.querySelector('#first');\r\n\r\n// \r\n/**\r\n * open modale\r\n */\r\nfunction launchModal() {\r\n    modalbg.style.display = 'block';\r\n    // modalbg.focus();\r\n    firstName.focus();\r\n    \r\n}\r\n\r\ncontactBtn.addEventListener('click', launchModal);\r\n\r\n// modalbg.addEventListener(\"keyup\", (e) => {\r\n//     switch (e.key) {\r\n//       case \"Tab\":\r\n//         firstName.focus();\r\n//         break;\r\n//     }\r\n//   });\r\n\r\n\r\n/**\r\n   * close modale\r\n   */\r\nfunction closeModal() {\r\n    modalbg.style.display = 'none';\r\n}\r\n  \r\ncloseBtn.addEventListener('click', closeModal);\r\n  \r\n\r\n/*********************************************** ***/\r\n\r\nconst form = document.querySelector('form');\r\nconst submitInput = form[form.length - 1];\r\nconst inputs = document.querySelectorAll(\r\n    '#first, #last, #email, #message'\r\n);\r\n\r\n\r\n/**\r\n * \r\n * @param {*} e - object event\r\n * @param {*} e.target.value - value input\r\n */\r\ninputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n        switch (e.target.id) {\r\n        case 'first':\r\n            firstChecker(e.target.value);\r\n            break;\r\n        case 'last':\r\n            lastChecker(e.target.value);\r\n            break;\r\n        case 'email':\r\n            emailChecker(e.target.value);\r\n            break;\r\n        case 'message':\r\n            messageChecker(e.target.value);\r\n            break;\r\n        default:\r\n            null;\r\n        }\r\n    });\r\n});\r\n\r\n\r\n/**\r\n * function firstname (first)\r\n * @param {*} value\r\n * @returns - true for the submit form\r\n */\r\nconst firstChecker = (value) => {\r\n    const firstContainer = document.querySelector('.first-container');\r\n    const errorDisplay = document.querySelector('.first-container > span');\r\n    let isValid = false;\r\n  \r\n    if (value.length < 2) {\r\n        firstContainer.classList.add('error');\r\n        errorDisplay.textContent =\r\n        'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';\r\n    } else {\r\n        errorDisplay.textContent = '';\r\n        isValid = true;\r\n    }\r\n    return isValid;\r\n};\r\n\r\n/**\r\n * function name (last)\r\n * @param {*} value\r\n * @returns - true for the submit form\r\n */\r\nconst lastChecker = (value) => {\r\n    const lastContainer = document.querySelector('.last-container');\r\n    const errorDisplay = document.querySelector('.last-container > span');\r\n    let isValid = false;\r\n  \r\n    if (value.length < 2) {\r\n        lastContainer.classList.add('error');\r\n        errorDisplay.textContent =\r\n        'Veuillez entrer 2 caractères ou plus pour le champ du nom.';\r\n    } else {\r\n        lastContainer.classList.remove('error');\r\n        errorDisplay.textContent = '';\r\n        isValid = true;\r\n    }\r\n    return isValid;\r\n};\r\n  \r\n/**\r\n   * function email\r\n   * @param {*} value\r\n   * @returns - true for the submit form\r\n   */\r\nconst emailChecker = (value) => {\r\n    const emailContainer = document.querySelector('.email-container');\r\n    const errorDisplay = document.querySelector('.email-container > span');\r\n    let isValid = false;\r\n  \r\n    if (!value.match(/^[\\w_-]+@[\\w-]+\\.[a-z]{2,4}$/i)) {\r\n        emailContainer.classList.add('error');\r\n        errorDisplay.textContent = 'Veuillez entrer une adresse mail valide.';\r\n    } else {\r\n        errorDisplay.textContent = '';\r\n        isValid = true;\r\n    }\r\n    return isValid;\r\n};\r\n\r\n/**\r\n * function firstname (first)\r\n * @param {*} value\r\n * @returns - true for the submit form\r\n */\r\nconst messageChecker = (value) => {\r\n    const firstContainer = document.querySelector('.message-container');\r\n    const errorDisplay = document.querySelector('.message-container > span');\r\n    let isValid = false;\r\n  \r\n    if (value.length < 10) {\r\n        firstContainer.classList.add('error');\r\n        errorDisplay.textContent =\r\n        'Veuillez entrer un message avec un minimum de 10 caractères.';\r\n    } else {\r\n        errorDisplay.textContent = '';\r\n        isValid = true;\r\n    }\r\n    return isValid;\r\n};\r\n\r\n/**\r\n * Verify form inputs before submission\r\n * @param {*} e - object event\r\n */\r\nconst onSubmit = (e) => {\r\n    e.preventDefault();\r\n  \r\n    /**\r\n     * Retrieve form input values\r\n     * @param {*} inputs - array: tags from query selector\r\n     * @returns - array: les data from query selector\r\n     */\r\n    const formValues = (inputs) => {\r\n        let data = [];\r\n    \r\n        for (let i = 0; i < inputs.length; i++) {\r\n            if (\r\n                inputs[i].type === 'text' ||\r\n                inputs[i].type === 'email' ||\r\n                inputs[i].type === 'textarea'\r\n            ) {\r\n                data.push(inputs[i].value);\r\n                \r\n            }\r\n        }\r\n        return data;\r\n    };\r\n  \r\n    /**\r\n     * Retrieve form input values\r\n     * @param {*} values - array: data from query selector\r\n     * @returns - boolean: true if valid\r\n     */\r\n    const formIsValid = (values) => {\r\n        /**\r\n       * Tests the validity of each input\r\n       * @type boolean\r\n       */\r\n        let validInputs = [];\r\n       \r\n        validInputs.push(firstChecker(values[0]));\r\n        validInputs.push(lastChecker(values[1]));\r\n        validInputs.push(emailChecker(values[2]));\r\n        validInputs.push(messageChecker(values[3]));\r\n        \r\n        let isValid = true;\r\n  \r\n        for (let i = 0; i < validInputs.length; i++) {\r\n            if (validInputs[i] === false) {\r\n                isValid = false;\r\n                break;\r\n            }\r\n        }\r\n        return isValid;\r\n    };\r\n    \r\n    /**\r\n    * If valid\r\n    */\r\n    if (formIsValid(formValues(inputs))) {\r\n        closeModal();\r\n        console.table (formValues(inputs));\r\n        form.querySelectorAll('.text-control').forEach(input => input.value = '');\r\n        \r\n    } else {\r\n        launchModal();\r\n    }\r\n};\r\n\r\nsubmitInput.addEventListener('click', (e) => onSubmit(e));\r\n  \r\n\r\n/**\r\n * Close modale form with Escape\r\n */\r\nwindow.addEventListener('keyup', (e) => {\r\n    closeModalKey(e);\r\n    // if (e.key === 'Tab') {\r\n    //     if (document.activeElement === closeBtn) modalbg.focus();\r\n    // }\r\n});\r\n  \r\nfunction closeModalKey(e) {\r\n    if ((modalbg.style.display =  true && e.key === 'Escape')) {\r\n        closeModal();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/form.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMedias\": () => (/* binding */ getMedias),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// const url = 'https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye/blob/main/data/photographers.json';\r\n\r\n/**\r\n * Function to retrieve data from photographers\r\n * @returns data photographers\r\n */\r\nasync function getPhotographers() {\r\n    return fetch('data/photographers.json' , {mode: 'cors'})\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            return datas;\r\n        }); \r\n\r\n}\r\n\r\n/**\r\n * Function to retrieve data from medias\r\n * @returns data media\r\n */\r\nasync function getMedias() {\r\n    return fetch ('data/photographers.json' , {mode: 'cors'})\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            return datas.media;\r\n        }); \r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/api.js?");

/***/ }),

/***/ "./src/utils/lightbox.js":
/*!*******************************!*\
  !*** ./src/utils/lightbox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openLightbox\": () => (/* binding */ openLightbox)\n/* harmony export */ });\n/* harmony import */ var _factories_pagePhotographer_mediaFactoryCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/pagePhotographer/mediaFactoryCard */ \"./src/factories/pagePhotographer/mediaFactoryCard.js\");\n/* harmony import */ var _navLightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navLightbox */ \"./src/utils/navLightbox.js\");\n\r\n\r\n\r\nconst lightboxClose = document.querySelector('.lightbox_close');\r\nconst lightboxContainer = document.querySelector('.lightbox_container');\r\nconst lightbox = document.getElementById('contact_lightbox');\r\n\r\n/**\r\n * Open modale\r\n */\r\nfunction openModal() {\r\n    const lightbox = document.getElementById('contact_lightbox');\r\n\r\n    if (lightbox) {\r\n        lightbox.style.display = 'block'; \r\n    }\r\n    lightbox.focus();\r\n}\r\n\r\n/**\r\n * Close modal\r\n */\r\nfunction closeModal() {\r\n    lightbox.style.display = 'none';\r\n    const lightboxContainer = document.querySelector('.lightbox_container');\r\n    lightboxContainer.innerHTML = '';\r\n}\r\n\r\n/**\r\n * Remove lightbox listeners before closing the modal\r\n */\r\nfunction closeLightbox() {\r\n    const buttons = (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.getNavLightbox)();\r\n\r\n    if (buttons.nextButton && buttons.prevButton) {\r\n        buttons.nextButton.replaceWith(buttons.nextButton.cloneNode(true));\r\n        buttons.prevButton.replaceWith(buttons.prevButton.cloneNode(true));\r\n    }\r\n    closeModal();\r\n}  \r\n\r\n/**\r\n * Add lightbox listeners when opening the modal\r\n * @param {array} medias \r\n */\r\nfunction addNavLightbox(medias) {\r\n    const buttons = (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.getNavLightbox)();\r\n\r\n    if (buttons.nextButton && buttons.prevButton) {\r\n        buttons.nextButton.addEventListener('click', () => { (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.navNext)(medias);});\r\n        buttons.prevButton.addEventListener('click', () => { (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.navPrev)(medias);});\r\n    }\r\n\r\n    document.addEventListener('keydown', (e) =>{\r\n        let nav;\r\n        \r\n        switch(e.key)\r\n        {\r\n        case 'ArrowLeft' :\r\n            nav =  (medias) => { (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.navPrev)(medias);};\r\n            break; \r\n        case 'ArrowRight': \r\n            nav = (medias) => { (0,_navLightbox__WEBPACK_IMPORTED_MODULE_1__.navNext)(medias);};\r\n            break;\r\n        }\r\n        if (nav) {\r\n            nav(medias);\r\n        }\r\n        \r\n    });\r\n}\r\n\r\n\r\n\r\n/**\r\n * Open the lightbox\r\n * First open the modal then insert the media\r\n * Then add the listeners \r\n * @param {unknown} id \r\n * @param {array} medias \r\n */\r\nfunction openLightbox(id, medias) {\r\n    const component = document.getElementById(id);\r\n    \r\n    const displayLightBox = () => {        \r\n        const idRequest = window.location.href.split('?')[1];\r\n        const mediaArray = component.id.split('-');\r\n        const id = mediaArray[1];\r\n        \r\n        const filterMedia = medias.filter(media => `${media.photographerId}` === idRequest);\r\n    \r\n        let mediaSelected = 0;\r\n        for (let i = 0; i < filterMedia.length; i++) {\r\n            if (id === `${filterMedia[i].id}`) {\r\n                mediaSelected = i;\r\n                break;\r\n            }\r\n        }\r\n        \r\n\r\n        const photographerModel = (0,_factories_pagePhotographer_mediaFactoryCard__WEBPACK_IMPORTED_MODULE_0__.mediaFactory)(medias[mediaSelected]);\r\n        const userCardLightbox = photographerModel.getUserCardLightbox();\r\n        lightboxContainer.insertAdjacentHTML('afterbegin', userCardLightbox);\r\n        \r\n        openModal();\r\n        addNavLightbox(medias, mediaSelected);\r\n        lightboxClose.addEventListener('click', closeLightbox);\r\n    }; \r\n\r\n    const displayByKeydown = (e) => {\r\n        if (e.key === 'Enter') {\r\n            displayLightBox();\r\n        }\r\n    };\r\n\r\n    if (component) {\r\n        component.addEventListener('click', displayLightBox);\r\n        component.addEventListener('keydown', ((e) =>{displayByKeydown(e);}));\r\n    }\r\n}\r\n\r\n\r\n\r\n/**\r\n * KeyboardEvent closeModale\r\n */\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n    closeModalKey(e);\r\n});\r\n\r\n  \r\nfunction closeModalKey(e) {\r\n    if ((lightbox.style.display =  true && e.key === 'Escape')) {\r\n        closeLightbox();\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/lightbox.js?");

/***/ }),

/***/ "./src/utils/likes.js":
/*!****************************!*\
  !*** ./src/utils/likes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberLikes\": () => (/* binding */ numberLikes)\n/* harmony export */ });\n/* eslint-disable no-undef */\r\nfunction numberLikes() {\r\n    const likes = document.querySelectorAll('.like'); \r\n\r\n    likes.forEach((e) => {\r\n        e.addEventListener('click', function () {\r\n            const numberLike = e.parentElement.children[1];\r\n            \r\n            if (numberLike.classList.contains('liked')) { \r\n                numberLike.textContent--;\r\n                numberLike.classList.remove('liked');\r\n                total_likes.textContent--;\r\n            } else {\r\n                numberLike.textContent++; \r\n                numberLike.classList.add('liked');\r\n                total_likes.textContent++;\r\n            }\r\n        });\r\n    });\r\n\r\n    /**\r\n     * Keybord event\r\n     */\r\n    likes.forEach((e) => {\r\n        e.addEventListener('keypress', function () {\r\n            const numberLike = e.parentElement.children[1];\r\n            if (numberLike.classList.contains('liked')) { \r\n                numberLike.textContent--;\r\n                numberLike.classList.remove('liked');\r\n                total_likes.textContent--;\r\n            } else {\r\n                numberLike.textContent++; \r\n                numberLike.classList.add('liked');\r\n                total_likes.textContent++;\r\n            } \r\n           \r\n        });\r\n    });\r\n}\r\n\r\n\r\n   \r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/likes.js?");

/***/ }),

/***/ "./src/utils/navLightbox.js":
/*!**********************************!*\
  !*** ./src/utils/navLightbox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNavLightbox\": () => (/* binding */ getNavLightbox),\n/* harmony export */   \"navNext\": () => (/* binding */ navNext),\n/* harmony export */   \"navPrev\": () => (/* binding */ navPrev)\n/* harmony export */ });\n/* harmony import */ var _factories_pagePhotographer_lightboxCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/pagePhotographer/lightboxCard */ \"./src/factories/pagePhotographer/lightboxCard.js\");\n/* eslint-disable quotes */\r\n\r\n\r\n/**\r\n * Retrieves the position of the current image\r\n * @param {array} medias \r\n * @returns - integer\r\n */\r\nconst getPosition = (medias) => {\r\n    const lightbox = document.getElementsByClassName('slide_hide')[0];\r\n    const currentId = lightbox.children[0].id;\r\n    \r\n    let mediaSelected = 0;\r\n    for (let i = 0; i < medias.length; i++) {\r\n        if (`${currentId}` === `${medias[i].id}`) {\r\n            mediaSelected = i;\r\n            break;\r\n        }\r\n        \r\n    }\r\n    return mediaSelected;\r\n};\r\n\r\n/**\r\n * Update the lightbox DOM\r\n * @param {string} card \r\n */\r\nconst updateLightbox = (card) => {\r\n    const lightbox = document.getElementsByClassName('slide_hide')[0];\r\n    lightbox.innerHTML = card;\r\n};\r\n\r\n/**\r\n * Returns the html tags of the lightbox navigation buttons\r\n * @returns - object of html element\r\n */\r\nconst getNavLightbox = () => {\r\n    const nextButton = document.getElementsByClassName('lightbox_next')[0];\r\n    const prevButton = document.getElementsByClassName('lightbox_prev')[0];\r\n\r\n    return { nextButton, prevButton };\r\n};\r\n\r\n\r\n/**\r\n * update to next media\r\n * @param {array} medias \r\n */\r\nconst navNext = (medias) => {\r\n    let count = getPosition(medias);\r\n\r\n    if (count < medias.length - 1) {\r\n        count++;\r\n\r\n    } else {\r\n        count = 0;\r\n    }\r\n    updateLightbox((0,_factories_pagePhotographer_lightboxCard__WEBPACK_IMPORTED_MODULE_0__.lightboxCard)(medias[count]));\r\n    \r\n};\r\n\r\n/**\r\n * update to previous media\r\n * @param {array} medias \r\n */\r\nconst navPrev = (medias) => {\r\n    let count = getPosition(medias);\r\n\r\n    if (count > 0) {\r\n        count--;\r\n    } else {\r\n        count = medias.length - 1;\r\n    }\r\n    updateLightbox((0,_factories_pagePhotographer_lightboxCard__WEBPACK_IMPORTED_MODULE_0__.lightboxCard)(medias[count]));\r\n};\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/navLightbox.js?");

/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuSelect\": () => (/* binding */ menuSelect),\n/* harmony export */   \"selectMedia\": () => (/* binding */ selectMedia)\n/* harmony export */ });\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/photographer */ \"./src/pages/photographer.js\");\n\r\nconst menuSelect = document.querySelector('.menuSelect');\r\n\r\nconst sorted = document.querySelector('#sorted');\r\nsorted.addEventListener('click',() => {\r\n    sorted.classList.toggle('actived');\r\n});\r\n\r\nfunction selectMedia(media){\r\n    let newArrMedia;\r\n    switch (menuSelect.value) {\r\n    case 'pop':\r\n        newArrMedia = media.sort((a, b) => {\r\n            return b.likes - a.likes;\r\n        });\r\n        (0,_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.displayMedia)(newArrMedia);\r\n        break;\r\n         \r\n    case 'date':\r\n        newArrMedia = media.sort((a, b) =>{\r\n            return new Date(b.date) - new Date(a.date);\r\n        });\r\n        (0,_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.displayMedia)(newArrMedia);\r\n        break;\r\n    \r\n    case 'titre':\r\n        newArrMedia = media.sort((a, b) => {\r\n            return a.title.localeCompare(b.title);\r\n        });\r\n        (0,_pages_photographer__WEBPACK_IMPORTED_MODULE_0__.displayMedia)(newArrMedia);\r\n        break;\r\n    default:\r\n        null;\r\n    }    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/utils/sort.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/photographer.js");
/******/ 	
/******/ })()
;