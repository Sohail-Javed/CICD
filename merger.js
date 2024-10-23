// merger.js

// Function to merge strings and numbers alternately
function mergeStringsAndNumbers(str, numStr) {
    let merged = '';
    const maxLength = Math.max(str.length, numStr.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < str.length) {
            merged += str[i];
        }
        if (i < numStr.length) {
            merged += numStr[i];
        }
    }
    
    return merged;
}

// Function to process the merged result (example: counting vowels)
function processMergedResult(mergedString) {
    const vowels = mergedString.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0; // Returns the count of vowels
}

module.exports = { mergeStringsAndNumbers, processMergedResult };
