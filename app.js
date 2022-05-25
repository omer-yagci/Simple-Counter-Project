const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("counter");
let sum = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("add")) {
      sum++;
    }
    if (button.classList.contains("lower")) {
      sum--;
    }
    value.innerHTML = sum;
    if (sum < 0) {
      value.style.color = "red";
    }
    if (sum > 0) {
      value.style.color = "green";
    }
    if (sum === 0) {
      value.style.color = "blue";
    }
  });
});
