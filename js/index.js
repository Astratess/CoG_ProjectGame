export const enter = document.getElementById('enter')
export const entry = document.getElementById('entry')
export const menu = document.getElementById('menu')
import {checkObjects, sola} from "./objects.js"
import { renderCognitz,renderChar } from "./renders.js";

checkObjects();
renderChar(sola);

enter.addEventListener('click',()=>{
    entry.style.display = "none"
    menu.style.display = "flex"
    console.log("working")
})
