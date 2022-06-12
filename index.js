import './style.css';

/* Q1:FizzBuzz: 
Given an integer n, return a string array answer (1-indexed) where:
● answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
● answer[i] == "Fizz" if i is divisible by 3.
● answer[i] == "Buzz" if i is divisible by 5.
● answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output:
["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14"
,"FizzBuzz"]
*/
let result = fizzBuzz(5); /* Pass input value here */
console.log(result); /* Look output here */
function fizzBuzz(input) {
  let ans = [];
  for (let i = 1; i <= input; i++) {
    if (divisibleBy3(i) && divisibleBy5(i)) {
      ans.push('FizzBuzz');
    } else if (divisibleBy3(i)) {
      ans.push('Fizz');
    } else if (divisibleBy5(i)) {
      ans.push('Buzz');
    } else {
      ans.push(i.toString());
    }
  }
  return ans;
}
function divisibleBy3(value) {
  return value % 3 == 0 ? true : false;
}
function divisibleBy5(value) {
  return value % 5 == 0 ? true : false;
}

/* Q2: Two Sum II - Input Array Is Sorted:
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find
two numbers such that they add up to a specific target number.

Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We
return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We
return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We
return [1, 2].

*/
let resultIndex = checkTarget([2, 3, 1, 5], 6); /* Pass input values here */
console.log(resultIndex); /* Look output here */
function checkTarget(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    let initialValue = arr[i];
    for (let j = i; j < arr.length - 1; j++) {
      let sum = initialValue + arr[j + 1];
      if (sum == targetValue) {
        return [i + 1, j + 2];
      }
    }
  }
}
