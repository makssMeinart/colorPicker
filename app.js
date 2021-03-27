const buttons = document.querySelectorAll("[data-operation]")
let counterValue = document.querySelector("#value")

// Check what button was clicked on
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    switch (e.target.getAttribute("data-operation")) {
      case "decrease":
        counterValue.innerText--
        if(counterValue.innerText < 0) counterValue.setAttribute("class", "negative")
        if(counterValue.innerText == 0) counterValue.removeAttribute("class")
        break
      case "reset":
        counterValue.innerText = 0
        // If Reset the value goes blue
        counterValue.removeAttribute("class")
        break
      case "increase":
        counterValue.innerText++
        // Do a check if more than 0
        if(counterValue.innerText > 0) counterValue.setAttribute("class", "positive")
        if(counterValue.innerText == 0) counterValue.removeAttribute("class")
        break
    }
  })
})