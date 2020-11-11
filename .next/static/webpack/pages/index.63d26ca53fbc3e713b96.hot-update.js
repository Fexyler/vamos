webpackHotUpdate_N_E("pages/index",{

/***/ "./components/hero/index.js":
/*!**********************************!*\
  !*** ./components/hero/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/hero/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text */ \"./components/text/index.js\");\n/* harmony import */ var _icons_illustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/illustration */ \"./components/icons/illustration/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ \"./components/button/index.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact */ \"./components/contact/index.js\");\n/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/index */ \"./hooks/index.js\");\nvar _jsxFileName = \"/Users/omeraksu/https/vamos/components/hero/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction Hero() {\n  _s();\n\n  var size = Object(_hooks_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  return __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hero,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_text__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    children: size > 1240 && __jsx(_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 36\n      }\n    }),\n    h1: true,\n    paragraph: true,\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.h1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(_icons_illustration__WEBPACK_IMPORTED_MODULE_4__[\"Coming\"], {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.illustration,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), size < 400 && __jsx(_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 22\n    }\n  }));\n}\n\n_s(Hero, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", false, function () {\n  return [_hooks_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2luZGV4LmpzPzM4NmYiXSwibmFtZXMiOlsiSGVybyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwic3R5bGVzIiwiaGVybyIsInRpdGxlIiwiaDEiLCJpbGx1c3RyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZCxNQUFNQyxJQUFJLEdBQUdDLDREQUFhLEVBQTFCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx3REFBTSxDQUFDRSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFlBQVEsRUFBRUosSUFBSSxHQUFHLElBQVAsSUFBZSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEM0I7QUFFRSxNQUFFLE1BRko7QUFHRSxhQUFTLE1BSFg7QUFJRSxhQUFTLEVBQUVFLHdEQUFNLENBQUNHLEVBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0UsTUFBQywwREFBRDtBQUFRLGFBQVMsRUFBRUgsd0RBQU0sQ0FBQ0ksWUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUdOLElBQUksR0FBRyxHQUFQLElBQWMsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVmpCLENBREY7QUFjRDs7R0FoQlFELEk7VUFDTUUsb0Q7OztLQURORixJO0FBa0JNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVyby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi90ZXh0J1xuaW1wb3J0IHsgQ29taW5nIH0gZnJvbSAnLi4vaWNvbnMvaWxsdXN0cmF0aW9uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgTWFpbEZvcm0gZnJvbSAnLi4vY29udGFjdCdcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uL2hvb2tzL2luZGV4J1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBjaGlsZHJlbj17c2l6ZSA+IDEyNDAgJiYgPE1haWxGb3JtIC8+fVxuICAgICAgICAgIGgxXG4gICAgICAgICAgcGFyYWdyYXBoXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaDF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb21pbmcgY2xhc3NOYW1lPXtzdHlsZXMuaWxsdXN0cmF0aW9ufSAvPlxuICAgICAge3NpemUgPCA0MDAgJiYgPE1haWxGb3JtIC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/index.js\n");

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useWindowSize; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n // Hook\n\nfunction useWindowSize() {\n  _s();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Handler to call on window resize\n    function handleResize() {\n      // Set window width/height to state\n      setWindowSize({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    } // Add event listener\n\n\n    window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size\n\n    handleResize(); // Remove event listener on cleanup\n\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n}\n\n_s(useWindowSize, \"ppWlIq/Hbwel4CMagSW7HBUvFeI=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvaW5kZXguanM/ZTdlMCJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztDQUVBOztBQUNlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDdEM7QUFDQTtBQUZzQyxrQkFHRkMsc0RBQVEsQ0FBQztBQUMzQ0MsU0FBSyxFQUFFQyxTQURvQztBQUUzQ0MsVUFBTSxFQUFFRDtBQUZtQyxHQUFELENBSE47QUFBQSxNQUcvQkUsVUFIK0I7QUFBQSxNQUduQkMsYUFIbUI7O0FBUXRDQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLGFBQVNDLFlBQVQsR0FBd0I7QUFDdEI7QUFDQUYsbUJBQWEsQ0FBQztBQUNaSixhQUFLLEVBQUVPLE1BQU0sQ0FBQ0MsVUFERjtBQUVaTixjQUFNLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGSCxPQUFELENBQWI7QUFJRCxLQVJhLENBVWQ7OztBQUNBRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQyxFQVhjLENBYWQ7O0FBQ0FBLGdCQUFZLEdBZEUsQ0FnQmQ7O0FBQ0EsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVCxDQVJzQyxDQTBCL0I7O0FBRVAsU0FBT0gsVUFBUDtBQUNEOztHQTdCdUJMLGEiLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLy8gSG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIGhlaWdodDogdW5kZWZpbmVkXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICBzZXRXaW5kb3dTaXplKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuXG4gICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICB9LCBbXSkgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxuXG4gIHJldHVybiB3aW5kb3dTaXplXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ })

})