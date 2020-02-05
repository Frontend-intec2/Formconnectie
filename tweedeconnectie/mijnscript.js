var naam = document.getElementById("");

var waarSelector = document.getElementById("pickup_place");
var waarSelectorValue = parseInt(
  waarSelector.options[waarSelector.selectedIndex].value
);

function showResult() {
  console.log(waarSelectorValue);
  console.log(waarselector);

  var x = document.getElementById("result");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
