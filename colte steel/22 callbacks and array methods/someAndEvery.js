// every key word - it returns true if all the elements in the array satisfy the condition
// some key word - it returns true if atleast one element in the array satisfies the condition

// nums = [2, 3, 4, 6]
// isOddEl = nums.some(n => n % 2)
// console.log(isOddEl)

// isEveryEven = nums.every(n => !(n % 2))
// console.log(isEveryEven)

const marks = [88, 45, 66, 77]
const isPassed = marks.every(n=>n>=35)
console.log(isPassed)
const isFailed = marks.some(n => n < 35)
console.log(isFailed)