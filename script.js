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

//Slides for Reviews
let slides = document.querySelectorAll(".slide-container");
let reviewIndex = 0;

function next() {
  slides[reviewIndex].classList.remove("active");
  reviewIndex = (reviewIndex + 1) % slides.length;
  slides[reviewIndex].classList.add("active");
}
function prev() {
  slides[reviewIndex].classList.remove("active");
  if (reviewIndex == 0) {
    reviewIndex = slides.length;
  }
  reviewIndex = (reviewIndex - 1) % slides.length;
  slides[reviewIndex].classList.add("active");
}

//Frequently Asked Questions//
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
