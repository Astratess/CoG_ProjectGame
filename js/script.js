const hair = document.getElementById('hair')
const dress = document.getElementById('dress')
const broom = document.getElementById('broom')
const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList.contains('hair')){
            hair.src = item.src;
        }
        else if(item.classList.contains('dress')){
            dress.src = item.src;
        }
        else if(item.classList.contains('broom')){
            broom.src = item.src;
        }
    })
});
