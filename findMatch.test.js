const findMatch = require('./FindMatch');

test('Test Case 1: ["flower", "flow", "flight"]', () => {
    expect(findMatch(["flower", "flow", "flight"])).toBe("fl");
});

test('Test Case 2: ["dog", "racecar", "car"]', () => {
    expect(findMatch(["dog", "racecar", "car"])).toBe("");
});

test('Test Case 3: Empty array', () => {
    expect(findMatch([])).toBe("Empty array");
});