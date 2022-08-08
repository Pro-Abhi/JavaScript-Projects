let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));
// console.log(buttons);

display.addEventListener("mouseover", () => {
  display.style.cursor = "text";
});

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "A/C":
        display.innerText = "";
        break;
      case "⮨":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "Enter":
        if (display.innerText) {
          display.innerText = eval(display.innerText);
        } else {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
