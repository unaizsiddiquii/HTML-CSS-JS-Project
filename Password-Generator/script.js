const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = upperSet.toLowerCase();
const numberSet = "1234567890";
const symbolSet = "~!@#$%&_+";

// selector
const passbox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const copyTextBtn = document.getElementsByClassName("copy-btn");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  printPassbox(password);
};

document.getElementById("btn").addEventListener("click", () => {
  return generatePassword();
});

function printPassbox(password) {
  passbox.innerText = truncateString(password, totalChar.value);
}

function truncateString(str, num) {
  if (str > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

function copyText() {
  let copyTestValue = passbox.innerText;
  navigator.clipboard.writeText(copyTestValue);
}
