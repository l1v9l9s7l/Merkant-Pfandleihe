const button = document.getElementById("submitButton");
const form = document.getElementById("form");
const clientId = document.getElementById("client-id");
const darInput = document.getElementById("darInput");
const oneInput = document.getElementById("darInput");
const twoInput = document.getElementById("darInput");
const threeInput = document.getElementById("darInput");
const fourInput = document.getElementById("darInput");

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const request = () => {
  return fetch(`loan/calculate/${clientId.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      darInput: darInput.value,
    }),
  }).then(checkRes);
};

function handler() {
  request();
  console.log(222);
}

darInput.oninput = function () {
  handler();
};

button.addEventListener("click", handler);
