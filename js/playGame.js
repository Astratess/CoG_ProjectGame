  const gameboard = document.getElementById('gameboard');
  const tbl = document.createElement('table');
  tbl.setAttribute('border', '1');
  tbl.style.transform = "skew(10deg, -1deg)"
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

  const pass1 = document.getElementById('pass1');
  const pass2 = document.getElementById('pass2');

  let td11 = document.getElementById('11');
  td11.style.borderTop = "10px solid silver";
  td11.style.borderLeft = "10px solid silver";

  let td14 = document.getElementById('14');
  td14.style.borderTop = "10px solid silver";
  td14.style.borderRight = "10px solid silver";
  let td15 = document.getElementById('15');
  td15.style.borderTop = "10px solid silver";
  let td16 = document.getElementById('16');
  td16.style.borderTop = "10px solid silver";
  td16.style.borderRight = "10px solid silver";

  let td22 = document.getElementById('22');
  td22.style.borderBottom = "10px solid silver";
  td22.style.borderRight = "10px solid silver";
  let td24 = document.getElementById('24');
  td24.style.borderBottom = "10px solid silver";
  let td25 = document.getElementById('25');
  td25.style.borderBottom = "10px solid silver";
  let td26 = document.getElementById('26');
  td26.style.borderBottom = "10px solid silver";

  const move1 = document.getElementById('move1');
  const move2 = document.getElementById('move2');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sola = {
      HP: 10,
      Mana:0,
      Movement:3,
      src: "img/sola/Sola.png",
      id: "sola",
      skill1: "img/sola/solaskill1.png",
      skill1cd: 1,
      skill2: "img/sola/solaskill2.png",
      skill2cd: 2,
      skill3: "img/sola/solaskill3.png",
      skill3cd: 3,
      place: ""
};

const brann = {
      HP: 10,
      Movement:3,
      Armor:0,
      src: "img/brann/Brann.png",
      id: "brann",
      skill1: "img/brann/brannskill1.png",
      skill1cd: 1,
      skill2: "img/brann/brannskill2.png",
      skill2cd: 2,
      skill3: "img/brann/brannskill3.png",
      skill3cd: 3,
      place: ""
};


const player1 = document.createElement("img");
      player1.src = sola.src;
      player1.setAttribute("id", sola.id);
      player1.style.transform = "skew(-10deg, 3deg)";

      console.log(sola.src);
      console.log(sola.id);

const player2 = document.createElement("img");
      player2.src= brann.src;
      player2.setAttribute("id",sola.id);
      player2.style.transform = "skew(-10deg, 3deg)";


const playerBox1 = document.getElementById('box1');
const playerBox2 = document.getElementById('box2');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const skill1p1 = document.createElement("img");
const skill2p1 = document.createElement('img');
const skill3p1 = document.createElement("img");
const skill1p2 = document.createElement("img");
const skill2p2 = document.createElement('img');
const skill3p2 = document.createElement("img");

skill1p1.src = sola.skill1;
skill1p1.classList.add("skill");
playerBox1.appendChild(div1);
div1.appendChild(skill1p1);

skill2p1.classList.add("skill");
skill2p1.src = sola.skill2;
playerBox1.appendChild(div2);
div2.appendChild(skill2p1);

skill3p1.classList.add("skill");
skill3p1.src = sola.skill3
playerBox1.appendChild(div3);
div3.appendChild(skill3p1);

skill1p2.classList.add("skill");
skill1p2.src = brann.skill1;
playerBox2.appendChild(skill1p2);

skill2p2.classList.add("skill");
skill2p2.src = brann.skill2;
playerBox2.appendChild(skill2p2);

skill3p2.classList.add("skill");
skill3p2.src = brann.skill3;
playerBox2.appendChild(skill3p2);
      

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

    pass1.addEventListener('click', ()=>{
      turn++;
    })

    pass2.addEventListener('click', ()=>{
      turn++;
    })


    function Game(){
        while(sola.HP != 0 || brann.HP != 0){
        }
    }