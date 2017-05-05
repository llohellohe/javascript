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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return firstName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return lastName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return age; });\nvar firstName = \"yang\";\nvar lastName = \"qi\";\nvar age = 10;\n\n\n/* harmony default export */ __webpack_exports__[\"d\"] = (function () {\n\treturn \"hello export default\";\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm9maWxlLmpzP2IyOWIiXSwibmFtZXMiOlsiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQSxJQUFJQSxZQUFVLE1BQWQ7QUFDQSxJQUFJQyxXQUFTLElBQWI7QUFDQSxJQUFJQyxNQUFJLEVBQVI7QUFDQTs7QUFFQSx5REFBZSxZQUFVO0FBQ3hCLFFBQU8sc0JBQVA7QUFDQSxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmlyc3ROYW1lPVwieWFuZ1wiXG52YXIgbGFzdE5hbWU9XCJxaVwiXG52YXIgYWdlPTEwXG5leHBvcnQge2ZpcnN0TmFtZSxsYXN0TmFtZSxhZ2V9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBcImhlbGxvIGV4cG9ydCBkZWZhdWx0XCJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_js__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(0);\n\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__profile_js__[\"a\" /* firstName */] + __WEBPACK_IMPORTED_MODULE_0__profile_js__[\"b\" /* lastName */] + \" \" + __WEBPACK_IMPORTED_MODULE_0__profile_js__[\"c\" /* age */]);\n\n\n\nvar x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__profile__[\"d\" /* default */])();\nconsole.log(x);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZpcnN0TmFtZSIsIngiLCJ4eCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQUEsUUFBUUMsR0FBUixDQUFZLDhEQUFBQyxHQUFZLDZEQUFaLEdBQXVCLEdBQXZCLEdBQTZCLHdEQUF6Qzs7QUFHQTs7QUFFQSxJQUFJQyxJQUFFLGdGQUFBQyxFQUFOO0FBQ0FKLFFBQVFDLEdBQVIsQ0FBWUUsQ0FBWiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyc3ROYW1lLCBhZ2UsIGxhc3ROYW1lIH0gZnJvbSAnLi9wcm9maWxlLmpzJ1xuY29uc29sZS5sb2coZmlyc3ROYW1lICsgbGFzdE5hbWUgKyBcIiBcIiArIGFnZSlcblxuXG5pbXBvcnQgeHggZnJvbSAnLi9wcm9maWxlJ1xuXG52YXIgeD14eCgpXG5jb25zb2xlLmxvZyh4KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);