// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

// Example: 'man' should return [ '01101101', '01100001', '01101110' ]


// SOLUTION

function wordToBin(str) {
    const array = str.split('').map((char) => {
        return char.charCodeAt().toString(2).padStart(8, 0);
    })
    return array;
}

// METHODS

// split() Split a string into an array of substrings.
// map() Return an array with the square root of all the values in the original array.
// charCodeAt() return the Unicode of the first character in a string (the Unicode value for "H").
// toString() convert a number to a string.
// padStart() method pads a string with another string.