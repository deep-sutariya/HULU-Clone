"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/requests */ \"./utils/requests.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Nav() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex px-10 p-2 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide\",\n                children: Object.entries(_utils_requests__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).map(function(param) {\n                    var _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(param, 2), key = _param[0], ref = _param[1], title = ref.title, url = ref.url;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        onClick: function() {\n                            return router.push(\"/?genre=\".concat(key));\n                        },\n                        className: \"last:pr-24 cursor-pointer transition-duration-100 transform hover:scale-125 hover:text-white active:text-red-500 \",\n                        children: title\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Nav.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Nav.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Nav.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Nav.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUF5QztBQUNIO0FBRXRDLFNBQVNFLEdBQUcsR0FBRzs7O0lBQ2YsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBRXhCLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVOzswQkFDckIsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyw4R0FBOEc7MEJBRXhIRSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsdURBQVEsQ0FBQyxDQUFDUyxHQUFHLENBQUM7NkhBQUVDLEdBQUcsK0JBQUVDLEtBQUssT0FBTEEsS0FBSyxFQUFDQyxHQUFHLE9BQUhBLEdBQUc7eUNBQzFDLDhEQUFDQyxJQUFFO3dCQUNDQyxPQUFPLEVBQUU7bUNBQUlYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLFVBQVMsQ0FBTSxPQUFKTCxHQUFHLENBQUUsQ0FBQzt5QkFBQTt3QkFDMUNMLFNBQVMsRUFBQyxtSEFBbUg7a0NBQzVITSxLQUFLO3VCQUhERCxHQUFHOzs7OzZCQUlQO2lCQUNSLENBQUM7Ozs7O29CQUVBOzBCQUdOLDhEQUFDSixLQUFHO2dCQUFDRCxTQUFTLEVBQUMsb0VBQW9FOzs7OztvQkFBRzs7Ozs7O1lBR3BGLENBQ1A7QUFDSCxDQUFDO0dBdkJRSCxHQUFHOztRQUNHRCxrREFBUzs7O0FBRGZDLEtBQUFBLEdBQUc7QUF5QlosK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdHMnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBOYXYoKSB7XHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweC0xMCBwLTIgc206cHgtMjAgdGV4dC0yeGwgd2hpdGVzcGFjZS1ub3dyYXAgc3BhY2UteC0xMCBzbTpzcGFjZS14LTIwIG92ZXJmbG93LXgtc2Nyb2xsIHNjcm9sbGJhci1oaWRlJz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhyZXF1ZXN0cykubWFwKChba2V5LHt0aXRsZSx1cmx9XSk9PihcclxuICAgICAgICAgICAgICAgIDxoMiBrZXk9e2tleX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKGAvP2dlbnJlPSR7a2V5fWApfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhc3Q6cHItMjQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1kdXJhdGlvbi0xMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTp0ZXh0LXJlZC01MDAgJz5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBmYWRlIGVmZmVjdCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBiZy1ncmFkaWVudC10by1sIGZyb20tWyMwNjIwMkFdIGgtMTAgdy0xLzEyJyAvPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzA2MjAyQV0gaC0xMCB3LTEvMTInIC8+ICovfVxyXG5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbInJlcXVlc3RzIiwidXNlUm91dGVyIiwiTmF2Iiwicm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInRpdGxlIiwidXJsIiwiaDIiLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ }),

/***/ "./utils/requests.js":
/*!***************************!*\
  !*** ./utils/requests.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar API_KEY = process.env.API_KEY;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    fetchTrending: {\n        title: \"Trending\",\n        url: \"\"\n    },\n    fetchTopRated: {\n        title: \"Top Rated\",\n        url: \"\"\n    },\n    fetchActionMovies: {\n        title: \"Action\",\n        url: \"\"\n    },\n    fetchComedyMovies: {\n        title: \"Comedy\",\n        url: \"\"\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9yZXF1ZXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU87QUFFbkMsK0RBQWM7SUFDVkcsYUFBYSxFQUFFO1FBQ1hDLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxHQUFHLEVBQUc7S0FDVDtJQUNEQyxhQUFhLEVBQUU7UUFDWEYsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLEdBQUcsRUFBRztLQUNUO0lBQ0RFLGlCQUFpQixFQUFFO1FBQ2ZILEtBQUssRUFBRSxRQUFRO1FBQ2ZDLEdBQUcsRUFBRztLQUNUO0lBQ0RHLGlCQUFpQixFQUFFO1FBQ2ZKLEtBQUssRUFBRSxRQUFRO1FBQ2ZDLEdBQUcsRUFBRztLQUNUO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9yZXF1ZXN0cy5qcz8wODM0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmZXRjaFRyZW5kaW5nOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiVHJlbmRpbmdcIixcclxuICAgICAgICB1cmw6IGBgXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hUb3BSYXRlZDoge1xyXG4gICAgICAgIHRpdGxlOiBcIlRvcCBSYXRlZFwiLFxyXG4gICAgICAgIHVybDogYGBcclxuICAgIH0sXHJcbiAgICBmZXRjaEFjdGlvbk1vdmllczoge1xyXG4gICAgICAgIHRpdGxlOiBcIkFjdGlvblwiLFxyXG4gICAgICAgIHVybDogYGBcclxuICAgIH0sXHJcbiAgICBmZXRjaENvbWVkeU1vdmllczoge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbWVkeVwiLFxyXG4gICAgICAgIHVybDogYGBcclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiZmV0Y2hUcmVuZGluZyIsInRpdGxlIiwidXJsIiwiZmV0Y2hUb3BSYXRlZCIsImZldGNoQWN0aW9uTW92aWVzIiwiZmV0Y2hDb21lZHlNb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/requests.js\n"));

/***/ })

});