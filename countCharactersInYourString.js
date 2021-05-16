// Count characters in your string - 6 Kyu

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// MY SOLUTION

function count(string) {
    const returnObject = {};

    for (let i = 0; i < string.length; i++) {
      if (returnObject.hasOwnProperty(string[i])) {
        returnObject[string[i]] += 1;
      } else {
        returnObject[string[i]] = 1;
      }
    }
    return returnObject;
  }
  
  count("aba") // {'a': 2, 'b': 1}.

// BEST SOLUTION

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }