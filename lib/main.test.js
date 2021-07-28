"use strict";

var _main = require("./main");

test("Test 1 - Single brackets", function () {
    expect((0, _main.matchingBraces)("{}")).toBe(true);
});

test("Test 2 - Opposing brackets", function () {
    expect((0, _main.matchingBraces)("}{")).toBe(false);
});

test("Test 3 - Missing closing bracket", function () {
    expect((0, _main.matchingBraces)("{{}")).toBe(false);
});

test("Test 4 - Empty string", function () {
    expect((0, _main.matchingBraces)("")).toBe(true);
});