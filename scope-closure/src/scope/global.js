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
const helloWorld = () => {
    globalVar = 'i am global'
}

helloWorld();
console.log(globalVar)


const anotherFunction = () => {
    var localVar = globalVar = 'I am a Global';
}

anotherFunction()
console.log(globalVar)