var naam = document.getElementById("");

function showResult() {
  let waarSelector = document.getElementById("pickup_place");
  let waarSelectorValue = waarSelector.value;
  let waarSelectorText = waarSelector.options[waarSelectorValue].label;
  //https://www.w3schools.com/jsref/dom_obj_select.asp
  console.log("Value: " + waarSelectorValue);
  console.log("Text: " + waarSelectorText);
  console.log(waarSelector);

  var x = document.getElementById("result");
  let valuePlace = document.getElementById("resultValue");
  let textPlace = document.getElementById("resultText");
  valuePlace.innerHTML = waarSelectorValue;
  textPlace.innerHTML = waarSelectorText;
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
