'use strict';

var _globals = require('@jest/globals');

var _main = require('./main');

(0, _globals.test)("Test 1 - Single brackets", function () {
    (0, _globals.expect)((0, _main.matchingBraces)("{}")).toBe(true);
});

(0, _globals.test)("Test 2 - Opposing brackets", function () {
    (0, _globals.expect)((0, _main.matchingBraces)("}{")).toBe(false);
});

(0, _globals.test)("Test 3 - Missing closing bracket", function () {
    (0, _globals.expect)((0, _main.matchingBraces)("{{}")).toBe(false);
});

(0, _globals.test)("Test 4 - Empty string", function () {
    (0, _globals.expect)((0, _main.matchingBraces)("")).toBe(true);
});