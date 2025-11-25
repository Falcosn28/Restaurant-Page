
function loadAbout () {
  const content = document.querySelector("#content");

  const aboutPage = document.createElement("div");
  aboutPage.classList.add("aboutPage");

  const ownerImg = document.createElement("div");
  ownerImg.classList.add("ownerImg");

  const ownerInfo = document.createElement("div");
  ownerInfo.classList.add("ownerInfo");

  const ownerName = document.createElement("h1");
  ownerName.innerText = "Luigi"

  const ownerText = document.createElement("p");
  ownerText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti enim similique suscipit veniam animi dignissimos sapiente reprehenderit rerum facere."

  ownerInfo.appendChild(ownerName);
  ownerInfo.appendChild(ownerText);

  aboutPage.appendChild(ownerImg);
  aboutPage.appendChild(ownerInfo);

  content.appendChild(aboutPage)
}
export {loadAbout}