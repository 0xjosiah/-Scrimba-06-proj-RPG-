import characterData from "./data.js"
import Character from "./Character.js"
import { getDicePlaceholderHtml } from "./utils.js"

const orc = new Character(characterData.monster)
const wizard = new Character(characterData.hero)

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()

function attack() {
   wizard.getDiceHtml()
   wizard.takeDamage()
   orc.getDiceHtml()
   orc.takeDamage()
   render()
}

document.querySelector('#attack-button').addEventListener('click', attack)