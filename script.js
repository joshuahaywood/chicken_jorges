// menu bar color contrast update
// get the root to change the custom CSS variables
const root = document.querySelector(":root");

var darkSwitch = new IntersectionObserver(
  function (entries) {
    // check if the element overlaps with our viewport
    if (entries[0].isIntersecting === true) {
      console.log("Element is visible in in viewport");
      // change the custom variable to our dark colour
      root.style.setProperty("--theme-color", "var(--dark-color)");
    } else {
      console.log("Element is not visible in in viewport");
      // change the custom variable to our dark colour
      root.style.setProperty("--theme-color", "white");
    }
  },
  { rootMargin: "0px 0px -90% 0px", threshold: [0.05] }
); // shrink the viewport down to roughly the area of the navbar. Check if it overlaps with a small percentage of our section

var lightSwitch = new IntersectionObserver(
  function (entries) {
    // check if the element overlaps with our viewport
    if (entries[0].isIntersecting === true) {
      console.log("Element is visible in in viewport");
      // change the custom variable to our light colour
      root.style.setProperty("--theme-color", "var(--light-color)");
    } else {
      console.log("Element is not visible in in viewport");
      // change the custom variable to our light colour
      root.style.setProperty("--theme-color", "white");
    }
  },
  { rootMargin: "0px 0px -90% 0px", threshold: [0.05] }
); // shrink the viewport down to roughly the area of the navbar. Check if it overlaps with a small percentage of our section

darkSwitch.observe(document.querySelector("#about"));
lightSwitch.observe(document.querySelector("#waitlist"));

// easter egg
const logo = document.querySelector(".logo");

logo.addEventListener("click", (e) => {
  if (logo.innerHTML === "🐓") {
    logo.innerHTML = "🥚";
  } else {
    logo.innerHTML = "🐓";
  }
});

// mobile nav event listener

const hamburger = document.getElementById("mobile-nav");
const navbar = document.getElementById("navbar");
const navClose = document.querySelector(".nav-close");

hamburger.addEventListener("click", (e) => {
  navbar.classList.add("active");
  navbar.classList.add("activated");
  document.body.style.overflow = "hidden";
});

navClose.addEventListener("click", (e) => {
  navbar.classList.remove("active");
  document.body.style.overflow = "visible";
});

// iframe pop over event listener

const iframeTrigger = document.getElementById("iframe-trigger");
const iframeContainer = document.getElementById("iframe-container");
const content = document.querySelector(".content");
const iframeClose = document.querySelector(".iframe-close");

iframeTrigger.addEventListener("click", (e) => {
  iframeContainer.classList.remove("hidden");
  content.style.marginRight = "450px";
  console.log("clicked");
});

iframeClose.addEventListener("click", (e) => {
  iframeContainer.classList.add("hidden");
  content.style.marginRight = "0";
});

// language switch
const lang = document.querySelector(".lang");
const widgetButton = document.getElementById("nav-widget-button");
const newButton = document.createElement("div");

lang.addEventListener("click", (e) => {
  if (lang.innerText === "🇦🇺") {
    lang.innerText = "🇪🇸";
    newButton.innerHTML = `<a  target="_blank" href="https://demo.sevenrooms.com/reservations/chickenjorges?lang=es">
        <button id="nav-widget-button" class="nav-item button">
          Book Now
        </button>
      </a>`;
    widgetButton.replaceWith(newButton);
    console.log("Switching to Spanish");
  } else {
    lang.innerText = "🇦🇺";
    newButton.innerHTML = `<a target="_blank" href="https://demo.sevenrooms.com/reservations/chickenjorges?lang=en">
        <button id="nav-widget-button" class="nav-item button">
          Book Now
        </button>
      </a>`;
    widgetButton.replaceWith(newButton);
    console.log("Switching to English");
  }
});
