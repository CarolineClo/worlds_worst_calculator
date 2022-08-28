//check rounded feature and round number
//write result in result list
//append result to end of list
//scroll list to the bottom

"use strict";
window.addEventListener("load", startcalc);

function startcalc() {
  document.querySelector("#calculate").addEventListener("click", calculate);
}

function calculate() {
  //read the first number

  let firstnumber = Number(document.getElementById("firstnumber").value);
  let operator = document.getElementById("operator").value;
  let secondnumber = Number(document.getElementById("secondnumber").value);
  let result;
  //const parent = document.getElementById("results");

  if (operator === "add") {
    result = firstnumber + secondnumber;
  }
  if (operator === "sub") {
    console.log(firstnumber - secondnumber);
    result = firstnumber - secondnumber;
  }
  if (operator === "mul") {
    result = firstnumber * secondnumber;
  }
  if (operator === "div") {
    result = firstnumber / secondnumber;
  }

  document.getElementById("firstnumber").value = result;
}
