// tests/merger.test.js

const mergeStringsAndNumbers = require('../merger');

test('merges string and numbers alternately', () => {
    expect(mergeStringsAndNumbers('Emil', '1234')).toBe('E1m2i3l4');
});

test('handles different lengths by appending the remainder', () => {
    expect(mergeStringsAndNumbers('Emil', '123')).toBe('E1m2i3l');
    expect(mergeStringsAndNumbers('Emil', '12345')).toBe('E1m2i3l4');
});

test('handles empty inputs correctly', () => {
    expect(mergeStringsAndNumbers('', '1234')).toBe('1234');
    expect(mergeStringsAndNumbers('Emil', '')).toBe('Emil');
    expect(mergeStringsAndNumbers('', '')).toBe('');
});
