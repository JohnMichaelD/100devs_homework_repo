//Create an array of movie titles.
// Loop through the array and add each element to the h2.
let movies = ['Big Daddy', 'Happy Gilmore','Mr. Deeds'];

for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i];
}

//Create an array of numbers. 
//Loop through the array and add three to each number and replace the old number
let nums = [10,20,30];

nums.forEach((item,i) => {
    nums[i] = item + 3;
});

//Find the average of all the numbers from question three
let sum = 0;

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
}

let average = (sum / nums.length);
