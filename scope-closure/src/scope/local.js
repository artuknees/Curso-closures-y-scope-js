// defino una función arrow
// dentro declaro una constante y la imprimo. todo ok
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
// aca, al llamar la funcion, se imprime la variable
console.log(hello);
// si trato de imprimirla por fuera, no la encuentra.



var scope = 'I am global';
//defino una variable global

const functionScope = () => {
    var scope = 'i am just a local';
    const func = () => {
        return scope
    }
    console.log(func());
}
// defino una función que redefine la variable y hace una impresion

functionScope();
// llamando a la funcion, imprime la version local de la variable
console.log(scope);
// haciendo el console log, imprimo la global