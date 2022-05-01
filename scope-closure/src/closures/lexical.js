// Defino una función con una arrow function
const buildCount = (i) => {
    let count = i;

    const displayCount = () => {
        console.log(count++); // le sumo uno en cada vez que paso por ahi, 
        // pero devuelve el resultado antes de incrementar.
    };
    return displayCount;
};

// El ambito lexico son las funciones que se ejecutan usando la 
// cadena del alcance donde estaba vigente en su momento.
// Tenemos el valor de i y podemos acceder a ese desde la función interior.
// La función hijo puede acceder a count y hacer la suma.

const myCount = buildCount(1); // armo el ámbito lexico
myCount(); // voy evaluando la función varias veces.
myCount();
myCount();

// Al correrlo, el resultado es 1, 2 y 3.
// está recordando cual es el valor en cada vuelta

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
// armo OTRO ambito lexico para correr de vuelta la funcion y la ejecuto dos veces.
// Tengo el 1, 2 y 3 del otro ambito y el 10 y 11 de este nuevo ambito
// Al haber armado el nuevo ambito tengo un nuevo closure.

// La función que habia definido se puede usar multiples veces en distintos alcances.