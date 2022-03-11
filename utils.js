function getDiceRollsArr (diceCount) {
    return new Array(diceCount).fill().map(i => {
        return Math.floor(Math.random() * 6 + 1)
    })
}

export {getDiceRollsArr}