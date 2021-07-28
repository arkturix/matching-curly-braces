import { expect, test } from '@jest/globals';
import { matchingBraces } from './main';

test("Test 1 - Single brackets", () => {
    expect(matchingBraces("{}")).toBe(true);
});

test("Test 2 - Opposing brackets", () => {
    expect(matchingBraces("}{")).toBe(false);
});

test("Test 3 - Missing closing bracket", () => {
    expect(matchingBraces("{{}")).toBe(false);
});

test("Test 4 - Empty string", () => {
    expect(matchingBraces("")).toBe(true);
});