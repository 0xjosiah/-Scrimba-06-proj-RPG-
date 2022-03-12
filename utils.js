function getDiceRollsArr (diceCount) {
    return new Array(diceCount).fill().map(i => {
        return Math.floor(Math.random() * 6 + 1)
    })
}


function getDicePlaceholderHtml(dice) {
    return new Array(dice).fill().map(i => {
       return `<div class="placeholder-dice"></div>`
    }).join('')
}

export {getDiceRollsArr, getDicePlaceholderHtml}