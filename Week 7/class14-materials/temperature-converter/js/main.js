//Write your pseduo code first! 

document.querySelector('#convert').addEventListener('click', convert)

//input temp in celsius

function convert() {

    let temp = document.querySelector('#celsius').value;
    
    temp = temp * 9 / 5 + 32;

    document.querySelector('#temp').innerText = temp;
}
//convert celsius into farenhieght
//show new temperature in farenheight