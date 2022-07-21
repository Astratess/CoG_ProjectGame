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

export function renderItemBox(parent){
    for(let i = 0; i < 56;i++){
        let child = document.createElement('div')
        child.classList.add('item-box')
        parent.appendChild(child);
    }
}

export function renderShopFilter(shop,itemBox,items,filter,sola){
    let k = 0;
    for (let j = 0; j < items.length; j++){
        itemBox[j].innerHTML = ""
    }
    for (let i = 0; i < shop.length; i++){
        if(filter == "all"){
        const img = document.createElement('img')
        const btn = document.createElement('button')
        itemBox[i].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        itemBox[i].appendChild(btn);
        btn.innerHTML= `${shop[i].price} <img class="cognit" src="img/cognitz.png">`
        btn.classList.add('buyBtn')
        }
        else if(shop[i].piece == filter){
        const img = document.createElement('img')
        const btn = document.createElement('button')
        itemBox[k].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        itemBox[k].appendChild(btn);
        btn.innerHTML= `${shop[i].price} <img class="cognit" src="img/cognitz.png">`
        btn.classList.add('buyBtn')
        k++
        }
    }
    let items1 = document.querySelectorAll('.item')
    console.log(items1)
    items1.forEach(item => {
        item.addEventListener('click',()=>{
            setCharItems(item,sola)
            renderChar(sola);
        })
    });
}

export function renderInventoryFilter(shop,itemBox,items,filter,sola){
    let k = 0;
    for (let j = 0; j < items.length; j++){
        itemBox[j].innerHTML = ""
    }
    for (let i = 0; i < shop.length; i++){
        if(filter == "all"){
        const img = document.createElement('img')
        itemBox[i].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        }
        else if(shop[i].piece == filter){
        const img = document.createElement('img')
        itemBox[k].appendChild(img)
        img.classList.add(`${shop[i].piece}`, "item")
        img.src = shop[i].src
        k++
        }
    }
    let items1 = document.querySelectorAll('.item')
    console.log(items1)
    items1.forEach(item => {
        item.addEventListener('click',()=>{
            setCharItems(item,sola)
            localStorage.setItem("character", JSON.stringify(sola))
            renderChar(sola);
        })
    });
}