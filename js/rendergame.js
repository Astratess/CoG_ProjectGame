import { BrannGame,SolaGame } from "./characters.js";
const gameboard = document.getElementById('gameboard');
const tbl = document.createElement('table');
tbl.setAttribute('border', '1');
/*tbl.style.transform = "skew(10deg, -1deg)"*/
const tbdy = document.createElement('tbody');
for (var i = 0; i < 4; i++) {
  const tr = document.createElement('tr');
  tr.setAttribute("id",`${i}`)
    for (var j = 0; j < 8; j++) {
        let td = document.createElement('td');
        tr.appendChild(td)
        td.setAttribute("id",`${i}${j}`);
      }
    tbdy.appendChild(tr);
  }
tbl.appendChild(tbdy);
gameboard.appendChild(tbl)

let player1 = SolaGame
let player2 = BrannGame
let turn = 1;
let round = 1
const renderPlayer = document.createElement('div')
renderPlayer.classList.add('holder')
renderPlayer.innerHTML = 
`<img src="${localStorage.getItem('body')}" alt="" id="body">
<img src="${player1.display.hair}" alt="" id="hair">
<img src="${player1.display.broom}" alt="" id="broom">
<img src="${player1.display.dress}" alt="" id="dress">`

const renderPlayer2 = document.createElement('div')
renderPlayer2.classList.add('holder')
renderPlayer2.innerHTML = `<img src="${BrannGame.display}" alt="">`
renderPlayer2.firstChild.style.animation = "0"


const passTurn = document.getElementById('passTurn')
const turnDisplay = document.getElementById('turn')
const roundDisplay = document.getElementById('round')

passTurn.addEventListener('click',()=>{
    turn++;
    if (turn == 7){
        turn = 1;
        round++;
    }
    roundDisplay.textContent = `Round : ${round}`
    turnDisplay.textContent = `Turn : ${turn}`
})

if(localStorage.getItem('currentPlayer') == "Brann"){
  broom.style.zIndex = 5;
}

const tiles = document.querySelectorAll('td');
tiles.forEach((tile) =>{
    tile.addEventListener('click',()=>{
        if(round % 2 == 1){
            if ((turn == 1 || turn == 4 || turn == 5) && tile.innerHTML == ""){
            tile.appendChild(renderPlayer)
            }
            else if ((turn == 2 || turn == 3 || turn == 6) && tile.innerHTML == ""){
                tile.appendChild(renderPlayer2);
            }
        }
        if(round % 2 == 0){
            if ((turn == 2 || turn == 3 || turn == 6) && tile.innerHTML == ""){
                tile.appendChild(renderPlayer)
            }
            else if ((turn == 1 || turn == 4 || turn == 5) && tile.innerHTML == ""){
                tile.appendChild(renderPlayer2);
            }
        }
        const broom = document.getElementById('broom')

if(localStorage.getItem('currentPlayer') == "brann"){
  broom.style.zIndex = 5;
}
    })
})






























/*

const tiles = document.querySelectorAll('td');
  let turn = 1;
  function reachable(player,place,tile){
    if(player.Movement > -1){
    if (place[0] < tile[0]){
      player.Movement -= Number(tile[0]-place[0]);
    }
    if(place[0] > tile[0]){
      player.Movement -= Number(place[0] - tile[0]);
    }
    if(place[1] < tile[1]){
      player.Movement -= Number(tile[1] - place[1]);
    }
    if(place[1] > tile[1]){
      player.Movement -= Number(place[1] - tile[1]);
    }
  }
  }
      tiles.forEach((tile) =>{
        tile.addEventListener('click',()=>{
          if (turn > 6){
            sola.Movement = 3;
            brann.Movement = 3;
            turn = 1;
          }
          if (turn % 2 != 1){
            reachable(brann,brann.place,tile.id);
            console.log(brann.Movement)
            if(brann.Movement >= 0){
            tile.appendChild(player2);
            player2.style.animation = "appear 1s ease-in-out forwards"
            brann.place = tile.id;
            move1.textContent = "Movement: " + brann.Movement;
            }
          }
          else if(turn % 2 != 0){
            reachable(sola,sola.place,tile.id);
            console.log(sola.Movement);
            if(sola.Movement >= 0){
            tile.appendChild(player1);
            player1.style.animation = "appear 1s ease-in-out forwards"
            sola.place = tile.id;
            move2.textContent = "Movement: " + sola.Movement;
            }
          }
        })
    })
*/