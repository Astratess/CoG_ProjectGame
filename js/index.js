const enter = document.getElementById('enter')
const entry = document.getElementById('entry')
const menu = document.getElementById('menu')


enter.addEventListener('click',()=>{
    entry.style.display = "none"
    menu.style.display = "flex"
    console.log("working")
})

