'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchingBraces = matchingBraces;
// A function to test for matching braces in a string
function matchingBraces(inputString) {
    var n = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === '{') n++;
        if (inputString[i] === '}') {
            n--;
            if (n < 0) return false;
        }
    }

    return n === 0;
}