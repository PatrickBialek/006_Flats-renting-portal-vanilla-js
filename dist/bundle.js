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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);\n// JS\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const city = document.querySelector(\"#city\"),\n\trooms = document.querySelector(\"#rooms\"),\n\tmin = document.querySelector(\"#min\"),\n\tmax = document.querySelector(\"#max\"),\n\tpropertyType = document.querySelector(\"#property-type\"),\n\tdeposit = document.querySelector(\"#deposit\"),\n\thouseShare = document.querySelector(\"#house-share\"),\n\tflatsContainer = document.querySelector(\"#flats-container\"),\n\tsearchFields = {\n\t\tcity: \"\",\n\t\trooms: \"\",\n\t\tprice: \"\",\n\t\tpropertyType: \"\",\n\t\tdeposit: \"\",\n\t\thouseShare: \"\"\n\t};\n\nfunction clearHTML() {\n\tflatsContainer.innerHTML = null;\n}\n\nfunction showFlats(flats) {\n\tclearHTML();\n\n\tflats.forEach(flat => {\n\t\tconst TemplateHTML = `\n\t\t<div class=\"cars__single-car\">\n\t\t\t<h1>${flat.city}</h1>\n\t\t</div>\n\t\t`;\n\n\t\tflatsContainer.innerHTML += TemplateHTML;\n\t});\n}\n\nfunction noResult() {\n\tclearHTML();\n\n\tconst noResultHTML = `\n\t\t\t<div class=\"no-result\">\n\t\t\t\t<span class=\"no-result__title\">No results found</span>\n\t\t\t\t<span class=\"no-result__description\">You can change filters if you want find a car</span>\n\t\t\t</div>\n\t\t`;\n\tflatsContainer.innerHTML = noResultHTML;\n}\n\nfunction filterFlats() {\n\tconst result = flats\n\t\t.filter(filterCity)\n\t\t.filter(filterRooms)\n\t\t.filter(filterMinPrice)\n\t\t.filter(filterMaxPrice)\n\t\t.filter(filterPropertyType)\n\t\t.filter(filterDeposit)\n\t\t.filter(filterHouseShare);\n\n\tif (result.length) {\n\t\tshowFlats(result);\n\t} else {\n\t\tnoResult();\n\t}\n}\n\nfunction filterCity(flat) {\n\tif (searchFields.flat) {\n\t\treturn flat.city === searchFields.city;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\nfunction filterRooms(flat) {\n\tif (searchFields.rooms) {\n\t\treturn flat.rooms === searchFields.rooms;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\nfunction filterMinPrice(flat) {\n\tif (searchFields.min) {\n\t\treturn flat.price >= searchFields.min;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\nfunction filterMaxPrice(flat) {\n\tif (searchFields.max) {\n\t\treturn flat.price <= searchFields.max;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\nfunction filterPropertyType(flat) {\n\tif (searchFields.propertyType) {\n\t\treturn flat.propertyType === searchFields.propertyType;\n\t} else {\n\t\treturn car;\n\t}\n}\n\nfunction filterDeposit(flat) {\n\tif (searchFields.deposit) {\n\t\treturn flat.deposit === searchFields.deposit;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\nfunction filterHouseShare(flat) {\n\tif (searchFields.houseShare) {\n\t\treturn flat.houseShare === searchFields.houseShare;\n\t} else {\n\t\treturn flat;\n\t}\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\tshowFlats(flats);\n});\n\ncity.addEventListener(\"input\", e => {\n\tsearchFields.city = e.target.value;\n\tfilterFlats();\n});\n\nrooms.addEventListener(\"input\", e => {\n\tsearchFields.rooms = Number(e.target.value);\n\tfilterFlats();\n});\n\nmin.addEventListener(\"input\", e => {\n\tfilterFlats();\n});\n\nmax.addEventListener(\"input\", e => {\n\tsearchFields.max = Number(e.target.value);\n\tfilterFlats();\n});\n\npropertyType.addEventListener(\"input\", e => {\n\tsearchFields.propertyType = Number(e.target.value);\n\tfilterFlats();\n});\n\ndeposit.addEventListener(\"input\", e => {\n\tsearchFields.deposit = e.target.value;\n\tfilterFlats();\n});\n\nhouseShare.addEventListener(\"input\", e => {\n\tsearchFields.houseShare = e.target.value;\n\tfilterFlats();\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });