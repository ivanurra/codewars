// Details
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.

// Example
// Running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

// SOLUTION

function spacey(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if(newArr.length < 1) {
        newArr.push(array[i])
      } else {
        newArr.push(newArr[i-1] + array[i])
      }
    }
    return newArr;
  }