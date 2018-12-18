"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpack2 = _interopRequireDefault(require("../../webpack.dev"));

var _webpackHotClient = _interopRequireDefault(require("webpack-hot-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var hmrService = function hmrService(app) {
  var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    port: 8080
  };
  var compiler = (0, _webpack.default)(_webpack2.default);
  var hot = (0, _webpackHotClient.default)(compiler, conf);
  var server = hot.server;
  var devMiddleware = (0, _webpackDevMiddleware.default)(compiler);
  return server.on('listening', function () {
    app.use(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = devMiddleware;
                _context.next = 3;
                return devMiddleware(ctx.req, {
                  end: function end(payload) {
                    ctx.body = payload;
                  },
                  setHeader: ctx.set.bind(ctx),
                  locals: ctx.state
                }, next);

              case 3:
                _context.t1 = _context.sent;
                _context.next = 6;
                return _context.t0.waitUntilValid.call(_context.t0, _context.t1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};

var _default = hmrService;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(hmrService, "hmrService", "/Users/velizarmihaylov/react-ssr-boilerplate/server/src/hmr-service.js");
  reactHotLoader.register(_default, "default", "/Users/velizarmihaylov/react-ssr-boilerplate/server/src/hmr-service.js");
  leaveModule(module);
})();

;