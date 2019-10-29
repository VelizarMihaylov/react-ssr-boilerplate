"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseStyles = _interopRequireDefault(require("../Components/base-styles"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var App = function App(props) {
  return (0, _core.jsx)("div", null, (0, _core.jsx)(_core.Global, {
    style: _baseStyles.default
  }), (0, _core.jsx)("h1", {
    style: {
      color: 'purple'
    }
  }, "React SSR Demo"), (0, _core.jsx)("p", null, "A simple react app example with server side rendering"));
};

var _default = App;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/App/App.js");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/client/src/App/App.js");
  leaveModule(module);
})();

;