const pagetwo = document.querySelector(".page-two");
const pageone = document.querySelector(".page-one");
const button = document.querySelector("button");
const digits = document.querySelectorAll(".digits");
const rate = document.querySelector("#rate");
var rates;
function pageSwitch() {
  pageone.style.display = "none";
  pagetwo.style.display = "block";
  rate.textContent = `You selected ${rates} out of 5`;
}
function displayRate(e) {
  rates = e.currentTarget.textContent;
}

button.addEventListener("click", pageSwitch);
// to display ratings dynmically
for (let i = 0; i < 5; i++) {
  digits[i].addEventListener("click", displayRate);
}
