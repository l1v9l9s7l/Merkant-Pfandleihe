const bestInput = document.getElementById("bestandInput");
const submitButton = document.getElementById("submit");
const form = document.getElementById("form");

let inputDisable = function (value) {
  let other = document.getElementsByClassName("other-input");

  if (bestInput.value.length > 0) {
    let index;
    for (index = 0; index < other.length; ++index) {
      other[index].disabled = value;
      other[index].classList.add("input_disable");
    }
    form.setAttribute("action", "/loan/create-item/");
    console.log(form);
  } else {
    let index;
    for (index = 0; index < other.length; ++index) {
      other[index].disabled = false;
      other[index].classList.remove("input_disable");
    }
    form.setAttribute("action", "/loan/store-client");
    console.log(form);
  }
};

bestInput.oninput = function () {
  inputDisable("disabled");
};
