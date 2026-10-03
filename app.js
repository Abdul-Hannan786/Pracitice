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

