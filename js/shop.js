import {hair,dress,broom} from "./constants.js"
import { renderChar,previewChar } from "./renders.js";
const itemBox = document.querySelectorAll('.item-box')
let sola = JSON.parse(localStorage.getItem("sola"))
let inventory = JSON.parse(localStorage.getItem('inventory'))
let cognitzShop = 100;
let cognitz = document.getElementById('cognitz')
cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="/img/cognitz.png">`
if ("cognitz" in localStorage){

} else{
    localStorage.setItem('cognitz', 100)
}
let shop = JSON.parse(localStorage.getItem('shop'))

function renderShop(){
    for (let i = 0; i < shop.length; i++){
        const img = document.createElement('img')
        const btn = document.createElement('button')
        itemBox[i].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        itemBox[i].appendChild(btn);
        btn.innerHTML= `${shop[i].price} <img class="cognit" src="/img/cognitz.png">`
        btn.classList.add('buyBtn')
    }
}


renderChar(sola)
   

renderShop();

const buyButtons = document.querySelectorAll('.buyBtn')

buyButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        let itemToPush = {
            src: "",
            piece: ""
        }
        cognitzShop = JSON.parse(localStorage.getItem('cognitz'))
        if (cognitzShop >= button.textContent){
        itemToPush.src = button.previousElementSibling.src
        cognitzShop -= button.textContent
        itemToPush.piece = button.previousElementSibling.classList[0]
        inventory.push(itemToPush)
        localStorage.setItem("inventory", JSON.stringify(inventory))
        localStorage.setItem("cognitz", `${cognitzShop}`)
        button.parentElement.style.display = "none"
        cognitz.innerHTML = `${cognitzShop} <img class="cognit" src="/img/cognitz.png">`
        }
    })
})

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        previewChar(item,sola)
        renderChar(sola);
    })
});