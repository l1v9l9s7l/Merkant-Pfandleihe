const bestInput = document.getElementById("bestandInput");
const submitButton = document.getElementById("submit");

let inputDisable = function (value) {
  let other = document.getElementsByClassName("other-input");

  if (bestInput.value.length > 0) {
    let index;
    for (index = 0; index < other.length; ++index) {
      other[index].disabled = value;
      other[index].classList.add("input_disable");
    }
  } else {
    let index;
    for (index = 0; index < other.length; ++index) {
      other[index].disabled = false;
      other[index].classList.remove("input_disable");
    }
  }
};

bestInput.oninput = function () {
  inputDisable("disabled");
};
