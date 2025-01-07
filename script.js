let display = document.getElementById("display");
let powerButton = document.querySelectorAll(".btn")[1];
let isOn = false;

let isFactorial = false;
let isPowerMode = false;
let base = 0;

window.onload = function () {
  togglePower();
};

function togglePower() {
  isOn = !isOn;
  if (isOn) {
    powerButton.textContent = "off";
    display.removeAttribute("disabled");
    display.value = "0";
  } else {
    powerButton.textContent = "on";
    display.setAttribute("disabled", "true");
    clearDisplay();
  }
}

function clearDisplay() {
  if (!isOn) {
    display.value = "";
  } else {
    display.value = "0";
  }
}

function appendToDisplay(value) {
  if (!isOn) return;
  if (display.value === "0" && value !== "C") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  if (!isOn) return;

  try {
    if (isFactorial) {
      let num = parseFloat(display.value);
      if (num < 0) {
        display.value = "Error"; 
      } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        display.value = result;
      }
      isFactorial = false; 
    } else if (isPowerMode) {
     
      let exponent = parseFloat(display.value);
      display.value = Math.pow(base, exponent);
      isPowerMode = false; 
    } else {

      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}
y
function backspace() {
  if (!isOn) return;
  display.value = display.value.slice(0, -1) || "0";
}

function factorial() {
  if (!isOn) return;
  isFactorial = true; 
}

function powerMode() {
  if (!isOn) return;
  base = parseFloat(display.value); 
  display.value = "0"; 
  isPowerMode = true; 
}
