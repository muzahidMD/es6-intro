const numbers = [23, 99, 65, 43, 56, 120];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers)
// console.log(max, maxInArray);

const numbers2 = [258, ...numbers, 5278];
console.log(numbers2);