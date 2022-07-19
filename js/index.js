import {enter,entry,menu} from "./constants.js"
import {checkObjects} from "./objects.js"

checkObjects();

enter.addEventListener('click',()=>{
    entry.style.display = "none"
    menu.style.display = "flex"
    console.log("working")
})

if("cognitz" in localStorage){
    cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="/img/cognitz.png">`
} else{
    localStorage.setItem('cognitz', 100)
}