function getDiceRollsArr (diceCount) {
    return new Array(diceCount).fill().map(() =>
        Math.floor(Math.random() * 6 + 1)
    )
}

function getDicePlaceholderHtml(dice) {
    return new Array(dice).fill().map(() => 
        `<div class="placeholder-dice"></div>`
    ).join('')
}

const getPercentage = (maximumHealth, remainingHealth) => Math.round(remainingHealth / maximumHealth * 100)

export {getDiceRollsArr, getDicePlaceholderHtml, getPercentage}