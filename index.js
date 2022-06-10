// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(special) {
    if (special === "*") {
        return function result(emphatic = "a hard worker") {
            return `You are ${special}${emphatic}${special}!`;
        }
    } else if (special === "||") {
        return function result(emphatic = 'a dedicated programmer') {
            return `You are ${special}${emphatic}${special}!`;
        }
    }
}