import {hair,dress,broom} from "./constants.js"
import { renderChar,setCharItems,renderShop,renderCognitz } from "./renders.js";
const itemBox = document.querySelectorAll('.item-box')
let sola = JSON.parse(localStorage.getItem("sola"))
let inventory = JSON.parse(localStorage.getItem('inventory'))
let cognitz = document.getElementById('cognitz')
let shop = JSON.parse(localStorage.getItem('shop'))
let cognitzCount = JSON.parse(localStorage.getItem('cognitz'))

renderCognitz(cognitz)

renderChar(sola)

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
        inventory.push(itemToPush)
        localStorage.setItem("inventory", JSON.stringify(inventory))
        localStorage.setItem("cognitz", `${cognitzCount}`)
        button.parentElement.style.display = "none"
        renderCognitz(cognitz)
        }
    })
})

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        setCharItems(item,sola)
        renderChar(sola);
    })
});