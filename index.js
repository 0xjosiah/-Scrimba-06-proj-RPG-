import characterData from "./data.js"
import Character from "./Character.js"

const orc = new Character(characterData.monster)
const wizard = new Character(characterData.hero)

function render() {
   orc.getDOMid().innerHTML = orc.getCharacterHtml()
   wizard.getDOMid().innerHTML = wizard.getCharacterHtml()
}

render()