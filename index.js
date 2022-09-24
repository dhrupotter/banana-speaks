var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector(".output");

function clickEventHandler() {
  console.log("Clicked!!");
  console.log("input", txtInput.value);
  translate(txtInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler);

function translate(inputText) {
  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${inputText}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json.contents.translated);
      output.innerHTML = json.contents.translated;
    });
}
