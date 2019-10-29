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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyleIntent = {
  none: {
    color: 'black',
    border: "".concat((0, _baselineGrid.gridUnits)(0.1), "rem solid black")
  },
  success: {
    color: 'green',
    border: "".concat((0, _baselineGrid.gridUnits)(0.1), "rem solid green")
  },
  danger: {
    color: 'red',
    border: "".concat((0, _baselineGrid.gridUnits)(0.1), "rem solid red")
  }
};
var primaryStyleIntent = {
  none: {
    backgroundColor: 'blue'
  },
  success: {
    backgroundColor: 'green'
  },
  danger: {
    backgroundColor: 'red'
  }
};

var base = function base() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intent = _ref.intent;

  return _objectSpread({}, baseStyleIntent[intent], {
    borderRadius: "".concat((0, _baselineGrid.gridUnits)(0.2), "rem"),
    fontWeight: 'bold',
    height: "".concat((0, _baselineGrid.gridUnits)(1.5), "rem"),
    letterSpacing: '0.05rem',
    lineHeight: "".concat((0, _baselineGrid.gridUnits)(1), "rem"),
    margin: "".concat((0, _baselineGrid.gridUnits)(0.5), "rem 0"),
    padding: "0 ".concat((0, _baselineGrid.gridUnits)(0.6), "rem")
  });
};

var primary = function primary() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intent = _ref2.intent;

  return _objectSpread({}, base(), primaryStyleIntent[intent], {
    color: 'white',
    border: 'none'
  });
};

var Styles = {
  base: base,
  primary: primary
};

var Button = function Button(_ref3) {
  var _ref3$appearance = _ref3.appearance,
      appearance = _ref3$appearance === void 0 ? 'base' : _ref3$appearance,
      _ref3$intent = _ref3.intent,
      intent = _ref3$intent === void 0 ? 'none' : _ref3$intent,
      props = _objectWithoutProperties(_ref3, ["appearance", "intent"]);

  return (0, _core.jsx)("button", {
    css: Styles[appearance]({
      intent: intent
    })
  }, props.text);
};

var _default = Button;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(baseStyleIntent, "baseStyleIntent", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(primaryStyleIntent, "primaryStyleIntent", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(base, "base", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(primary, "primary", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(Styles, "Styles", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(Button, "Button", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Button.jsx");
  leaveModule(module);
})();

;