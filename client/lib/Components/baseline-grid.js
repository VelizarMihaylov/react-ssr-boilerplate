"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridWeight = exports.contentContainer = exports.maxWidthAndUp = exports.tabletAndUp = exports.layoutWidth = exports.gridUnits = exports.gridUnitSize = exports.gridLineHeight = exports.pixelsPerRem = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pixelsPerRem = 16;
exports.pixelsPerRem = pixelsPerRem;
var gridLineHeight = 1.5;
exports.gridLineHeight = gridLineHeight;
var gridUnitSize = gridLineHeight;
exports.gridUnitSize = gridUnitSize;

var gridUnits = function gridUnits(factor) {
  return factor * gridUnitSize;
};

exports.gridUnits = gridUnits;
var columns = 12;
var gridUnitsPerColumn = 3;
var columnWidthInGridUnits = gridUnitSize * gridUnitsPerColumn;
var layoutWidth = columns * columnWidthInGridUnits + (columns - 1) * gridUnitSize;
exports.layoutWidth = layoutWidth;
var tabletBreakpointInPx = 768;

var tabletAndUp = function tabletAndUp(props) {
  return _defineProperty({}, "@media(min-width: ".concat(tabletBreakpointInPx / pixelsPerRem, "rem)"), props);
};

exports.tabletAndUp = tabletAndUp;

var maxWidthAndUp = function maxWidthAndUp(props) {
  return _defineProperty({}, "@media(min-width: ".concat(layoutWidth, "rem)"), props);
};

exports.maxWidthAndUp = maxWidthAndUp;

var contentContainer = _objectSpread({
  maxWidth: "".concat(layoutWidth, "rem")
}, tabletAndUp);

exports.contentContainer = contentContainer;

var gridWeight = function gridWeight() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return {
    flex: "".concat(weight, " 1 0")
  };
};

exports.gridWeight = gridWeight;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pixelsPerRem, "pixelsPerRem", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(gridLineHeight, "gridLineHeight", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(gridUnitSize, "gridUnitSize", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(gridUnits, "gridUnits", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(columns, "columns", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(gridUnitsPerColumn, "gridUnitsPerColumn", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(columnWidthInGridUnits, "columnWidthInGridUnits", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(layoutWidth, "layoutWidth", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(tabletBreakpointInPx, "tabletBreakpointInPx", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(tabletAndUp, "tabletAndUp", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(maxWidthAndUp, "maxWidthAndUp", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(contentContainer, "contentContainer", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  reactHotLoader.register(gridWeight, "gridWeight", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/baseline-grid.js");
  leaveModule(module);
})();

;