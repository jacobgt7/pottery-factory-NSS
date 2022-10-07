const buyClay = () => {
    let newClay = {}
    return newClay
}

const makePottery = (clayObj) => {
    clayObj.shape = "Bowl"
    return clayObj
}

const bisqueFire = (potteryObj) => {
    potteryObj.readyForGlazing = true
    return potteryObj
}

const glazePottery = (potteryObj) => {
    if (potteryObj.readyForGlazing === true) {
        potteryObj.glazing = "Midnight Blue"
        return potteryObj
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

const finalFiring = (potteryObj, kilnTemp) => {
    if (kilnTemp > 1200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}

let clay = buyClay()

let pottery = makePottery(clay)

let bisqueFiredPottery = bisqueFire(pottery)

let glazedPottery = glazePottery(bisqueFiredPottery)

let finishedPottery = finalFiring(glazedPottery, 1400)
console.log(finishedPottery)

finishedPottery = finalFiring(glazedPottery, 1200)
console.log(finishedPottery)