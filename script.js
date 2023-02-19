//Dark Mode Implementation
function darkmode() {
  var SetTheme = document.body;
  SetTheme.classList.toggle("light-mode");
  var theme;
  if (SetTheme.classList.contains("light-mode")) {
    console.log("Light Mode");
    theme = "LIGHT";
  } else {
    console.log("Dark Mode");
    theme = "DARK";
  }

  //Save to local storage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if (GetTheme === "LIGHT") {
  document.body.classList = "light-mode";
}
