import {renderInventory,renderChar,setCharItems,renderCognitz,renderItemBox} from "./renders.js"
import {hair,dress,broom,cognitz,itemsHolder} from "./constants.js"
import {sola,inventory} from "./objects.js"

renderItemBox(itemsHolder)
const itemBox = document.querySelectorAll('.item-box')
renderCognitz(cognitz)
renderInventory(inventory,itemBox)


const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        setCharItems(item,sola)
        localStorage.setItem("character", JSON.stringify(sola))
        localStorage.setItem("inventory", JSON.stringify(inventory))
        renderChar(sola);
    })
});

renderChar(sola)