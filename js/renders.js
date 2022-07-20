export function renderInventory(inventory,itemBox){
    for (let i = 0; i < inventory.length; i++){
        const img = document.createElement('img')
        itemBox[i].appendChild(img)
        img.classList.add(`${inventory[i].piece}`, "item")
        img.src = inventory[i].src
    }
}

export function renderChar(sola){
    hair.src = sola.hair
    dress.src = sola.dress
    broom.src = sola.broom
}

export function renderShop(shop,itemBox){
    for (let i = 0; i < shop.length; i++){
        const img = document.createElement('img')
        const btn = document.createElement('button')
        itemBox[i].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        itemBox[i].appendChild(btn);
        btn.innerHTML= `${shop[i].price} <img class="cognit" src="img/cognitz.png">`
        btn.classList.add('buyBtn')
    }
}

export function setCharItems(item,sola){
    if(item.classList.contains('hair')){
        sola.hair = item.src;
    }
    else if(item.classList.contains('dress')){
        sola.dress = item.src;
    }
    else if(item.classList.contains('broom')){
        sola.broom = item.src;
    }
    }

export function renderCognitz(cognitz){
        cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="img/cognitz.png">`
}