import characterData from "./data.js"
import Character from "./Character.js"

const monstersArr = ['orc', 'goblin', 'demon']
const wizard = new Character(characterData.hero)
// const monster = getNewMonster()

function getNewMonster() {
   const nextMonsterData = characterData[monstersArr.shift()]
   return (!nextMonsterData) ? new Character(nextMonsterData) : {}
}

const nextMonsterData = () => new Character(characterData[monstersArr[0]])

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = nextMonsterData().getCharacterHtml()
}

render()

function attack() {
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   render()
   if(orc.isDead || wizard.isDead) {
      endGame()
   }
}

function endGame() {
   const endMessage = orc.isDead && wizard.isDead ? 'No victors - all dead'
                     : orc.isDead ? 'The wizard wins'
                     : 'The orc pulled it off'
   const endEmoji = (wizard.isDead) ? "💀" : "🔮"
   const endingHtml = `<div class="end-game">
                           <h2>Game Over</h2>
                           <h3>${endMessage}</h3>
                           <p class="end-emoji">${endEmoji}</p>
                        </div>`
   document.body.innerHTML = endingHtml
}

document.querySelector('#attack-button').addEventListener('click', attack)