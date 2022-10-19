const tipButton = document.querySelectorAll(".same");
const resetButton = document.querySelector("#reset");
const input = document.querySelector("#bill");
const persentCal = document.getElementsByClassName("same");
// ----------------------------------------------------
// ----------------------------------------------------

let amountBill = 0;
let percent = 0;
let peopleAmount = 0;
let amount = 0;
let allAmount = 0;

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------



function checkValue() {
  console.log(amountBill)
  
}
const clicked = document.getElementsByClassName('click');

function tipCalculation () {
  // console.log(amountBill = (amountBill * clicked[0].value) / 100);
  if (input.value == '') {
    console.log('input is empty')
  } else if (amountBill > 0 && document.querySelector('button').classList.contains('click')) {
    console.log(amountBill = amountBill * document.querySelector("#bill").value)  
  }
}


// get value of input 
input.oninput = function () {
  amountBill = input.value;
  checkValue();
  tipCalculation();
  
};

// click remove-add on percent buttons
function removeClick() {
  for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].classList.remove("click");
  }
}

// clicking on tip buttons
for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", (h) => {
    removeClick();
    // class add when we're clicking
    h.target.classList.add("click");
    let targetValue = h.target.value
    console.log(targetValue);


    // if button contains click class
    const active = document.querySelector('button')
    const isActive = active.classList.contains("click");
    // 
    if(input.value == '') {
      console.log('its empty')      
    } else if (isActive == 'true') {
      tipCalculation();
    }

  });
}
// ----------------------------------------------------
