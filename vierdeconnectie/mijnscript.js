var naam = document.getElementById("");

function showTel() {
  let telSelector = document.getElementById("phone_number");
  let telSelectorValue = telSelector.value;
  console.log(telSelector);

  //https://www.w3schools.com/jsref/dom_obj_select.asp
  console.log("Value: " + telSelectorValue);

  var x = document.getElementById("resultTel");
  let valueTel = document.getElementById("resultValue");
  valueTel.innerHTML = telSelectorValue;
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
