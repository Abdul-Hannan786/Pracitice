// Palindrome: Check if a string is the same when reversed
// const checkPalindrome = (text) => {
//   const textArr = text.split("");
//   const reversedArr = textArr.reverse();
//   const joinedText = reversedArr.join("");

//   if (text.toUpperCase() === joinedText.toUpperCase()) {
//     console.log(`Hurrah!! The Word ${text} is a palindrome`);
//   } else {
//     console.log(`Sorry!! The Word ${text} is not a palindrome`);
//   }
// };
// checkPalindrome("madam");
// checkPalindrome("hannah");
// checkPalindrome("swimming");

// Anagram: Check if two strings are anagrams ("listen", "silent" → true)
// const checkAnagram = (firstWord, secondWord) => {
//   if (firstWord.length !== secondWord.length) {
//     console.log("Sorry! The word is not an anagram");
//     return
//   }
//   const word = firstWord.split("");
//   const Word2 = secondWord.split("");

//   const sortedWords = word.sort();
//   const sorted2Words = Word2.sort();

//   const joinedWord = sortedWords.join("");
//   const joined2Word = sorted2Words.join("");

//   if (joinedWord.toUpperCase() === joined2Word.toUpperCase()) {
//     console.log("Hurrah! The word is an anagram");
//   } else {
//     console.log("Sorry! The word is not an anagram");
//   }
// };
// checkAnagram("silent", "listen");

// Reverse a string without using .reverse()
// const reverseString = (text) => {
//   const arr = text.split("");
//   const newArr = [];
//   for (i = text.length; i > 0; i--) {
//     newArr.push(arr[i - 1]);
//   }
//   const reversedText = newArr.join("");
//   console.log(reversedText);
// };
// reverseString("horse");

// Count vowels in a string
// const countVowels = (string) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       count++;
//     }
//   }

//   console.log(count);
// };
// countVowels("hannan");

// Find the largest number in an array without using Math.max()
// const findLargestNumber = (numArr) => {
//   let largestNum = numArr[0];

//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] > largestNum) {
//       largestNum = numArr[i];
//     }
//   }
//   console.log(largestNum);
// };
// findLargestNumber([1, 2, 3, 50, 52, 5201210, 52132, 856, 52, 542, 5235]);

// Remove duplicates from an array (try it with Set and without).
// const removeDuplicateFromArray = (arr) => {
// Without Set
// const uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
// }
// console.log(uniqueArr);
// };
// removeDuplicateFromArray([3, 4, 5, 4, 6, 7]);

// FizzBuzz: For 1 to 100, print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for both.
// const fizzBuzz = () => {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz", i);
//     } else if (i % 3 === 0) {
//       console.log("Fizz", i);
//     } else if (i % 5 === 0) {
//       console.log("Buzz", i);
//     }
//   }
// };

// fizzBuzz();

// Two Sum: Given an array and a target, return the indices of two numbers that add up to the target.
// const findIndices = (numArr, target) => {
//   let indicedNumberArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     for (let j = 0; j < numArr.length; j++) {
//       if (numArr[i] + numArr[j] === target) {
//         if (!indicedNumberArr.includes(i) || !indicedNumberArr.includes(j)) {
//           indicedNumberArr.push(i);
//           indicedNumberArr.push(j);
//           return indicedNumberArr;
//         }
//       }
//     }
//   }
// };

const findIndicess = (num, target) => {
  let indicedNumArr = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        indicedNumArr.push(i);
        indicedNumArr.push(j);
        return indicedNumArr;
      }
    }
  }
};

console.log(findIndicess([5, 6, 3, 4], 9));
console.log(findIndicess([0, 3, 0, 3], 3));

// console.log(findIndices([6, 5, 7, 9, 3, 8, 1], 9));

// Flatten a nested array: [1, [2, [3, 4]]] → [1, 2, 3, 4].
// const flattenArray = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.push(...flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };
// console.log(flattenArray([1, [2, [3, 4]]]));

// Character frequency: Count how many times each character appears in a string (use an object or Map).

// const countFrequency = (string) => {
// const stringArr = string.split("")
//   const result = {};
//   for (let i = 0; i < string.length; i++) {
//     if (result[string[i]]) {
//       result[string[i]] += 1;
//     } else {
//       result[string[i]] = 1;
//     }
//   }
//   return result
// };
// console.log(countFrequency("Hello"))

// Factorial and Fibonacci: Write both, first with loops, then with recursion.
// const loopFunc = (num) => {
  // Factorial
  // let factorial = 1;
  // for (let i = num; i >= 1; i--) {
  //   factorial *= i;
  // }
  // return factorial;
// };
// console.log(loopFunc(6));

// Capitalize the first letter of every word in a sentence.

// const capitalize = (sentence) => {
//   const arr = sentence.split(" ");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }

//   const joinedSentence = arr.join(" ");
//   console.log(joinedSentence);
// };

// capitalize("he is a good boy");
