// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.

// MY SOLUTION

function evensAndOdds(num){
    if (num % 2 === 0){
      return (num >>> 0).toString(2)
    } else {
      let hex = num.toString(16)
      return hex
    }
  }

//   BEST SOLUTION

  function evensAndOdds(num){
    return (num&1) ? num.toString(16) : num.toString(2);
  }