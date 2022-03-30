// *Variables*
// Declare a variable, reassign it to your fav holiday,
// make sure it is in all caps, and print the value to the console
let favHoliday = "Halloween";
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);


//Declare a variable, assign it a string, alert the last three 
//characters in the string (Use your google-fu and the MDN)
let string2 = "Hello World!";
alert(string2.slice(string2.length - 3));

// *Functions*
// Create a function that takes in 5 numbers. 
//Subtract all five from 100. Alert the absolute value of the 
//difference. Call the function.
function subFrom100(n1,n2,n3,n4,n5){
    let difference = 100 - n1 - n2 -n3 - n4 - n5;
    alert(Math.abs(difference));
}

subFrom100(4,5,6,7,8);

// Create a function that takes in 3 numbers. 
//Console log lowest and highest values. Call the function.
function highAndLow(n1,n2,n3){
    let min = Math.min(n1,n2,n3);
    let max = Math.max(n1,n2,n3);
    console.log(`The lowest is ${min}, and the highest is ${max}`);
}

highAndLow(100,200,300);

// *Conditionals*
//Create a function that returns heads or tails 
//randomly and as fairly as possible. Call the function.
const headsOrTails = () => Math.random() < .5 ? 'heads' : 'tails';
//console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console 
//log the result of heads or tails using the previous function x 
//times where x is the number passed into the function. Call the function.

function flipFlip(n){
    for(let i = 1; i <= n; i++){
        let result = headsOrTails();
        console.log(result);
    }

}

flipFlip(10);