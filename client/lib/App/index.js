"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!module.hot) {
  _reactDom.default.hydrate(_react.default.createElement(_App.default, null), document.getElementById('root'));
}

if (module.hot) {
  _reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));

  module.hot.accept('./App', function () {
    var NextApp = require("./App").default;

    _reactDom.default.render(_react.default.createElement(NextApp, null), document.getElementById('root'));
  });
}