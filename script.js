document.getElementById('click').addEventListener('click', displayMessage)

function displayMessage () {
  document.getElementById('paragraph').innerHTML = "Hi, my name is Abdullah Al-Rashid"
}

document.getElementById('button').addEventListener('click', displayText)

function displayText () {
  alert('Hello')
}
