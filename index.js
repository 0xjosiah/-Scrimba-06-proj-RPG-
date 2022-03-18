import characterData from "./data.js"
import Character from "./Character.js"

const monstersArr = ['orc', 'goblin', 'demon']
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

function getNewMonster() {
   const nextMonsterData = characterData[monstersArr.shift()]
   return (nextMonsterData) ? new Character(nextMonsterData) : {}
}

// const nextMonsterData = () => {
//    return (monstersArr[0]) ? new Character(characterData[monstersArr[0]]) : {}
// }


function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

render()

function attack() {
   // document.querySelector('#attack-button').removeEventListener('click', attack)
   // setTimeout(() => {
   //    document.querySelector('#attack-button').addEventListener('click', attack)
   // }, 2000)
   pauseAttackBtn()
   wizard.getDiceHtml()
   monster.getDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()
   if(wizard.isDead) return setTimeout(endGame, 1500);
   if(monstersArr.length == 0 && monster.isDead) return setTimeout(endGame, 1500);
   if(monster.isDead && monstersArr.length > 0){
      monster = getNewMonster();
      setTimeout(render, 1500)
   }
}

function endGame() {
   const endMessage = monster.isDead && wizard.isDead ? 'No victors - total death'
                     : monster.isDead ? 'The wizard wins'
                     : `The evil ${monster.name} conquers`
   const endEmoji = monster.isDead && wizard.isDead ? "💀" 
                     : monster.isDead ? "🔮"
                     : "😈"
   const endingHtml = `<div class="end-game">
                           <h2>Game Over</h2>
                           <h3>${endMessage}</h3>
                           <p class="end-emoji">${endEmoji}</p>
                        </div>`
   document.body.innerHTML = endingHtml
}

document.querySelector('#attack-button').addEventListener('click', attack)

function pauseAttackBtn() {
   document.querySelector('#attack-button').removeEventListener('click', attack)
   setTimeout(() => {
      document.querySelector('#attack-button').addEventListener('click', attack)
   }, 1600)
}