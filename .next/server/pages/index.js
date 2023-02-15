"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import '../styles/globals.css'\n// Here you would fetch and return the user / session\nconst useUser = ()=>({\n        user: null,\n        loading: false\n    });\nfunction Home() {\n    const { user , loading  } = useUser();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!(user || loading)) {\n            router.push(\"auth/login\");\n        }\n    }, [\n        user,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Redirecting...\"\n    }, void 0, false, {\n        fileName: \"/Users/salscodes/std/abasi/src/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n// here use a loading state\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ007QUFDdkMsaUNBQWlDO0FBRWpDLHFEQUFxRDtBQUNyRCxNQUFNRSxVQUFVLElBQU87UUFBRUMsTUFBTSxJQUFJO1FBQUVDLFNBQVMsS0FBSztJQUFDO0FBRXJDLFNBQVNDLE9BQU87SUFDN0IsTUFBTSxFQUFFRixLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHRjtJQUMxQixNQUFNSSxTQUFTTCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUVHLENBQUFBLFFBQVFDLE9BQU0sR0FBSTtZQUN0QkUsT0FBT0MsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUc7UUFBQ0o7UUFBTUM7S0FBUTtJQUVsQixxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztBQUNaLDJCQUEyQjtBQUM3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FzdS1mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuLy8gSGVyZSB5b3Ugd291bGQgZmV0Y2ggYW5kIHJldHVybiB0aGUgdXNlciAvIHNlc3Npb25cbmNvbnN0IHVzZVVzZXIgPSAoKSA9PiAoeyB1c2VyOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZVVzZXIoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCEodXNlciB8fCBsb2FkaW5nKSkge1xuICAgICAgcm91dGVyLnB1c2goJ2F1dGgvbG9naW4nKVxuICAgIH1cbiAgfSwgW3VzZXIsIGxvYWRpbmddKVxuXG4gIHJldHVybiA8ZGl2PlJlZGlyZWN0aW5nLi4uPC9kaXY+XG4gIC8vIGhlcmUgdXNlIGEgbG9hZGluZyBzdGF0ZVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVVzZXIiLCJ1c2VyIiwibG9hZGluZyIsIkhvbWUiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();