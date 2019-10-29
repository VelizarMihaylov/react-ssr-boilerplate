"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _baselineGrid = require("./baseline-grid");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Style = _objectSpread({
  margin: "0 ".concat((0, _baselineGrid.gridUnits)(0.5), "rem"),
  maxWidth: "".concat(_baselineGrid.layoutWidth, "rem")
}, (0, _baselineGrid.maxWidthAndUp)({
  margin: '0 auto'
}));

var ContentWrapper = function ContentWrapper(props) {
  return (0, _core.jsx)("div", _extends({}, props, {
    css: Style
  }), props.children);
};

var _default = ContentWrapper;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Style, "Style", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/ContentWrapper.jsx");
  reactHotLoader.register(ContentWrapper, "ContentWrapper", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/ContentWrapper.jsx");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/ContentWrapper.jsx");
  leaveModule(module);
})();

;