export let sola = JSON.parse(localStorage.getItem('character'));
export let inventory =  JSON.parse(localStorage.getItem('inventory'))
export let shop = JSON.parse(localStorage.getItem('shop'))

export function checkObjects(){
    if("character" in localStorage){
         sola = JSON.parse(localStorage.getItem('character'))
    } else {
         sola = {
            hair: "img/sola/hair1.png",
            dress: "img/sola/dress.png",
            broom: "img/sola/broom.png"
        }
        localStorage.setItem('character', JSON.stringify(sola));
    }
    
    if('inventory' in localStorage){
         inventory = JSON.parse(localStorage.getItem('inventory'))
    } else{
         inventory = [
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
        localStorage.setItem('inventory', JSON.stringify(inventory))
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