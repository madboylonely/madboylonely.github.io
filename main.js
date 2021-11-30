// handle change theme
let styleMode = 1;
let numpad = document.querySelectorAll(".numpad");
let screen = document.getElementById("screen");

document.getElementsByClassName("mode-bg")[0].addEventListener("click", () => {
  styleMode = styleMode > 2 ? 1 : styleMode + 1;
  let modeSwitchStyle = document.getElementsByClassName("mode-switch")[0].style;
  let rootVariables = document.querySelector(":root").style;

  if (styleMode == 1) {
    modeSwitchStyle.left = "4px";
    modeSwitchStyle.backgroundColor = "hsl(6, 63%, 50%)";
    rootVariables.setProperty("--bg-first-main", "hsl(222, 26%, 31%)");
    rootVariables.setProperty("--bg-first-toggle", "hsl(223, 31%, 20%)");
    rootVariables.setProperty("--text-first-white", "hsl(0, 0%, 100%)");
    rootVariables.setProperty("--key-first-toggle", "hsl(6, 63%, 50%)");
    rootVariables.setProperty("--key-first-shadow1", "hsl(6, 70%, 34%)");
    screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    numpad[3].style.color = "hsl(0, 0%, 100%)";
    numpad[3].style.backgroundColor = "hsl(225, 21%, 49%)";
    numpad[3].style.boxShadow = "inset 0 -3px 1px 0 hsl(224, 28%, 35%)";
    numpad[16].style.color = "hsl(0, 0%, 100%)";
    numpad[16].style.backgroundColor = "hsl(225, 21%, 49%)";
    numpad[16].style.boxShadow = "inset 0 -3px 1px 0 hsl(224, 28%, 35%)";
    numpad[17].style.color = "hsl(0, 0%, 100%)";
    numpad.forEach((stl) => {
      return stl.classList.remove("numpad-third-style");
    });
  } else if (styleMode == 2) {
    modeSwitchStyle.left = "22px";
    modeSwitchStyle.backgroundColor = "hsl(6, 63%, 50%)";
    rootVariables.setProperty("--bg-first-main", "hsl(0, 0%, 90%)");
    rootVariables.setProperty("--bg-first-toggle", "hsl(0, 5%, 81%)");
    rootVariables.setProperty("--text-first-white", "hsl(221, 14%, 31%)");
    rootVariables.setProperty("--key-first-toggle", "hsl(6, 63%, 50%)");
    rootVariables.setProperty("--key-first-shadow1", "hsl(6, 70%, 34%)");
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    numpad[3].style.color = "hsl(0, 0%, 100%)";
    numpad[3].style.backgroundColor = "hsl(185, 42%, 37%)";
    numpad[3].style.boxShadow = "inset 0 -3px 1px 0 hsl(185, 58%, 25%)";
    numpad[16].style.color = "hsl(0, 0%, 100%)";
    numpad[16].style.backgroundColor = "hsl(185, 42%, 37%)";
    numpad[16].style.boxShadow = "inset 0 -3px 1px 0 hsl(185, 58%, 25%)";
    numpad[17].style.color = "hsl(0, 0%, 100%)";
    numpad.forEach((stl) => {
      stl.classList.remove("numpad-third-style");
    });
  } else {
    modeSwitchStyle.left = "42px";
    modeSwitchStyle.backgroundColor = "hsl(176, 100%, 44%)";
    rootVariables.setProperty("--bg-first-main", "hsl(268, 75%, 9%)");
    rootVariables.setProperty("--bg-first-toggle", "hsl(268, 71%, 12%)");
    rootVariables.setProperty("--text-first-white", "hsl(52, 100%, 62%)");
    rootVariables.setProperty("--key-first-toggle", "hsl(176, 100%, 44%)");
    rootVariables.setProperty("--key-first-shadow1", "hsl(177, 92%, 70%)");
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    numpad[3].style.color = "hsl(0, 0%, 100%)";
    numpad[3].style.backgroundColor = "hsl(281, 89%, 26%)";
    numpad[3].style.boxShadow = "inset 0 -3px 1px 0 hsl(285, 91%, 52%)";
    numpad[16].style.color = "hsl(0, 0%, 100%)";
    numpad[16].style.backgroundColor = "hsl(281, 89%, 26%)";
    numpad[16].style.boxShadow = "inset 0 -3px 1px 0 hsl(285, 91%, 52%)";
    numpad[17].style.color = "hsl(198, 20%, 13%)";
    numpad.forEach((stl, idx) => {
      if (idx == 3 || idx == 16 || idx == 17) return;
      else stl.classList.add("numpad-third-style");
    });
  }
});

