const menuButton = document.getElementById("menuButton");
const navigationMenu = document.querySelector("header .container .nav-links");

menuButton.addEventListener("click", () => {
  if (menuButton.getAttribute("data-role") == "open") {
    navigationMenu.classList.add("open-nav");
    menuButton.setAttribute("data-role", "close");
    menuButton.firstElementChild.src = "./images/icon-close.svg";
    menuButton.parentElement.firstElementChild.firstElementChild.src =
      "./images/logo-bookmark-nav.svg";
  } else {
    navigationMenu.classList.remove("open-nav");
    menuButton.setAttribute("data-role", "open");
    menuButton.firstElementChild.src = "./images/icon-hamburger.svg";
    menuButton.parentElement.firstElementChild.firstElementChild.src =
      "./images/logo-bookmark.svg";
  }
});

const tabs = document.querySelectorAll(".features-section .tabs a");
const tabsDetails = [
  {
    imgSrc: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    imgSrc: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    imgSrc: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
const img = document.querySelector(
  ".features-section .features .features-image img"
);
const heading = document.querySelector(
  ".features-section .features .features-details h2"
);
const text = document.querySelector(
  ".features-section .features .features-details p"
);
tabs.forEach((t) => {
  t.onclick = () => {
    img.src = tabsDetails[[...tabs].indexOf(t)].imgSrc;
    heading.innerHTML = tabsDetails[[...tabs].indexOf(t)].title;
    text.innerHTML = tabsDetails[[...tabs].indexOf(t)].description;
    tabs.forEach((t) => t.classList.remove("active"));
    t.classList.add("active");
  };
});

const questions = document.querySelectorAll(
  ".questions-section .questions li .question"
);

questions.forEach((q) => {
  q.onclick = () => {
    q.classList.toggle("active");
    q.nextElementSibling.classList.toggle("show-answer");
    if (q.classList.contains("active")) {
      q.firstElementChild.src = "./images/icon-arrow-open.svg";
    } else {
      q.firstElementChild.src = "./images/icon-arrow.svg";
    }
  };
});

const contactButton = document.getElementById("contactButton");
const emailInput = document.querySelector(
  ".contact-section .form .contact input"
);

contactButton.addEventListener("click", () => {
  let email = emailInput.value.trim();
  let regex = email.match(/\w+@gmail.com/gi);
  if (regex) {
    emailInput.parentElement.classList.remove("error");
  } else {
    emailInput.parentElement.classList.add("error");
  }
});
