function mergeStringsAndNumbers(str1, str2) {
    let mergedResult = '';
    let maxLength = Math.max(str1.length, str2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) {
        mergedResult += str1[i]; // Add character from str1
      }
      if (i < str2.length) {
        mergedResult += str2[i]; // Add character from str2
      }
    }
  
    return mergedResult;
  }
  
  module.exports = mergeStringsAndNumbers;
  