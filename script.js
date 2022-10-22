const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

const getValue = (input) => {
  display.value += input;
};

const calculate = () => {
  if (display.value) {
    display.value = display.value.replace("x", "*");
    display.value = eval(display.value);
  }
};

const allClear = () => {
  display.value = "";
};

const deleteLastEntry = () => {
  display.value = display.value.slice(0, -1);
};

const handleClick = (event) => {
  event.preventDefault();
  switch (event.target.value) {
    case "=": {
      calculate();
      break;
    }
    case "reset": {
      allClear();
      break;
    }
    case "delete": {
      deleteLastEntry();
      break;
    }
    default: {
      getValue(event.target.value);
    }
  }
};

for (const button of buttons) {
  button.addEventListener("click", handleClick);
}
