import { showloading } from "./toggleLoading.js";
import { hideloading } from "./toggleLoading.js";


const fetchDrinks = async (url) => {
  showloading()
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    // hideloading()
    return data;
  } catch (error) {}
  console.log(error);
};
export default fetchDrinks;
