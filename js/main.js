const buttons = document.querySelectorAll(".same");

let billInput = document.getElementById("bill");
let billValue = 0;
let numberInput = document.getElementById("numpeople");
let numberValue = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // get the tip percentage from the button value
    const tipPercentage = button.value; // = buttons with %

    // get the bill amount from the bill input field
    const bill = document.getElementById("bill").value; // = first input Bill

    // get the number of people from the numpeople input field
    const numPeople = document.getElementById("numpeople").value; // = second input with num of people

    // calculate the tip amount and total amount

    const totalPerson = bill / numPeople;
    const tipAmount = (totalPerson * tipPercentage) / 100;
    // display the tip amount and total amount on the page
    document.getElementById("tip-amount").innerHTML = tipAmount.toFixed(2);
    document.getElementById("total-amount").innerHTML = totalPerson.toFixed(2);
  });
});

// add event listener to reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  // reset all input fields
  document.getElementById("bill").value = "";
  document.getElementById("numpeople").value = "";

  // clear tip amount and total amount
  document.getElementById("tip-amount").textContent = "$0.00";
  document.getElementById("total-amount").textContent = "$0.00";

  document.getElementById('alert-zero').style.opacity = '0'
});

// make shure user doesnt enter negative numbers
numberInput.addEventListener("input", function () {
  numberValue = Math.max(0, this.value);
  this.value = numberValue;
});

billInput.addEventListener("input", function () {
  billValue = Math.max(0, this.value);
  this.value = billValue;
});

// warning appereance

billInput.addEventListener("click", function () {
  if (this.value == 0) {
    let message = document.getElementById("alert-zero");
    
    message.style.opacity = '1';
  


    // add change event listener to remove message when input value changes
    this.addEventListener("change", function () {
      if (this.value != 0) {
        message.style.opacity = '0'
      }
    });
  }
});

numberInput.addEventListener("click", function () {
    if (this.value == 0) {
      let message = document.getElementById("alert-zero2");
  
      message.style.opacity = '1'
      // add change event listener to remove message when input value changes
      this.addEventListener("change", function () {
        if (this.value != 0) {
          message.style.opacity = 0;
        }
      });
    }
  });
  
