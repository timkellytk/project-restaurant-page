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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generateContact.js":
/*!********************************!*\
  !*** ./src/generateContact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction generateContact() {\n    const content = document.querySelector('#content')\n\n    const section = document.createElement('div')\n    section.classList.add('content-box')\n\n    const h1 = document.createElement('h1')\n    h1.textContent = 'Get in touch'\n    section.appendChild(h1)\n\n    const contactItem = (name, link, anchorText) => {\n        const div = document.createElement('div')\n        div.classList.add('contact-items')\n        div.textContent = `${name}:`\n\n        const a = document.createElement('a')\n        a.classList.add('contact-link')\n        a.textContent = anchorText\n        a.href = link\n        div.appendChild(a)\n\n        section.appendChild(div)\n    }\n\n    contactItem('Email', 'mailto:timpkelly1@gmail.com', 'timpkelly1@gmail.com')\n    contactItem('LinkedIn', 'https://www.linkedin.com/in/tim-patrick-kelly/', 'linkedin.com/in/tim-patrick-kelly')\n    contactItem('Github', 'https://github.com/timkellytk', 'timkellytk')\n\n    content.appendChild(section)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateContact);\n\n//# sourceURL=webpack:///./src/generateContact.js?");

/***/ }),

/***/ "./src/generateHome.js":
/*!*****************************!*\
  !*** ./src/generateHome.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction generateHome() {\n    const content = document.querySelector('#content')\n\n    const section = document.createElement('div')\n    section.classList.add('home')\n    section.setAttribute('id','home')\n\n    const h1 = document.createElement('h1')\n    h1.classList.add('hero-heading')\n    h1.textContent =  'The Kelly\\'s at Glenrowan'\n    section.appendChild(h1)\n\n    const h3 = document.createElement('h3')\n    h3.classList.add('hero-subheading')\n    h3.textContent =  'Established in 1880'\n    section.appendChild(h3)\n\n    const img = document.createElement('img')\n    img.src = \"images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg\"\n    section.appendChild(img)\n\n    content.appendChild(section)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateHome);\n\n//# sourceURL=webpack:///./src/generateHome.js?");

/***/ }),

/***/ "./src/generateMenu.js":
/*!*****************************!*\
  !*** ./src/generateMenu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction generateMenu () {\n    const content = document.querySelector('#content')\n\n    const section = document.createElement('div')\n    section.classList.add('content-box')\n    section.setAttribute('id','menu')\n\n    const grid = document.createElement('div')\n    grid.classList.add('w-layout-grid')\n    grid.classList.add('grid')\n    section.appendChild(grid)\n\n    const menuCategories = (name) => {\n        const category = document.createElement('div')\n        category.classList.add('menu-category')\n        category.setAttribute('id', name)\n        grid.appendChild(category)\n\n        function capitalizeFirstconstter(string) {\n            return string.charAt(0).toUpperCase() + string.slice(1);\n        }\n\n        const h1 = document.createElement('h1')\n        h1.textContent = capitalizeFirstconstter(name)\n        category.appendChild(h1)\n\n        return category\n    }\n\n    const starters = menuCategories('starters')\n    const mains = menuCategories('mains')\n    const desserts = menuCategories('desserts')\n\n    const menuItems = (name, price, category) => {\n        const item = document.createElement('div')\n        item.classList.add('menu-item')\n\n        const itemName = document.createElement('div')\n        itemName.textContent = name\n        item.appendChild(itemName)\n\n        const itemPrice = document.createElement('div')\n        itemPrice.textContent = price\n        item.appendChild(itemPrice)\n\n        category.appendChild(item)\n    };\n    \n    menuItems('Fries', '$4', starters)\n    menuItems('Beef loaded fries', '$6', starters)\n    menuItems('Veggie loaded fries', '$6', starters)\n    menuItems('Chicken nuggets', '$6', starters)\n    menuItems('Beef burger', '$12', mains)\n    menuItems('Chicken burger', '$12', mains)\n    menuItems('Mushroom burger', '$12', mains)\n    menuItems('Vegan burger', '$12', mains)\n    menuItems('Apple crumble', '$7', desserts)\n    menuItems('Lemon curd tart', '$7', desserts)\n    menuItems('Tiramisu', '$7', desserts)\n    menuItems('Deep fried icecream', '$7', desserts)\n\n    content.appendChild(section)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateMenu);\n\n//# sourceURL=webpack:///./src/generateMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateHome */ \"./src/generateHome.js\");\n/* harmony import */ var _generateMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMenu */ \"./src/generateMenu.js\");\n/* harmony import */ var _generateContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateContact */ \"./src/generateContact.js\");\n\n\n\n\n// Initial page load\nObject(_generateHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n// Dynamic page reloading\nfunction clearContent() {\n    content.innerHTML = ''\n}\n\nconst content = document.querySelector('#content')\nconst homeBtn = document.querySelector('#home-btn')\nconst menuBtn = document.querySelector('#menu-btn')\nconst contactBtn = document.querySelector('#contact-btn')\n\n\nhomeBtn.addEventListener('click', () => {\n    clearContent();\n    Object(_generateHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nmenuBtn.addEventListener('click', () => {\n    clearContent();\n    Object(_generateMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\ncontactBtn.addEventListener('click', () => {\n    clearContent();\n    Object(_generateContact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });