// merger.js

function mergeStringsAndNumbers(str1, str2) {
    // If either string is empty, return the other
    if (!str1) return str2;
    if (!str2) return str1;

    let merged = '';
    const maxLength = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) merged += str1[i]; // Append character from str1
        if (i < str2.length) merged += str2[i]; // Append character from str2
    }

    return merged;
}

module.exports = mergeStringsAndNumbers;
