function is_permutation_of_palindrome(customStr) {
    const charFreq = {};
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

console.log(is_permutation_of_palindrome("tact coa"));
console.log(is_permutation_of_palindrome("hamster"));
