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

//Scroll-Bar
let progress = document.getElementById("progress-bar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
//Scroll-Bar

//Scroll-for-explore-link
const scrollTopBtn = document.querySelector(".link-explore");
scrollTopBtn.addEventListener("click", function () {
  scrollElement.scrollTop -= 250;
});
scrollElement.addEventListener("scroll", () => {
  outputDiv.innerHTML = `scrollTop: ${Math.ceil(scrollElement.scrollTop)}`;
});

//SMOOTH-SCROLLING
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//back to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
