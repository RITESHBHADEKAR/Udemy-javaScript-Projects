import getElement from "./getElement.js";


const loading = getElement('.loading')

export const showloading = ()=>{
    loading.classList.remove('hide-loading')
}
export const hideloading = ()=>{
    loading.classList.add('hide-loading')
}
