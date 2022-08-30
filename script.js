//check rounded feature and round number
//append result to end of list
//scroll list to the bottom

"use strict";
window.addEventListener("load", startcalc);

const resultsList = document.getElementById("results");
let result;

function startcalc() {
  document.querySelector("#calculate").addEventListener("click", calculate);
}

function calculate() {
  //read the first number
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let operator = document.getElementById("operator").value;
  let secondnumber = Number(document.getElementById("secondnumber").value);
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

  dorounding();
}

function dorounding() {
  showResults();
}

function showResults() {
  //show the result
  document.getElementById("firstnumber").value = result;
  let li = document.createElement("li");
  li.textContent = result;
  // li.appendChild(document.createTextNode("four"));
  resultsList.append(li);
  resultsList.scrollTo(0, 100000000);
}

document.getElementById("clear").addEventListener("click", clearCalc);

function clearCalc() {
  while (resultsList.hasChildNodes()) {
    resultsList.removeChild(resultsList.firstChild);
  }
}
