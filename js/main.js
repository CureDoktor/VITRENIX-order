function oneMonth() {
  document.getElementById("oneMonth1").style.display = "block";
  document.getElementById("oneMonth").style.display = "none";

  document.getElementById("sixMonth1").style.display = "block";
  document.getElementById("sixMonth").style.display = "none";

  document.getElementById("threeMonth").style.display = "block";
  document.getElementById("threeMonth1").style.display = "none";
}

function sixMonths() {
  document.getElementById("oneMonth").style.display = "block";
  document.getElementById("oneMonth1").style.display = "none";

  document.getElementById("sixMonth").style.display = "block";
  document.getElementById("sixMonth1").style.display = "none";

  document.getElementById("threeMonth").style.display = "block";
  document.getElementById("threeMonth1").style.display = "none";
}

function threeMonths() {
  document.getElementById("oneMonth").style.display = "block";
  document.getElementById("oneMonth1").style.display = "none";

  document.getElementById("sixMonth1").style.display = "block";
  document.getElementById("sixMonth").style.display = "none";

  document.getElementById("threeMonth1").style.display = "block";
  document.getElementById("threeMonth").style.display = "none";
}

function creditCard() {
  document.getElementById("ccNormal").style.display = "none";
  document.getElementById("ccSelected").style.display = "block";

  document.getElementById("paypalNormal").style.display = "block";
  document.getElementById("paypalSelected").style.display = "none";
}

function paypal() {
  document.getElementById("ccNormal").style.display = "block";
  document.getElementById("ccSelected").style.display = "none";

  document.getElementById("paypalNormal").style.display = "none";
  document.getElementById("paypalSelected").style.display = "block";
}

function partOneContinue() {
  document.getElementById("partOne").style.display = "none";
  document.getElementById("partTwo").style.display = "block";
}

function partTwoContinue() {
  document.getElementById("partTwo").style.display = "none";
  document.getElementById("partThree").style.display = "block";
}
