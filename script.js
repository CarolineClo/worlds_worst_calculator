//Read #firstnumber
//read second number
//read operator
//if operator is "add" + 1st and second number
//if operator is "sub" 1st number minus second number
//if operator is "mul" 1st number * second number
//if operator is "div" 1st number devided by second number
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
  let result = document.getElementById("results").value;
  console.log(firstnumber);
  if (operator === "add") {
    console.log(firstnumber + secondnumber);
  }
  if (operator === "sub") {
    console.log(firstnumber - secondnumber);
  }
  if (operator === "mul") {
    console.log(firstnumber * secondnumber);
  }
  if (operator === "div") {
    console.log(firstnumber / secondnumber);
  }
}
