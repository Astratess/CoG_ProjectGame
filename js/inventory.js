const hair = document.getElementById('hair')
const dress = document.getElementById('dress')
const broom = document.getElementById('broom')
const items = document.querySelectorAll('.item')
let sola = {
    hair: "img/sola/hair1.png",
    dress: "img/sola/dress.png",
    broom: "img/sola/broom.png"
}

function renderChar(){
    hair.src = sola.hair
    dress.src = sola.dress
    broom.src = sola.broom
}


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
        renderChar();
    })
});

renderChar()