import getElement from './getElement.js';
import { hideloading } from './toggleLoading.js';
// import { showloading } from "./toggleLoading.js";

const displaydrink = (data) => {
  hideloading();
  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;
  const lists = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = getElement('.drink-img');
  const drinkName = getElement('.drink-name');
  const drinkdesc = getElement('.drink-desc');
  const drinkIngredients = getElement('.drink-ingredients');
  
  img.src = image;
  document.title= name
  drinkName.textContent = name;
  drinkdesc.textContent = desc;
  drinkIngredients.innerHTML = lists.map((item)=>{
    if(!item) return
    return `<li><i class="far fa-check-square"></i>${item}</li>`
  }).join(' ')
//   console.log(lists);
};
export default displaydrink;
