import "./styles/home.css";
import firstLoad from "./functions/firstLoad";
import render from "./functions/render";
import home from "./pages/home";
import prices from "./pages/prices";
import contact from "./pages/contact";

firstLoad();

const homeButton = document.querySelector("#home_tab");
const pricesButton = document.querySelector("#prices_tab");
const aboutButton = document.querySelector("#about_tab");

homeButton.addEventListener('click', function() {
  render();
  home();
})

pricesButton.addEventListener('click', function() {
  render();
  prices();
})

aboutButton.addEventListener('click', function() {
  render();
  contact();
})


