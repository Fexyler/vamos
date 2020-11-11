webpackHotUpdate_N_E("pages/index",{

/***/ "./components/hero/index.js":
/*!**********************************!*\
  !*** ./components/hero/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./components/hero/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text */ \"./components/text/index.js\");\n/* harmony import */ var _icons_illustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/illustration */ \"./components/icons/illustration/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ \"./components/button/index.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact */ \"./components/contact/index.js\");\nvar _jsxFileName = \"/Users/omeraksu/https/vamos/components/hero/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Hero() {\n  _s();\n\n  var size = useWindowSize();\n  return __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hero,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_text__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    children: size > 1240 && __jsx(_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 36\n      }\n    }),\n    h1: true,\n    paragraph: true,\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.h1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(_icons_illustration__WEBPACK_IMPORTED_MODULE_4__[\"Coming\"], {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.illustration,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), size < 400 && __jsx(_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 22\n    }\n  }));\n}\n\n_s(Hero, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", true);\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2luZGV4LmpzPzM4NmYiXSwibmFtZXMiOlsiSGVybyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwic3R5bGVzIiwiaGVybyIsInRpdGxlIiwiaDEiLCJpbGx1c3RyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZCxNQUFNQyxJQUFJLEdBQUdDLGFBQWEsRUFBMUI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELHdEQUFNLENBQUNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsWUFBUSxFQUFFSixJQUFJLEdBQUcsSUFBUCxJQUFlLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQzQjtBQUVFLE1BQUUsTUFGSjtBQUdFLGFBQVMsTUFIWDtBQUlFLGFBQVMsRUFBRUUsd0RBQU0sQ0FBQ0csRUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFTRSxNQUFDLDBEQUFEO0FBQVEsYUFBUyxFQUFFSCx3REFBTSxDQUFDSSxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVR04sSUFBSSxHQUFHLEdBQVAsSUFBYyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWakIsQ0FERjtBQWNEOztHQWhCUUQsSTs7S0FBQUEsSTtBQWtCTUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vdGV4dCdcbmltcG9ydCB7IENvbWluZyB9IGZyb20gJy4uL2ljb25zL2lsbHVzdHJhdGlvbidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IE1haWxGb3JtIGZyb20gJy4uL2NvbnRhY3QnXG5cbmZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIGNoaWxkcmVuPXtzaXplID4gMTI0MCAmJiA8TWFpbEZvcm0gLz59XG4gICAgICAgICAgaDFcbiAgICAgICAgICBwYXJhZ3JhcGhcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oMX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbWluZyBjbGFzc05hbWU9e3N0eWxlcy5pbGx1c3RyYXRpb259IC8+XG4gICAgICB7c2l6ZSA8IDQwMCAmJiA8TWFpbEZvcm0gLz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/index.js\n");

/***/ }),

/***/ "./hooks/index.js":
false

})