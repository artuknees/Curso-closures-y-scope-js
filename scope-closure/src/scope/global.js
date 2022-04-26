var hello = 'Hello';
let world = 'Hello world';
const helloworld = 'Hello World!';

// defino la funcion. De manera distinta aca.
// la llamo como constante, luego pongo los argumentos y
// al final lo resultados
//voy a ver como se abarca cada variable definida.
const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();


// mala practica asignando variables globales dentro de una funcion
// tampoco se la creo con su palabra reservada var, let o const
const helloWorld = () => {
    globalVar = 'i am global'
}

helloWorld();
console.log(globalVar)


// haciendo una doble asignacion de variables
// estoy creando una variable global y otra local
// esto tambien es una mala practica
const anotherFunction2 = () => {
    var localVar = globalVar = 'I am a Global';
}

anotherFunction2()
console.log(globalVar)