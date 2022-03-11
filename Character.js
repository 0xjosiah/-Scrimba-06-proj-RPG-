import {getDiceRollsArr} from "./utils.js"

export default function Character(data) {
    const {id, name, avatar, health, dice} = data
    Object.assign(this, data)
 
    this.getDiceHtml = function(dice) {
       return getDiceRollsArr(dice).map(num => {
          return `<div class="dice"> ${num} </div>`
       }).join('')
    }
 
    this.getCharacterHtml = function() {
       let diceHtml = this.getDiceHtml(dice)
       return `
          <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <img class="avatar" src='${avatar}'/>
             <p class="health">health: <b> ${health} </b></p>
             <div class="dice-container">${diceHtml}</div>
          </div>
       `;
    }
 
    this.getDOMid = function() {
       return document.querySelector(`#${id}`)
    }
}