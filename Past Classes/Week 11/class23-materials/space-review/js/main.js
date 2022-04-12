//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayOfNums = [1,2,3,4,5,6,7,8,9,10];
let sum = arrayOfNums.reduce((a, b) => a + b, 0)
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arraySquared(arr){
    let newArr = arr.map(x => x ** 2);
    return newArr;
}

//leons way

//let newArr = nums => nums.map(x => x ** 2);

console.log(arraySquared(arrayOfNums));

//Create a function that takes a string
//Print the reverse of that string to the console
let unoReverse = str => console.log( str.split('').reverse().join(''));


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert( str === str.split('').reverse().join(''));

palindromeCheck('racecar');