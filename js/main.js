const tipButton = document.querySelectorAll(".same");
const resetButton = document.querySelector("#reset");
const input = document.querySelector("#bill");
const persentCal = document.getElementsByClassName("same");
// ----------------------------------------------------
// ----------------------------------------------------

let percent = 0;
let peopleAmount = 0;
let amount = 0;
let allAmount = 0;
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------


let amountBill = 0;
function checkValue() {
  console.log(amountBill)
  
}

function tipCalculation () {
  console.log(amountBill /= 2)
}

// click remove-add on percent buttons
function removeClick() {
  for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].classList.remove("click");
  }
}




input.oninput = function () {
  amountBill = input.value;
  checkValue();
  tipCalculation();
};



for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", (h) => {
    removeClick();
    h.target.classList.add("click");
    console.log(h.target.value)
  });
}


// ----------------------------------------------------
