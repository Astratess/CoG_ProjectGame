const hair = document.getElementById('hair')
const dress = document.getElementById('dress')
const broom = document.getElementById('broom')
const itemBox = document.querySelectorAll('.item-box')

let sola = {
    hair: "img/sola/hair1.png",
    dress: "img/sola/dress.png",
    broom: "img/sola/broom.png"
}

let inventory = [
    {
        src: "img/sola/hair1.png",
        piece: "hair"
    }
    ,
    {
        src: "img/sola/hair2.png",
        piece: "hair"
    }
    ,
    {
        src: "img/sola/dress.png",
        piece: "dress"
    }
    ,
    {
        src: "img/sola/dress1.png",
        piece: "dress"
    }
    ,
    {
        src: "img/sola/broom.png",
        piece: "broom"
    }
    ,
    {
        src: "img/sola/firebroom.png",
        piece: "broom"
    }
    ,
    {
        src: "img/sola/hair3.png",
        piece: "hair"
    }
    ,
    {
        src: "img/sola/icebroom.png",
        piece: "broom"
    }
    ,
    {
        src: "img/sola/dress2.png",
        piece: "dress"
    }
]

if ("sola" in localStorage) {
    sola = JSON.parse(localStorage.getItem("sola"))
} else {
    localStorage.setItem("sola", JSON.stringify(sola))
}

if ("inventory" in localStorage && JSON.parse(localStorage.getItem("inventory")) == inventory) {
    inventory = JSON.parse(localStorage.getItem("inventory"))
} else {
    localStorage.setItem("inventory", JSON.stringify(inventory))
}

function renderInventory(){
    for (let i = 0; i < inventory.length; i++){
        const img = document.createElement('img')
        itemBox[i].appendChild(img)
        img.classList.add(`${inventory[i].piece}`, "item")
        img.src = inventory[i].src
    }
}


function renderChar(){
    console.log(sola)
    hair.src = sola.hair
    dress.src = sola.dress
    broom.src = sola.broom
}

renderInventory()

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList.contains('hair')){
            sola.hair = item.src;
        }
        else if(item.classList.contains('dress')){
            sola.dress = item.src;
        }
        else if(item.classList.contains('broom')){
            sola.broom = item.src;
        }
        localStorage.setItem("sola", JSON.stringify(sola))
        localStorage.setItem("inventory", JSON.stringify(inventory))
        renderChar();
    })
});

renderChar()
