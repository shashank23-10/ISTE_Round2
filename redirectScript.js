const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");

        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");

        const div_column = document.createElement("div");
        div_column.setAttribute("class", "column");

        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        image.setAttribute("id", "image");

        const title = document.createElement("h3");
        title.setAttribute("id", "title");

        const centre = document.createElement("centre");

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;

        centre.appendChild(image);
        div_card.appendChild(centre);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});

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
