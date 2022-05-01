var a = 'Hello'; // esto es un scope global

function hello () {
    let b = 'Hello world';
    const c = 'Hello World!';
    if (true){
        let d = 'Hello World!!';
        debugger // esta palabra reservada hace que el codigo se detenga ahi y pueda ver
    }
}

hello();


// análisis de debugging sobre closures

const moneyBox = (coins) => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox(); 
myMoneyBox(4); 
myMoneyBox(6); 
myMoneyBox(10); 
