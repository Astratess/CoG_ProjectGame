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

renderChar()