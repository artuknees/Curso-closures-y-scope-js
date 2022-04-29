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
// con esto hago que la función countCoins pueda acceder a las variables de moneyBox.
// la primera vez, saveCoins = 0, asique la uso desde moneyBox.
// la segunda, como ya tiene un valor, y tengo generado el ámbito léxico, ya no necesito recurrir
// a la definición de saveCoins de vuelta.
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

