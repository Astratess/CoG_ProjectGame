import {renderInventory,renderChar,setCharItems,renderCognitz} from "./renders.js"
import {hair,dress,broom} from "./constants.js"
const itemBox = document.querySelectorAll('.item-box')
let sola = JSON.parse(localStorage.getItem("sola"))
let inventory = JSON.parse(localStorage.getItem("inventory"))
let cognitz = document.getElementById('cognitz')

renderCognitz(cognitz)
renderInventory(inventory,itemBox)

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        setCharItems(item,sola)
        localStorage.setItem("sola", JSON.stringify(sola))
        localStorage.setItem("inventory", JSON.stringify(inventory))
        renderChar(sola);
    })
});

renderChar(sola)