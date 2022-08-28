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

window.addEventListener("load", startcalc);

function startcalc() {
  document.querySelector("#calculate").addEventListener("click", calculate);
}

function calculate() {
  //read the first number
  let firstnumber = document.getElementById("firstnumber").value;
  let operator = document.getElementById("operator").value;
  let secondnumber = document.getElementById("secondnumber").value;
  let result = document.getElementById("results").value;
  console.log(firstnumber);
  console.log(operator);
  if (operator === "add") {
    console.log(firstnumber + secondnumber);
  }
}
