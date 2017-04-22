'use strict';

exports.__esModule = true;
exports.browserQueryHistory = exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = undefined;

var _browserHistory2 = require('./browserHistory');

var _browserHistory3 = _interopRequireDefault(_browserHistory2);

var _hashHistory2 = require('./hashHistory');

var _hashHistory3 = _interopRequireDefault(_hashHistory2);

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

var _browserQueryHistory2 = require('./browserQueryHistory');

var _browserQueryHistory3 = _interopRequireDefault(_browserQueryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.browserHistory = _browserHistory3.default;
exports.hashHistory = _hashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;
exports.browserQueryHistory = _browserQueryHistory3.default;
exports.default = {
    browserHistory: browserHistory,
    hashHistory: hashHistory,
    createMemoryHistory: createMemoryHistory,
    browserQueryHistory: browserQueryHistory
};