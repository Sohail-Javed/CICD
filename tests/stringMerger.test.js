const mergeStringsAndNumbers = require('../src/stringMerger'); // Import the function to be tested

// Test Case 1: Merging strings and numbers alternately
test('merges string and numbers alternately', () => {
  const result = mergeStringsAndNumbers("Emil", "1234");
  expect(result).toBe("E1m2i3l4");
});

// Test Case 2: Uneven string and number lengths
test('handles different lengths by appending the remainder', () => {
  const result = mergeStringsAndNumbers("Cat", "123456");
  expect(result).toBe("C1a2t3456");
});

// Test Case 3: Empty string and number inputs
test('handles empty inputs correctly', () => {
  const result = mergeStringsAndNumbers("", "");
  expect(result).toBe("");
});
