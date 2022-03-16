//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(a,b){
    let c = a - b;
    alert(c);
}

subTwoNumsAndAlert(50,30);
//create a function that divides three numbers and console logs the quotient
function divideThreeNum(a,b,c){
    let d = a / b / c;
    console.log(d);
}

//create a function that multiplys three numbers and returns the product
function multThreeNums(a,b,c){
    let d = a * b * c;
    return d;
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(a,b,c){
    let sum = a + b;
    let quotient = sum % c;
    return quotient;
}

console.log(addTwoAndDivide(3,3,2));


//---Hard
//create a function that takes in 4 numbers. 
//Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
 function idk(a,b,c,d){
     let product = a * b;

     if (product > 100){
        let sum = c + d
    } else if (sum < 100){

    } else if (sum == 100){

    }
 }