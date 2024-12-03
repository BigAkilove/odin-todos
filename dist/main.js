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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _time_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-left */ \"./src/time-left.js\");\n\n\n\nfunction toDos (title,description,dueDate,priority,notes,checklist) {\n    this.title = title;\n    this.description = description;\n    //replace this with a new Date function to render time left\n    this.dueDate = dueDate;\n    //high,average,low with dom element\n    this.timeLeft(),\n    this.priority = priority;\n    this.notes = notes;\n    //done with true or not done with false with dom element\n    this.checklist = checklist;\n\n    return {title,description,dueDate,timeLeft: _time_left__WEBPACK_IMPORTED_MODULE_1__[\"default\"],priority,notes,checklist}\n}\n\n\nconst gettingAJob = toDos('Getting a job', 'I want to get a job so I have enough money to go to Japan', new Date (2025, 2, 1), 'very important','worth trying to search programming jobs',false)\n\n/*\nnpm init -y\nnpm install --save-dev webpack webpack-cli\nnpx webpack\nnpm install --save-dev html-webpack-plugin\nnpm install --save-dev style-loader css-loader\nnpm install --save-dev webpack-dev-server\n*/\n\n//# sourceURL=webpack://odin-todos/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://odin-todos/./src/styles.css?");

/***/ }),

/***/ "./src/time-left.js":
/*!**************************!*\
  !*** ./src/time-left.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeLeft = function() {\n    const timer = new Date();\n\n    const timerYear = timer.getFullYear();\n    const timerMonth = timer.getMonth();\n    const timerDay = timer.getDay();\n    const timerHours = timer.getHours();\n    const timerMinutes = timer.getMinutes();\n    const timerSeconds = timer.getSeconds();\n\n    const dueYear = dueDate.getFullYear();\n    const dueMonth = dueDate.getMonth();\n    const dueDay = dueDate.getDay();\n    const dueHours = dueDate.getHours();\n    const dueMinutes = dueDate.getMinutes();\n    const dueSeconds = dueDate.getSeconds();\n\n    return [timerYear-dueYear,timerMonth-dueMonth,timerDay-dueDay,timerHours-dueHours,timerMinutes-dueMinutes,timerSeconds-dueSeconds]\n});\n\n//# sourceURL=webpack://odin-todos/./src/time-left.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;