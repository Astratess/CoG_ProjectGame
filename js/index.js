import {enter,entry,menu} from "./constants.js"
import {checkObjects} from "./objects.js"
import { renderCognitz } from "./renders.js";

checkObjects();

enter.addEventListener('click',()=>{
    entry.style.display = "none"
    menu.style.display = "flex"
    console.log("working")
})
