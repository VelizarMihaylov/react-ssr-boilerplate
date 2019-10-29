"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _baselineGrid = require("./baseline-grid");

var _ContentWrapper = _interopRequireDefault(require("./ContentWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Style = {
  marginBottom: "".concat((0, _baselineGrid.gridUnits)(1), "rem")
};

var PageSection = function PageSection(props) {
  return (0, _core.jsx)("section", {
    ccs: Style
  }, (0, _core.jsx)(_ContentWrapper.default, null, props.children));
};

var _default = PageSection;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Style, "Style", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/PageSection.jsx");
  reactHotLoader.register(PageSection, "PageSection", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/PageSection.jsx");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/Components/PageSection.jsx");
  leaveModule(module);
})();

;