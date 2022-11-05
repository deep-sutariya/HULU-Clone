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

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n\n\n\nfunction Thumbnail(param) {\n    var result = param.result;\n    // console.log(result);\n    var BASE_URL = \"https://image.tmdb.org/t/p/original/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                layout: \"responsive\",\n                src: \"\".concat(BASE_URL).concat(result.backdrop_path),\n                height: 1080,\n                width: 1920\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"truncate max-w-md\",\n                        children: result.overview\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold mt-1 text-2xl text-white\",\n                        children: result.title || result.original_name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex items-center capitalize opacity-0 group-hover:opacity-100 transform-100\",\n                        children: [\n                            result.media_type && \"\".concat(result.media_type, \" \\uD83D\\uDCC5\"),\n                            \" \",\n                            \" \",\n                            result.release_date || result.first_air_date,\n                            \" \",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ThumbUpIcon, {\n                                className: \"h-5 mx-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            result.vote_count\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DEEP\\\\Desktop\\\\CODE\\\\Web\\\\NEXT JS\\\\PROJECTS\\\\HULU CLONE\\\\components\\\\Thumbnail.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUE4QjtBQUN1QjtBQUVyRCxTQUFTRSxTQUFTLENBQUMsS0FBVSxFQUFFO1FBQVosTUFBUSxHQUFSLEtBQVUsQ0FBUkMsTUFBTTtJQUN2Qix1QkFBdUI7SUFDdkIsSUFBTUMsUUFBUSxHQUFHLHNDQUFzQztJQUN2RCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzswQkFDakMsOERBQUNOLG1EQUFLO2dCQUNGTyxNQUFNLEVBQUMsWUFBWTtnQkFDbkJDLEdBQUcsRUFBRSxFQUFDLENBQWFMLE1BQW9CLENBQS9CQyxRQUFRLENBQXdCLFFBQXJCRCxNQUFNLENBQUNNLGFBQWEsQ0FBRTtnQkFDekNDLE1BQU0sRUFBRSxJQUFJO2dCQUNaQyxLQUFLLEVBQUUsSUFBSTs7Ozs7b0JBQ2I7MEJBRUYsOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLOztrQ0FDaEIsOERBQUNNLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUVILE1BQU0sQ0FBQ1UsUUFBUTs7Ozs7NEJBQUs7a0NBRXRELDhEQUFDQyxJQUFFO3dCQUFDUixTQUFTLEVBQUMsb0NBQW9DO2tDQUFFSCxNQUFNLENBQUNZLEtBQUssSUFBSVosTUFBTSxDQUFDYSxhQUFhOzs7Ozs0QkFBTTtrQ0FFOUYsOERBQUNKLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyw4RUFBOEU7OzRCQUN0RkgsTUFBTSxDQUFDYyxVQUFVLElBQUksRUFBQyxDQUFvQixNQUFFLENBQXBCZCxNQUFNLENBQUNjLFVBQVUsRUFBQyxlQUFFLENBQUM7NEJBQUUsR0FBQzs0QkFBQyxHQUFHOzRCQUNwRGQsTUFBTSxDQUFDZSxZQUFZLElBQUlmLE1BQU0sQ0FBQ2dCLGNBQWM7NEJBQUMsR0FBQzs0QkFBQyxHQUFHOzBDQUNuRCw4REFBQ2xCLGlFQUFXO2dDQUFDSyxTQUFTLEVBQUMsVUFBVTs7Ozs7b0NBQUc7NEJBQ25DSCxNQUFNLENBQUNpQixVQUFVOzs7Ozs7NEJBQ2xCOzs7Ozs7b0JBRUY7Ozs7OztZQUVKLENBR1Q7QUFDTCxDQUFDO0FBOUJRbEIsS0FBQUEsU0FBUztBQWdDbEIsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanM/OWE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQge1RodW1iVXBJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5mdW5jdGlvbiBUaHVtYm5haWwoeyByZXN1bHQgfSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGh9YH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTA4MH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtMSB0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCI+e3Jlc3VsdC50aXRsZSB8fCByZXN1bHQub3JpZ2luYWxfbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBjYXBpdGFsaXplIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2Zvcm0tMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5tZWRpYV90eXBlICYmIGAke3Jlc3VsdC5tZWRpYV90eXBlfSDwn5OFYCB9IHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LnJlbGVhc2VfZGF0ZSB8fCByZXN1bHQuZmlyc3RfYWlyX2RhdGV9IHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJVcEljb24gY2xhc3NOYW1lPSdoLTUgbXgtMicgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC52b3RlX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbCJdLCJuYW1lcyI6WyJJbWFnZSIsIlRodW1iVXBJY29uIiwiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwib3ZlcnZpZXciLCJoMiIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm1lZGlhX3R5cGUiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsInZvdGVfY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Thumbnail.js\n"));

/***/ })

});