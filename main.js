let display = document.getElementById("screen");
let buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "CE" &&
    button.textContent != "AC" &&
    button.textContent != "*" &&   
    button.textContent != "÷" && 
    button.textContent != "%") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "CE") {
      clear();
    } else if (button.textContent === "AC") {
      allclear();
    } else if (button.textContent === "*") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "%") {
      percent();
    } 
  });
});

function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}

function equals() {
    if ((display.value).indexOf("^") > -1) {
      var base = (display.value).slice(0, (display.value).indexOf("^"));
      var exponent = (display.value).slice((display.value).indexOf("^") + 1);
      display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } else {
      display.value = eval(display.value)
      checkLength()
      syntaxError()
    }
  }

function clear() {
  display.value = "";
}

function allclear() {
    display.value = "";
  }

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "÷";
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function percent() {
  display.value = display.value / 100;
}