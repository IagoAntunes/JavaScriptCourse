





const yearsUntilRetirement = (birthYeah,firstName) =>{
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,"Joao"));
console.log(yearsUntilRetirement(2022,"Bob",56));

const t1 = teste => 20 - 16;

console.log(t1());