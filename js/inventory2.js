import {renderInventory,renderChar,setCharItems,renderCognitz,renderItemBox,renderInventoryFilter} from "./renders.js"
import {hair,dress,broom,cognitz,itemsHolder,hairSilo,dressSilo,broomSilo,all,body} from "./constants.js"
import {character,inventory} from "./objects.js"

body.src = localStorage.getItem('body')

renderItemBox(itemsHolder)
const itemBox = document.querySelectorAll('.item-box')
renderCognitz(cognitz)
renderInventory(JSON.parse(localStorage.getItem('inventory')),itemBox)



if(localStorage.getItem('currentPlayer') == "Brann"){
  broom.style.zIndex = 5;
}

const items = document.querySelectorAll('.item')

console.log(localStorage.getItem('currentPlayer'))

items.forEach(item => {
    item.addEventListener('click',()=>{
        setCharItems(item,character)
        localStorage.setItem("character", JSON.stringify(character))
        localStorage.setItem(localStorage.getItem('currentPlayer'), JSON.stringify(character))
        localStorage.setItem("inventory", JSON.stringify(JSON.parse(localStorage.getItem('inventory'))))
        renderChar(character);
    })
});

renderChar(character)

all.addEventListener('click',()=>{
    renderInventoryFilter(JSON.parse(localStorage.getItem('inventory')),itemBox, items,"all",character)
})

hairSilo.addEventListener('click',()=>{
    renderInventoryFilter(JSON.parse(localStorage.getItem('inventory')),itemBox, items,"hair",character)
})

dressSilo.addEventListener('click',()=>{
    renderInventoryFilter(JSON.parse(localStorage.getItem('inventory')),itemBox, items,"dress",character)
})

broomSilo.addEventListener('click',()=>{
    renderInventoryFilter(JSON.parse(localStorage.getItem('inventory')),itemBox, items,"broom",character)
})
