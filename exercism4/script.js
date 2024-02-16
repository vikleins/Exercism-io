const hoursWorked = 8
function dayRate(day) {
    return day * hoursWorked
}

function daysInBudget(totalBudget, day) {
    return Math.floor(totalBudget / (dayRate(day)))
}

let newDay = 89
let newTotalBudget = 20000

console.log(daysInBudget(newTotalBudget, newDay))
console.log('teste')
