import {getDicePlaceholderHtml, getDiceRollsArr, getPercentage} from "./utils.js"

export default class Character {
   constructor(data) {
      Object.assign(this, data)
      this.diceArray = getDicePlaceholderHtml(this.dice)
      this.maxHealth = this.health
   }
   
   
   getDiceHtml() {
      this.currentDiceScore = getDiceRollsArr(this.dice)
      this.diceArray = this.currentDiceScore.map(num => `<div class="dice"> ${num} </div>`).join('')
   }
   
   
   takeDamage(attackScoreArray) {
      this.health -= attackScoreArray.reduce((pv, cv) => pv + cv);
      (this.health > 0) ? this.health : this.health = 0
      if (this.health == 0) this.isDead = true
   }
   
   getHealthBar() {
      const percent = getPercentage(this.maxHealth, this.health)
      const danger = (percent < 26) ? 'danger' : ''
      return `
      <div class="health-bar-outer">
      <div class="health-bar-inner ${danger}" style="width: ${percent}%;"></div>
      </div>`
    }
    
    getCharacterHtml() {
       return `
          <div class="character-card">
             <h4 class="name"> ${this.name} </h4>
             <img class="avatar" src='${this.avatar}'/>
             <p class="health">health: <b> ${(this.health)} </b></p>
             ${this.getHealthBar()}
             <div class="dice-container">${this.diceArray}</div>
          </div>
       `;
    }
}