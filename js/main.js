window.onload = loaded;

function loaded() {
  document.getElementById("lookUpButton").addEventListener("click", toggleAlert);
  if (sessionStorage.showAlert === "true") {
    document.getElementById("errorAlertForSR").style.visibility = "visible";
    document.getElementById("lookUpButton").innerText = "Reset";
    document.getElementById("vetId").disabled = true;
  } else {
    document.getElementById("errorAlertForSR").style.visibility = "hidden";
  }

  function toggleAlert() {
    if (typeof (Storage) !== "undefined") {
      if (sessionStorage.showAlert === "true") {

        sessionStorage.showAlert = false;
      } else {
        sessionStorage.showAlert = true;
      }
    } else {
      sessionStorage.showAlert = true;
    }
    location.reload();
  }
}
