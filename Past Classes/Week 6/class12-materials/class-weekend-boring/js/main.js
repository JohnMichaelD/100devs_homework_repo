document.querySelector('#check').addEventListener('click', check)

function check() {

    let word = document.querySelector('#day').value

    const day = word.toLowerCase()

  //Conditionals go here
  if (day == "monday" || day == "wednesday" || day == "friday") {
      document.querySelector('#placeToSee').innerText = "BOOORRRRRRIIINNNGGGG"
  } else if (day == "tuesday" || day == "wednesday") {
      document.querySelector('#placeToSee').innerText = "Class Day"
  } else {
      document.querySelector('#placeToSee').innerText = "Weekend"
  }
}
