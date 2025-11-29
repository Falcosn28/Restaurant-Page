
import coffeeImg from "./images/coffee.jpg";
import waffleImg from "./images/Waffle.jpg";
import cakeImg from "./images/cake.jpg";

const recepies = [
  { 
    recepiesImg: coffeeImg,
    price: "5 eur",
    recepiesTitle: "coffee",
    recepiesParagraf: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, aliquid.",
  },
  { 
    recepiesImg: waffleImg,
    price: "50 eur",
    recepiesTitle: "waffle",
    recepiesParagraf: "Lorem ipsum dolor sit consectetur, adipisicing elit. Nulla, aliquid.",
  },
  { 
    recepiesImg: cakeImg,
    price: "8 eur",
    recepiesTitle: "cake",
    recepiesParagraf: "Lorem ipsum dolor sit adipisicing elit. Nulla, aliquid."
  },
]

function loadMenu () {
  const content = document.querySelector("#content");
  const menuPage = document.createElement("div");
  menuPage.classList.add("pageMenu");

  for (let i = 0; i < recepies.length; i++) {
    
    const recepie = document.createElement("div");
    const description = document.createElement("div");
    const recepieImg = document.createElement("img");
    const descriptionTitle = document.createElement("h1");
    const descriptionParagraf = document.createElement("p");
    const descriptionPriece = document.createElement("p");

    descriptionPriece.innerText = recepies[i].price;
    recepieImg.src = recepies[i].recepiesImg;
    descriptionTitle.innerText = recepies[i].recepiesTitle;
    descriptionParagraf.innerText = recepies[i].recepiesParagraf;

    description.classList.add("description");
    descriptionPriece.classList.add("price");

    description.appendChild(descriptionTitle);
    description.appendChild(descriptionParagraf);
    description.appendChild(descriptionPriece);


    recepie.appendChild(recepieImg);
    recepie.appendChild(description);

    menuPage.appendChild(recepie)
  }
  
  content.appendChild(menuPage);
}
export {loadMenu}