const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
//aca puedo ejecutar la funcion


console.log(fruit);
// esta no la encuentra


const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}
// esto falla porque "y" ya se asigno una vez dentro de la funcion.
// las variables declaradas con let y const no se pueden reasignar

anotherFunction();