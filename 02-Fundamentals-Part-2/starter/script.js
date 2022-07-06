

function logger(){
    console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);