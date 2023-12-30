import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  // console.log(data); // returns value of api
  const sections = await displayDrinks(data);
  if (sections) {
    setDrink(sections);
  }
};
export default showDrinks;