// handle numpad
let screenValue = "";
let firstVariable;
let lastOperator = "";
numpad.forEach((pad, idx) => {
  pad.addEventListener("click", () => {
    if (idx == 3) {
      screenValue = screenValue.slice(0, -1);
      if (screenValue == "") screenValue = "0";
    } else if (idx == 16) {
      screenValue = "0";
      firstVariable = 0;
    } else if (idx == 12 && screenValue.includes(".")) {
    } else if (idx == 7) {
      firstVariable = (lastOperator == '') ? parseFloat(screenValue) : firstVariable + parseFloat(screenValue);
      lastOperator = "plus";
      screenValue = "0";
    } else if (idx == 11) {
      firstVariable = (lastOperator == '') ? parseFloat(screenValue) : firstVariable - parseFloat(screenValue);
      lastOperator = "minus";
      screenValue = "0";
    } else if (idx == 14) {
      firstVariable = (lastOperator == '') ? parseFloat(screenValue) : firstVariable / parseFloat(screenValue);;
      lastOperator = "devide";
      screenValue = "0";
    } else if (idx == 15) {
      firstVariable = (lastOperator == '') ? parseFloat(screenValue) : firstVariable * parseFloat(screenValue);;
      lastOperator = "multi";
      screenValue = "0";
    } else if (idx == 17) {
      // equal
      switch (lastOperator) {
        case "plus":
          firstVariable += parseFloat(screenValue);
          break;
        case "minus":
          firstVariable -= parseFloat(screenValue);
          break;
        case "devide":
          firstVariable /= parseFloat(screenValue);
          break;
        case "multi":
          firstVariable *= parseFloat(screenValue);
          break;
        default:
          break;
      }
      lastOperator = '';
      screenValue = firstVariable.toString();
      firstVariable = 0;
    } else if (screen.innerHTML == "0") {
      if (idx == 12) screenValue += pad.innerHTML;
      else screenValue = pad.innerHTML;
    } else screenValue += pad.innerHTML;
    // screen.innerHTML = screenValue;
    displayResult(screenValue);
  });
});

const displayResult = (number) => {
  let result = "";
  let dotPos = number.indexOf(".");
  let numAfterDot = "";

  if (number.length > 12) number = number.slice(0, 12);

  if (dotPos > 0) {
    numAfterDot = number.slice(dotPos, number.length);
    number = number.slice(0, dotPos);
  }

  if (number.length <= 3) result = number;
  else {
    while (number.length - 3 > 0 && number.indexOf(".") < 0 && number.indexOf("-") < 0) {
      let temp = number.slice(-3);
      result =
        result == "" ? result.concat(",", temp) : "," + temp.concat(result);

      number = number.slice(0, number.length - 3);
    }
    console.log(number.indexOf("-"))
    while (number.length - 4 > 0 && number.indexOf(".") < 0 && number.indexOf("-") >= 0) {
      let temp = number.slice(-3);
      result =
        result == "" ? result.concat(",", temp) : "," + temp.concat(result);

      number = number.slice(0, number.length - 3);
    }
    result = number.concat(result);
  }
  result = result.concat(numAfterDot);

  screen.innerHTML = result;
};
