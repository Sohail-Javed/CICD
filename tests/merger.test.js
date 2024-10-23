// dynamicTestRunner.js
const mergeStringsAndNumbers = require('./merger');
const prompt = require('prompt-sync')();

const runTests = () => {
    const strInput = prompt('Enter a string: ');
    const numInput = prompt('Enter numbers: ');

    const result = mergeStringsAndNumbers(strInput, numInput);
    console.log(`Merged Output: ${result}`);

    // Define expected outputs for test cases
    const expectedOutput = generateExpectedOutput(strInput, numInput);

    if (result === expectedOutput) {
        console.log('Test Passed');
        return true; // Passes CI
    } else {
        console.log('Test Failed');
        return false; // Fails CI
    }
};

// Function to generate expected output based on inputs
const generateExpectedOutput = (str, nums) => {
    let expected = '';
    const maxLength = Math.max(str.length, nums.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < str.length) expected += str[i];
        if (i < nums.length) expected += nums[i];
    }
    
    return expected;
};

// Run tests
runTests();
