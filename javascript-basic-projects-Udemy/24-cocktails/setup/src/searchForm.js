import getElement from "./getElement.js";
import showDrinks from "./presentDrinks.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const form = getElement('.search-form')
const inputs = getElement('[name="drink"')


form.addEventListener('keyup', (e)=>{
    e.preventDefault()
    const value = inputs.value;
    // console.log(value);
    if(!value)return ;
    showDrinks(`${baseURL} ${value}`)
    
})