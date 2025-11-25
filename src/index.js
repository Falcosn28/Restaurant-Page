
import "./styles.css";
import {loadHome} from "./home.js"
import {loadMenu} from "./menu.js"
import {loadAbout} from "./about-us.js"

const pageHome = document.querySelector(".page-home")
const pageMenu = document.querySelector(".page-menu")
const pageAbout = document.querySelector(".page-about")
const Content = document.querySelector("#content");


pageHome.addEventListener("click", () => {
  Content.innerHTML = ""
  loadHome()
})

pageMenu.addEventListener("click", () => {
  Content.innerHTML = ""
  loadMenu()
})

pageAbout.addEventListener("click", () => {
  Content.innerHTML = ""
  loadAbout()
})

loadHome()


