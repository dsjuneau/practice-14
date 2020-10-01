const uName = document.getElementById("name");
const uForm = document.querySelector("form");
const uEmail = document.getElementById("email");
let cString = "";

uForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("uName", uName.value);
  document.cookie = "uEmail=" + uEmail.value;
});

if (localStorage.getItem("uName")) {
  uName.value = localStorage.getItem("uName");
}

cString = document.cookie.slice(document.cookie.indexOf("=") + 1);

if (cString) {
  uEmail.value = cString;
}
