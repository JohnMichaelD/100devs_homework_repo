//Arrays

//Create and array of tv shows. 
//Loop through and print each show to the console
const tvShows = ["That 70's show", "Spongebob", "Hey Arnold"];

tvShows.forEach( show => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even 
//number from the previous Arrays
const nums = [1,2,3,4];

let onlyEvens = arr => arr.filter( n => n % 2 === 0);

console.log( onlyEvens(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secLowAndHigh(arr){
    let sorted = arr.sort((a,b) => a-b);
    alert(sorted[1] + sorted[sorted.length - 2]);
}

secLowAndHigh([2,3,1,4,5]);
