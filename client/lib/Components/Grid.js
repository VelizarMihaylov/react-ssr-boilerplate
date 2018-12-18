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

// Grid mixin. Automatically adds styles to child elements to avoid having to add
// 'grid child' to every child container. By default child containers have equal weight
// use the `gridWeight` mixin to set different width columns.
//
// ```js
// const gridChild = style.div`
//   && {
//     ${gridWeight(8)}
//   }
// `
// ```
// Note the use of && to increase specificity and override the nested styles
var Style = _objectSpread({
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: 'column wrap'
}, (0, _baselineGrid.tabletAndUp)({
  flexFlow: 'row wrap',
  '> *': _objectSpread({}, (0, _baselineGrid.gridWeight)(4), {
    margin: "0 ".concat((0, _baselineGrid.gridUnits)(0.5), "rem"),
    firstChild: {
      marginLeft: 0
    },
    lastChild: {
      marginRight: 0
    }
  })
}));

var Grid = function Grid(props) {
  return (0, _core.jsx)("div", _extends({}, props, {
    css: Style
  }), props.children);
};

var _default = Grid;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Style, "Style", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Grid.jsx");
  reactHotLoader.register(Grid, "Grid", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Grid.jsx");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/Grid.jsx");
  leaveModule(module);
})();

;