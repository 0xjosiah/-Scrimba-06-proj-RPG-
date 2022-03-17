import {getDicePlaceholderHtml, getDiceRollsArr, getPercentage} from "./utils.js"

export default function Character(data) {
    const {id, name, avatar, health, dice} = data
    Object.assign(this, data)
 
    this.diceArray = getDicePlaceholderHtml(dice)

    this.getDiceHtml = function() {
       this.currentDiceScore = getDiceRollsArr(dice)
       this.diceArray = this.currentDiceScore.map(num => `<div class="dice"> ${num} </div>`).join('')
    }

    this.maxHealth = health

    this.takeDamage = function(attackScoreArray) {
       this.health -= attackScoreArray.reduce((pv, cv) => pv + cv);
       (this.health > 0) ? this.health : this.health = 0
       if (this.health == 0) this.isDead = true
    }
      
    this.getHealthBar = () => {
       const percent = getPercentage(this.maxHealth, this.health)
       const danger = (percent < 26) ? 'danger' : ''
       return `
       <div class="health-bar-outer">
         <div class="health-bar-inner ${danger}" style="width: ${percent}%;"></div>
       </div>`
    }
 
    this.getCharacterHtml = function() {
       return `
          <div class="character-card">
             <h4 class="name"> ${name} </h4>
             <img class="avatar" src='${avatar}'/>
             <p class="health">health: <b> ${(this.health)} </b></p>
             ${this.getHealthBar()}
             <div class="dice-container">${this.diceArray}</div>
          </div>
       `;
    }
 
    this.getDOMid = function() {
       return document.querySelector(`#${id}`)
    }
}