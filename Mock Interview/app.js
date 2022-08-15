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

let close_btn = document.querySelector(".fa-xmark")

close_btn.addEventListener("click", off)
function off(){
  input.style.display = "none"
}

