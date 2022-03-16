//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 17;

if (age < 16) {
    alert('you cant drive');
} else if (age > 16 && age < 18) {
    alert('you cant hate from outside the club, because they cant even get in');
} else if (age > 18 && age < 21) {
    alert('you can not drink');
} else if (age > 21 && age < 25) {
    alert('you can not rent cars affordably');
} else if (age > 25 && age < 30) {
    alert('can not rent fancy cars affordably');
} else if (age > 30) {
    alert('you dead homie')
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

const h1Holder = document.querySelector('h1');

h1Holder.addEventListener('click', insertCond);

