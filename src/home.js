
function loadHome () {
  const content = document.querySelector("#content");

  const homePage = document.createElement("div");
  homePage.classList.add("homePage");

  const title = document.createElement("h1");
  title.innerText = "Awesome Restaurant";
  const background = document.createElement("div");
  const aboutUs = document.createElement("div");

  const aboutUsPraragraf = document.createElement("p");
  aboutUsPraragraf.innerText = "WOW this is so Awsome like i mean REALY AWESOME SO MORE TEXT i need more text more more more okay this is good right? if you wanna continue clik Read";
  const aboutUsButton = document.createElement("button");
  aboutUsButton.innerText = "Read";

  aboutUs.appendChild(aboutUsPraragraf)
  aboutUs.appendChild(aboutUsButton)

  title.classList.add("title");
  background.classList.add("background");
  aboutUs.classList.add("about_us");

  homePage.appendChild(title);
  homePage.appendChild(background);
  homePage.appendChild(aboutUs);

  content.appendChild(homePage)
}
export {loadHome}