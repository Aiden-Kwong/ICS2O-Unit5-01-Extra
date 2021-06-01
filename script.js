let x = 0

function myFunction () {
  document.getElementById('change').innerHTML = 'This message was changed with a script!'
}

function changeColor () {
  document.getElementById('color').style.color = '#49111c'
}

function buttonClicks () {
  x++
  if (x === 5) {
    document.getElementById('varchange').innerHTML = 'This message changed after 5 clicks on the button!'
  }
}
