let counter = document.querySelector('counter-count')
let title = document.querySelector('title')

let count = 0

function increment() {
  count++
  title.innerHTML = count
  counter.innerHTML = count
}

document.onkeyup = function(event) {
  if (event.code == "Space") {
    increment()
  }
}

document.addEventListener('click', increment)
