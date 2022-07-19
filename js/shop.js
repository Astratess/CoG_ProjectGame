const hairShop = document.getElementById('hair')
const dressShop = document.getElementById('dress')
const broomShop = document.getElementById('broom')
const itemBox = document.querySelectorAll('.item-box')
let inventoryShop = JSON.parse(localStorage.getItem('inventory'))
let cognitzShop = 100;
if ("cognitz" in localStorage){

} else{
    localStorage.setItem('cognitz', 100)
}
let shop = [
    {
        src: "img/sola/icebroom.png",
        piece: "broom",
        price: 10
    }
    ,
    {
        src: "img/sola/icebroom.png",
        piece: "broom",
        price: 10
    }
]

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


function renderCharShop(){
    console.log(sola)
    hairShop.src = sola.hair
    dressShop.src = sola.dress
    broomShop.src = sola.broom
}

renderShop();
let itemToPush = {
    src: "",
    piece: ""
}
const buyButtons = document.querySelectorAll('.buyBtn')
console.log(buyButtons)
buyButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        cognitzShop = JSON.parse(localStorage.getItem('cognitz'))
        if (cognitzShop >= button.textContent){
        itemToPush.src = button.previousElementSibling.src
        cognitzShop -= button.textContent
        itemToPush.piece = button.previousElementSibling.classList[0]
        inventoryShop.push(itemToPush)
        localStorage.setItem("inventory", JSON.stringify(inventoryShop))
        localStorage.setItem("cognitz", `${cognitzShop}`)
        button.parentElement.style.display = "none"
        }
    })
})

const itemsShop = document.querySelectorAll('.item')

itemsShop.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList.contains('hair')){
            sola.hair = item.src;
        }
        else if(item.classList.contains('dress')){
            sola.dress = item.src;
        }
        else if(item.classList.contains('broom')){
            sola.broom = item.src;
            console.log(sola.broom)
        }
        renderCharShop();
    })
});
