const root = document.documentElement;
const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");
const themeSelector = document.getElementById("theme-selector");
const indicator = document.getElementById("indicator");

let currentTheme;

const applyTheme = () => {
  if (currentTheme === 1) {
    root.style.setProperty("--background", "#3a4663");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--calculator-background", "#242d44");
    root.style.setProperty("--display-background", "#181f33");
    root.style.setProperty("--main-button", "#eae3dc");
    root.style.setProperty("--main-inset", "inset 0px -4px 0px #b3a497");
    root.style.setProperty(
      "--main-inset-clicked",
      "inset 0px -2px 0px #b3a497"
    );
    root.style.setProperty("--main-text", "#434a59");
    root.style.setProperty("--secondary-button", "#647198");
    root.style.setProperty("--secondary-inset", "inset 0px -4px 0px #414e73");
    root.style.setProperty(
      "--secondary-inset-clicked",
      "inset 0px -2px 0px #414e73"
    );
    root.style.setProperty("--equal-button", "#d03f2f");
    root.style.setProperty("--equal-inset", "inset 0px -4px 0px #93261a");
    root.style.setProperty(
      "--equal-inset-clicked",
      "inset 0px -2px 0px #93261a"
    );
    root.style.setProperty("--equal-text", "#ffffff");
    indicator.style.left = "0";
  }
  if (currentTheme === 2) {
    root.style.setProperty("--background", "#e6e6e6");
    root.style.setProperty("--text", "#36362c");
    root.style.setProperty("--calculator-background", "#d2cdcd");
    root.style.setProperty("--display-background", "#eeeeee");
    root.style.setProperty("--main-button", "#e5e4e1");
    root.style.setProperty("--main-inset", "inset 0px -4px 0px #a79e91");
    root.style.setProperty(
      "--main-inset-clicked",
      "inset 0px -2px 0px #a79e91"
    );
    root.style.setProperty("--main-text", "#36362c");
    root.style.setProperty("--secondary-button", "#378187");
    root.style.setProperty("--secondary-inset", "inset 0px -4px 0px #1b6066");
    root.style.setProperty(
      "--secondary-inset-clicked",
      "inset 0px -2px 0px #1b6066"
    );
    root.style.setProperty("--equal-button", "#c85402");
    root.style.setProperty("--equal-inset", "inset 0px -4px 0px #873901");
    root.style.setProperty(
      "--equal-inset-clicked",
      "inset 0px -2px 0px #873901"
    );
    root.style.setProperty("--equal-text", "#ffffff");
    indicator.style.left = "calc(50% - 0.5rem)";
  }
  if (currentTheme === 3) {
    root.style.setProperty("--background", "#17062a");
    root.style.setProperty("--text", "#ffe53d");
    root.style.setProperty("--calculator-background", "#1e0936");
    root.style.setProperty("--display-background", "#1e0936");
    root.style.setProperty("--main-button", "#331c4d");
    root.style.setProperty("--main-inset", "inset 0px -4px 0px #881c9e");
    root.style.setProperty(
      "--main-inset-clicked",
      "inset 0px -2px 0px #881c9e"
    );
    root.style.setProperty("--main-text", "#ffe53d");
    root.style.setProperty("--secondary-button", "#56077c");
    root.style.setProperty("--secondary-inset", "inset 0px -4px 0px #be15f4");
    root.style.setProperty(
      "--secondary-inset-clicked",
      "inset 0px -2px 0px #be15f4"
    );
    root.style.setProperty("--equal-button", "#00ded0");
    root.style.setProperty("--equal-inset", "inset 0px -4px 0px #6cf9f1");
    root.style.setProperty(
      "--equal-inset-clicked",
      "inset 0px -2px 0px #6cf9f1"
    );
    root.style.setProperty("--equal-text", "#1a2327");
    indicator.style.left = "calc(100% - 1rem)";
  }
};

if (localStorage.getItem("current-theme")) {
  currentTheme = JSON.parse(localStorage.getItem("current-theme"));
  console.log(currentTheme);
  applyTheme();
} else {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      currentTheme = 1;
    } else {
      currentTheme = 2;
    }
  }
  applyTheme();
}

const handleThemeChange = () => {
  currentTheme++;
  if (currentTheme === 4) currentTheme -= 3;
  localStorage.setItem("current-theme", currentTheme);
  applyTheme();
};

const getValue = (input) => {
  display.value += input;
};

const calculate = () => {
  if (display.value) display.value = eval(display.value.replace(/x/g, "*"));
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
themeSelector.addEventListener("click", handleThemeChange);
