const enter = document.getElementById('enter')
const entry = document.getElementById('entry')
const menu = document.getElementById('menu')
import {checkObjects, sola,character,inventory,brann,inventoryBrann} from "./objects.js"
import { renderCognitz,renderChar } from "./renders.js";
import {body, broom,cognitz} from "./constants.js"
const charSelect = document.getElementById('select-char')
const modal = document.getElementById('modal')
const solaSelect = document.getElementById('sola-select')
const brannSelect = document.getElementById('brann-select')


if (localStorage.getItem('inventoryBrann') == null){
    localStorage.setItem('inventoryBrann', JSON.stringify(inventoryBrann))
    }
if (localStorage.getItem('inventorySola') == null){
    localStorage.setItem('inventorySola', JSON.stringify(inventory))
    }
    if (localStorage.getItem('inventory') == null){
        localStorage.setItem('inventory', JSON.stringify(inventory))
        }

if(localStorage.getItem('cognitz' == null)){
    localStorage.setItem('cognitz', 100);
}

if (localStorage.getItem('Sola') == null){
    localStorage.setItem('Sola', JSON.stringify(sola))
    }
if (localStorage.getItem('Brann') == null){
    localStorage.setItem('Brann', JSON.stringify(brann))
    }
if (localStorage.getItem('currentPlayer') == null){
localStorage.setItem('currentPlayer',"Sola");
}
if (localStorage.getItem('body') == null){
    localStorage.setItem('body',"img/sola/bodysola.png");
    }
body.src = localStorage.getItem('body')
if(localStorage.getItem('currentPlayer') == "Brann"){
    broom.style.zIndex = 5;
}

checkObjects();
renderChar(JSON.parse(localStorage.getItem("character")));

enter.addEventListener('click',()=>{
    entry.style.display = "none"
    menu.style.display = "flex"
    renderCognitz(cognitz)
})

charSelect.addEventListener('click', ()=>{
    modal.style.display = "flex"
    modal.style.animation = "1s modal ease-in-out forwards"
})

solaSelect.addEventListener('click',()=>{
    localStorage.setItem('currentPlayer','Sola')
    localStorage.setItem('Sola', localStorage.getItem('Sola'))
    localStorage.setItem('character', localStorage.getItem('Sola'))
    localStorage.setItem('body', "img/sola/bodysola.png")
    localStorage.setItem('inventory', localStorage.getItem("inventorySola"))
    document.getElementById('mimi').style.background = "ulr('img/sola/sola.bg.jpg')"
})

brannSelect.addEventListener('click',()=>{
    localStorage.setItem('currentPlayer','Brann')
    localStorage.setItem('Brann', localStorage.getItem('Brann'))
    localStorage.setItem('character', localStorage.getItem('Brann'))
    localStorage.setItem('body', "img/brann/body.png")
    localStorage.setItem('inventory', localStorage.getItem("inventoryBrann") )
})