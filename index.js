const hero = {
   id: 'hero',
   name: 'Wizard',
   avatar: "images/wizard.png",
   health: "60",
   dice: 3
}

const monster = {
   id: 'monster',
   name: "Orc",
   avatar: "images/orc.png",
   health: "10",
   dice: 1
}



function renderCharacter(data) {
   const { id, name, avatar, health, dice } = data
   let diceHtml = getDiceRollArray(dice)
   document.querySelector(`#${id}`).innerHTML = `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src='${avatar}'/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">${diceHtml}</div>
      </div>`;
}

renderCharacter(hero)
renderCharacter(monster)

function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill().map(i => {
      return `<div class="dice"> ${randomRoll()} </div>`
   }).join('')
}

function randomRoll() {
   return Math.floor(Math.random() * 6) + 1
}