// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins; //operacion de adicion
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);

// haciendolo asi NO es un closure
// NO recuerda el ultimo valor para agregar

const moneyBox = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox(); // genero su ambito lexico
myMoneyBox(4); // le voy asignando valores. da 4
myMoneyBox(6); // resultado 10
myMoneyBox(10); // resultado 20

// dentro de la funcion devulevo countCoins.
// tengo la estructura del closure
// combina una funcion y el ambito en donde se declara
// declaro saveCoins en la primer funcion y en la segunda hago la suma.
// Luego genero el ambito sobre el cual voy a ejecutar la moneybox
// moneybox es my closure ahora.
// al asignarle valores veo como recuerda los elementos.

