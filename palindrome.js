/* Using a dictionary to determine if an input is a palindrome
 *  Returns true if the input is a palindrome, otherwise it will return false
 *
 *  @param customStr The string that will be checked
 *
 */
function isPermutationOfPalindrome(customStr) {
  const charFreq = {};
  // Ignores whitespace in the customStr
  const loopStr = customStr.replace(/ /g, "");

  // Creating a dictionary of characters(keys) with their frequency(values)
  for (let i = 0; i < loopStr.length; i++) {
    const char = loopStr[i];
    if (char in charFreq) {
      charFreq[char]++;
    } else {
      charFreq[char] = 1;
    }
  }

  var odd_count = 0;

  // Looping through keys in frequency dictionary to get the values
  // Palindrome can have no more than one odd amount of a character
  for (var key in charFreq) {
    var value = charFreq[key];

    if (value % 2 != 0) {
      odd_count++;
    }
  }

  return odd_count <= 1;
}

console.log("Expected output true:\t", isPermutationOfPalindrome("tact coa"));
console.log("Expected output false:\t", isPermutationOfPalindrome("hamster"));
console.log("Expected output true:\t", isPermutationOfPalindrome("mom"));
console.log("Expected output false:\t", isPermutationOfPalindrome("calico"));
