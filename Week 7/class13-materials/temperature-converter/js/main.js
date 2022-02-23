//Write your pseduo code first! 


//value now equals Fahrenheit


document.querySelector('#convert').addEventListener('click', convert)

function convert() {

    //get value in celsius
    let temp = document.querySelector('#celsiusInput').value;

    //convert to farenheight
    temp = temp * 9/5 + 32;

    //insert into DOM
    document.querySelector('#fTemp').innerText = temp;
}