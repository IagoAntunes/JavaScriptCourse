
const now = 2037;
const ageJonas = now - 1995;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);


console.log(ageJonas * 2,ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Jonas';
const lastName = 'Scheedtnann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;// x = x + 10 -> 25
x *= 4;//x = x * 10 -> 100
x ++;//x = x + 1
x --;//x = x - 1;
console.log(x);

console.log(ageJonas > ageSarah);// > , < , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018)