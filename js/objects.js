export let sola = {
    hair: "img/sola/hair1.png",
    dress: "img/sola/dress.png",
    broom: "img/sola/broom.png"
}
export let shop = JSON.parse(localStorage.getItem('shop'))
export let character = JSON.parse(localStorage.getItem('character'))
/*export let brann = JSON.parse(localStorage.getItem('character'))*/
let currentChar = localStorage.getItem('currentPlayer')
export let inventory = [
    {
        src: "img/sola/hair1.png",
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
        src: "img/sola/dress2.png",
        piece: "dress"
    }
]

export let inventoryBrann = [
    {
        src: "img/brann/hair1.png",
        piece: "hair"
    }
    ,
    {
        src: "img/brann/dress1.png",
        piece: "dress"
    }
    ,
    {
        src: "img/brann/plates1.png",
        piece: "broom"
    }
    ,
    {
        src: "img/brann/plates2.png",
        piece: "broom"
    }
    ,
    {
        src: "img/brann/hair2.png",
        piece: "hair"
    }
    ,
    {
        src: "img/brann/dress2.png",
        piece: "dress"
    }
]
export let brann = {
    hair: "img/brann/hair1.png",
    dress: "img/brann/dress1.png",
    broom: "img/brann/plates1.png"
}

export function checkObjects(){
    if("character" in localStorage){
         localStorage.setItem('sola', JSON.stringify(sola));
    } else {
         sola = {
            hair: "img/sola/hair1.png",
            dress: "img/sola/dress.png",
            broom: "img/sola/broom.png"
        }
        localStorage.setItem('character', JSON.stringify(sola));
        localStorage.setItem('sola', JSON.stringify(sola));
    }
    if("character" in localStorage){
        character = JSON.parse(localStorage.getItem('character'))
    }
    
    if(currentChar == "Brann"){
        character = JSON.parse(localStorage.getItem('Brann'));
    }
    if(currentChar == "Sola"){
        character = JSON.parse(localStorage.getItem('Sola'));
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
            price: 20
        }
        ,
        {
            src: "img/sola/hair2.png",
            piece: "hair",
            price: 20
        }
        ,
        {
            src: "img/sola/broom.png",
            piece: "broom",
            price: 10
        }
    ]
    localStorage.setItem('shop', JSON.stringify(shop))

    if("cognitz" in localStorage){
        cognitz.innerHTML = `${JSON.parse(localStorage.getItem("cognitz"))} <img class="cognit" src="img/cognitz.png">`
    } else{
        localStorage.setItem('cognitz', 100)
    }
}