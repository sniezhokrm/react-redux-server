webpackHotUpdate("main",{

/***/ "./src/components/cart-table/cart-table.js":
/*!*************************************************!*\
  !*** ./src/components/cart-table/cart-table.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/index;'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _cart_table_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-table.scss */ "./src/components/cart-table/cart-table.scss");
/* harmony import */ var _cart_table_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cart_table_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/roma/\u0421\u0442\u0456\u043B\u044C\u043D\u0438\u0446\u044F/react-resto-app/src/components/cart-table/cart-table.js";





const CartTable = ({
  items,
  deleteFromCart
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, items.map(item => {
    const title = item.title,
          url = item.url,
          category = item.category,
          price = item.price,
          id = item.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: id,
      className: "cart__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: url,
      className: "cart__item-img",
      alt: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart__item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart__item-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, price, "$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => deleteFromCart(id),
      className: "cart__close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "\xD7"));
  })));
};

const mapStateToProps = ({
  items
}) => {
  return {
    items
  };
};

const mapDispatchToProps = {
  deleteFromCart: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../actions/index;'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CartTable));

/***/ })

})
//# sourceMappingURL=main.02160b686082ede11146.hot-update.js.map