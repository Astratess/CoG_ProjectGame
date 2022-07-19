import {sola,inventory}  from "./objects.js"
import {renderInventory,renderChar,checker} from "./renders.js"
import {hair,dress,broom} from "./constants.js"
const itemBox = document.querySelectorAll('.item-box')
let cognitzInv = JSON.parse(localStorage.getItem('cognitz'))

let solaArr = sola;
let inventoryInv = inventory;

  if ("sola" in localStorage && solaArr != JSON.parse(localStorage.getItem("sola"))) {
        solaArr = JSON.parse(localStorage.getItem("sola"))
    } else {
        localStorage.setItem("sola", JSON.stringify(solaArr))
    }
    
    if ("inventory" in localStorage && inventoryInv != JSON.parse(localStorage.getItem("inventory"))) {
        inventoryInv = JSON.parse(localStorage.getItem("inventory"))
    } else {
        localStorage.setItem("inventory", JSON.stringify(inventory))
    }

let cognitz = document.getElementById('cognitz')
cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="/img/cognitz.png">`



renderInventory(inventoryInv,itemBox)

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList.contains('hair')){
            solaArr.hair = item.src;
        }
        else if(item.classList.contains('dress')){
            solaArr.dress = item.src;
        }
        else if(item.classList.contains('broom')){
            solaArr.broom = item.src;
        }
        localStorage.setItem("sola", JSON.stringify(solaArr))
        localStorage.setItem("inventory", JSON.stringify(inventoryInv))
        renderChar(solaArr);
        console.log(solaArr)
        console.log(localStorage.getItem("sola"))
    })
});

renderChar(solaArr)