import './style.css';

/* Q1:FizzBuzz */
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

/* Q2: Two Sum II - Input Array Is Sorted */
let resultIndex = checkTarget([2, 3, 4, 5], 6); /* Pass input values here */
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
