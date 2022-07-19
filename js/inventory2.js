import {renderInventory,renderChar,previewChar} from "./renders.js"
import {hair,dress,broom} from "./constants.js"
const itemBox = document.querySelectorAll('.item-box')
let sola = JSON.parse(localStorage.getItem("sola"))
let inventory = JSON.parse(localStorage.getItem("inventory"))
let cognitz = document.getElementById('cognitz')
cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="/img/cognitz.png">`


renderInventory(inventory,itemBox)

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        previewChar(item,sola)
        localStorage.setItem("sola", JSON.stringify(sola))
        localStorage.setItem("inventory", JSON.stringify(inventory))
        renderChar(sola);
    })
});

renderChar(sola)