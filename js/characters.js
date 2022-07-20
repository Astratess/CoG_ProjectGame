export let SolaGame = {
    hp: 10,
    armor: 0,
    mana: 5,
    movement: 3,
    crystals: 2,
    display: JSON.parse(localStorage.getItem('character'))
}

export let BrannGame = {
    hp: 10,
    armor: 2,
    movement: 3,
    crystals: 2,
    display: "../img/brann/Brann.png"
}
