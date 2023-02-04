var button_obj = document.getElementsByClassName("button");
var display_obj = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < button_obj.length; i++) {
  button_obj[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "AC") {
      display_obj.innerText = null;
    } else if (
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "%"
    ) {
      operator = value;
      operand1 = parseFloat(display_obj.innerText);
      display_obj.innerText = null;
    } else if (value == "=") {
      if (operator != null) {
        operand2 = parseFloat(display_obj.innerText);
        display_obj.innerText = eval(
          operand1 + " " + operator + " " + operand2
        );
      } else {
        display_obj.innerText = "Error";
      }
    } else if (value == "sign") {
      display_obj.innerText = eval(parseFloat(display_obj.innerText) * -1);
    } else if (value == ".") {
      if (
        display_obj.innerText.length &&
        !display_obj.innerText.includes(".")
      ) {
        display_obj.innerText += value;
      }
    } else {
      display_obj.innerText += value;
    }
  });
}

document.addEventListener("keypress", function (event) {
  var key;
  key = event.keyCode;
  var value = String.fromCharCode(key);
  console.log(value);
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    operator = value;
    operand1 = parseFloat(display_obj.innerText);
    display_obj.innerText = null;
  } else if (key == "13") {
    if (operator != null) {
      operand2 = parseFloat(display_obj.innerText);
      display_obj.innerText = eval(operand1 + " " + operator + " " + operand2);
    } else {
      display_obj.innerText = "Error";
    }
  } else if (value == ".") {
    if (display_obj.innerText.length && !display_obj.innerText.includes(".")) {
      display_obj.innerText += value;
    }
  } else if (value in numArray) {
    display_obj.innerText += value;
  }
});

// For Clearing display with delete Key

document.addEventListener("keydown", function (event) {
  var key;
  key = event.keyCode;

  if (key == "46") {
    display_obj.innerText = null;
  }
});
