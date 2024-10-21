const scores = [393235, 345774, 23489, 6553, 3423]

const highScore = scores[0]
const secondHighScore = scores[1]

const [gold, silver, bronz, ...everyoneElse] = scores// here ...everyoneElse is rest not spread

console.log(gold, silver, everyoneElse)