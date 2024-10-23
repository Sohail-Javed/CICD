// tests/integration.test.js

const { mergeStringsAndNumbers, processMergedResult } = require('../merger');

describe('Integration Tests', () => {
    test('merging strings and processing the result', () => {
        const stringInput = 'Emil';
        const numberInput = '1234';

        // Step 1: Merge the strings and numbers
        const mergedResult = mergeStringsAndNumbers(stringInput, numberInput);
        // Expect merged result to be 'E1m2i3l4'
        expect(mergedResult).toBe('E1m2i3l4');

        // Step 2: Process the merged result to count vowels
        const vowelCount = processMergedResult(mergedResult);
        // 'E1m2i3l4' contains 'E' and 'i' (2 vowels)
        expect(vowelCount).toBe(2);
    });

    test('handles empty input correctly', () => {
        const stringInput = '';
        const numberInput = '';

        const mergedResult = mergeStringsAndNumbers(stringInput, numberInput);
        expect(mergedResult).toBe('');

        const vowelCount = processMergedResult(mergedResult);
        expect(vowelCount).toBe(0);
    });

    test('handles special characters', () => {
        const stringInput = '!@#$';
        const numberInput = '5678';

        const mergedResult = mergeStringsAndNumbers(stringInput, numberInput);
        expect(mergedResult).toBe('!5@6#7$8');

        const vowelCount = processMergedResult(mergedResult);
        expect(vowelCount).toBe(0); // No vowels present
    });
});
