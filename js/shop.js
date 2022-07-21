import {hair,dress,broom,cognitz,itemsHolder,hairSilo,dressSilo,broomSilo,all,body} from "./constants.js"
import { renderChar,setCharItems,renderShop,renderCognitz,renderItemBox,renderShopFilter } from "./renders.js";
import {character,inventory,shop} from "./objects.js"
let cognitzCount = JSON.parse(localStorage.getItem('cognitz'))

if(localStorage.getItem('currentPlayer') == "Brann"){
    broom.style.zIndex = 5;
  }

body.src = localStorage.getItem('body')
renderItemBox(itemsHolder)
const itemBox = document.querySelectorAll('.item-box')
renderCognitz(cognitz)
renderChar(character)
renderShop(shop,itemBox);

const buyButtons = document.querySelectorAll('.buyBtn')

buyButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        let itemToPush = {
            src: "",
            piece: ""
        }
        if (cognitzCount >= button.textContent){
        itemToPush.src = button.previousElementSibling.src
        cognitzCount -= button.textContent
        itemToPush.piece = button.previousElementSibling.classList[0]
        let inv = JSON.parse(localStorage.getItem("inventory"))
        inv.push(itemToPush)
        localStorage.setItem("inventory", JSON.stringify(inv))
        localStorage.setItem(`inventory${localStorage.getItem('currentPlayer')}`,localStorage.getItem('inventory'))
        localStorage.setItem("cognitz", `${cognitzCount}`)
        button.parentElement.innerHTML = ""
        renderCognitz(cognitz)
        }
    })
})

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        setCharItems(item,character)
        renderChar(character);
    })
});

all.addEventListener('click',()=>{
    renderShopFilter(shop,itemBox, items,"all",character)
})

hairSilo.addEventListener('click',()=>{
    renderShopFilter(shop,itemBox, items,"hair",character)
})

dressSilo.addEventListener('click',()=>{
    renderShopFilter(shop,itemBox, items,"dress",character)
})

broomSilo.addEventListener('click',()=>{
    renderShopFilter(shop,itemBox, items,"broom",character)
})