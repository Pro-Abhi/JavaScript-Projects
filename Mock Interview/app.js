// show / hide input box
let btn = document.querySelector(".btn");
let input = document.querySelector(".box");

btn.addEventListener("click", onOff);

function onOff() {
  if (input.style.display == "block") {
    input.style.display = "none";
  } else {
    input.style.display = "block";
  }
}

