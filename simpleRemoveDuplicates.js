// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3

// followed by removing a 4 at index 1

// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

// SOLUTION

function solve(arr){
    // I create a new empty array
    let newArray = []
    while (arr.length > 0) {
      // Pop method removes the last element from an array and returns its value to the method that called it.
      const removeElem = arr.pop()
      // If the new array (newArray) doesnt include the deleted element (removeElem, insert it into the new array.
      if (!newArray.includes(removeElem)){
        newArray.push(removeElem)
      }
    }
    return newArray.reverse()
}

// THE BEST

function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}