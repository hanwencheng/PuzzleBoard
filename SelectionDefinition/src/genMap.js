'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sampleSize = 100;

var map = _lodash2.default.chain(new Array(sampleSize)).map(function () {
    return 1;
}).value();

console.log('map is', map);

_fs2.default.writeFile("/tmp/test", "Hey there!", function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
