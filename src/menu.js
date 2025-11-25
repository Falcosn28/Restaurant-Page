
function loadMenu () {
  const content = document.querySelector("#content");

  const menuPage = document.createElement("div");
  menuPage.classList.add("menuPage");

  const title = document.createElement("h1");

  title.innerText = "Menu"

  menuPage.appendChild(title);

  content.appendChild(menuPage)
}
export {loadMenu}