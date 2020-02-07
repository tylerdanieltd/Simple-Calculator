function calc() {
  var first = parseInt(document.querySelector("#value1").value);
  var second = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "addition") {
    calculate = first + second;
  }
  else if (op == "subtraction") {
    calculate = first - second;
  }
  else if (op == "division") {
    calculate = first / second;
  }
  else if (op == "multiplication") {
    calculate = first * second;
  }
  console.log(calculate);
  document.querySelector("#result").innerHTML = calculate;
}
