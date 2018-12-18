"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _App = _interopRequireDefault(require("../../client/lib/App/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var ssrMiddleware = function ssrMiddleware(ctx, next) {
  var app = _server.default.renderToString(_react.default.createElement(_App.default, null));

  var html = "\n<!DOCTYPE html>\n<html lang=\"en-GB\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>React Boilerplate</title>\n</head>\n<body>\n  <div id=\"root\">".concat(app, "</div>\n  <script type=\"text/javascript\" src=\"/bundle.js\"></script>\n</body>\n</html>\n  ");
  ctx.type = 'text/html';
  ctx.body = html;
};

var _default = ssrMiddleware;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ssrMiddleware, "ssrMiddleware", "/Users/velizarmihaylov/react-ssr-boilerplate/server/src/ssr-middleware.js");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/server/src/ssr-middleware.js");
  leaveModule(module);
})();

;