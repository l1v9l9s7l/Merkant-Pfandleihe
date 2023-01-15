const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const form = document.getElementById("form");
const clientId = document.getElementById("client-id");

function handlerOne() {
  form.setAttribute("action", `/loan/add-item/${clientId.value}`);
}

function handlerTwo() {
  form.setAttribute("action", `/loan/create/${clientId.value}`);
}

buttonOne.addEventListener("click", handlerOne);
buttonTwo.addEventListener("click", handlerTwo);
