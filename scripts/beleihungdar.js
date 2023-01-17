const button = document.getElementById("submitButton");
const form = document.getElementById("form");
const clientId = document.getElementById("client-id");

const darInput = document.getElementById("darInput");
const oneInput = document.getElementById("darInput");
const twoInput = document.getElementById("darInput");
const threeInput = document.getElementById("darInput");
const fourInput = document.getElementById("darInput");

const priceOne = document.getElementById("priceOne");
const priceTwo = document.getElementById("priceTwo");
const amount = document.getElementById("amount");
const steur = document.getElementById("steur");

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

$("input").on("input invalid", function () {
  this.setCustomValidity("");
  if (this.validity.valueMissing) {
    this.setCustomValidity("Geben Sie einen Wert ein");
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity("Geben Sie einen Bruchwert ein");
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Geben Sie einen Bruchwert ein");
  }
});

const request = () => {
  return fetch(`loan/calculate/${clientId.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      darInput: darInput.value,
    }),
  })
    .then(checkRes)
    .then((res) => {
      priceOne.textContent(`${res.fee} €`);
      priceTwo.textContent(`${res.interestFee} €`);
      amount.textContent(`${res.processingFee} €`);
      steur.textContent(`${res.storageFee} €`);
    });
};

function handler() {
  request();
  console.log(222);
}

darInput.oninput = function () {
  handler();
};
