(function() {
  var password = "icefish";
  var entered = sessionStorage.getItem("authenticated");

  if (entered !== "true") {
    var input = prompt("Enter password:");
    if (input === password) {
      sessionStorage.setItem("authenticated", "true");
    } else {
      document.body.innerHTML = "<h1>Access Denied</h1>";
    }
  }
})();
