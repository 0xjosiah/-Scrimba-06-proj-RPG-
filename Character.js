import {getDicePlaceholderHtml, getDiceRollsArr} from "./utils.js"

export default function Character(data) {
    const {id, name, avatar, health, dice} = data
    Object.assign(this, data)
 
    this.diceArray = getDicePlaceholderHtml(dice)

    this.getDiceHtml = function() {
       this.currentDiceScore = getDiceRollsArr(dice)
       console.log('this.currentDiceScore ', this.currentDiceScore)
       this.diceArray = this.currentDiceScore.map(num => {
          return `<div class="dice"> ${num} </div>`
       }).join('')
    }

    this.takeDamage = function() {
       console.log(`${name} is damaged`)
    }
 
    this.getCharacterHtml = function() {
      //  let diceHtml = this.getDiceHtml(dice)
       return `
          <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <img class="avatar" src='${avatar}'/>
             <p class="health">health: <b> ${health} </b></p>
             <div class="dice-container">${this.diceArray}</div>
          </div>
       `;
    }
 
    this.getDOMid = function() {
       return document.querySelector(`#${id}`)
    }
}