let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark =  massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2)

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI${bmiMark} is higher than John${bmiJohn}'s`)
}else{
    console.log(`John's BMI${bmiJohn} is higher than Mark's${bmiMark}!"`);
}

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark =  massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2)

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI${bmiMark} is higher than John${bmiJohn}'s`)
}else{
    console.log(`John's BMI${bmiJohn} is higher than Mark's${bmiMark}!"`);
}