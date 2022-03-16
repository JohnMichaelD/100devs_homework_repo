//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function savage21(n){
    for (i = 0; i < n; i++){
        document.querySelector('#savageSays').innerText += "21";
    }
}

console.log(savage21(21));
//Bonus can you make it print '21' 21 times to the dom?
