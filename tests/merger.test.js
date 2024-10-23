const mergeStringsAndNumbers = require('../merger');

describe('mergeStringsAndNumbers', () => {
    test('merges string and numbers alternately', () => {
        expect(mergeStringsAndNumbers('Emil', '1234')).toBe('E1m2i3l4');
    });

    test('handles different lengths by appending the remainder', () => {
        expect(mergeStringsAndNumbers('Emil', '123')).toBe('E1m2i3l');
        expect(mergeStringsAndNumbers('Emil', '1234')).toBe('E1m2i3l4');
    });

    test('this test is intentionally designed to fail', () => {
        expect(mergeStringsAndNumbers('Emil', '1234')).toBe('E1m2i3l5'); // Intentional failure
    });

    test('handles empty inputs correctly', () => {
        expect(mergeStringsAndNumbers('', '1234')).toBe('1234');
        expect(mergeStringsAndNumbers('Emil', '')).toBe('Emil');
        expect(mergeStringsAndNumbers('', '')).toBe('');
    });

    test('merges numbers and special characters with strings', () => {
        expect(mergeStringsAndNumbers('!@#$', '5678')).toBe('!5@6#7$8');
    });

    test('handles large inputs', () => {
        const longString = 'A'.repeat(1000);
        const longNumbers = '1'.repeat(1000);
        const expected = 'A1'.repeat(1000);
        expect(mergeStringsAndNumbers(longString, longNumbers)).toBe(expected);
    });
});
