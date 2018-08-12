/* jshint esversion:6 */

let total = 0;
function plusOne() {
  total++;
  document.getElementById("totaling").innerHTML = total;
}

function minusOne() {
  total--;
  document.getElementById("totaling").innerHTML = total;
}

function nameEnter() {
  let x = document.getElementById("name").value;
  document.getElementById("nameSpace").innerHTML = x;
  document.getElementById("name").value = "";
}

// Now create a player object
