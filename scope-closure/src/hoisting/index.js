a = 2;
var a;
console.log(a); // 2

// haciendo esto así, muestra el resultado OK
// el hoisting ELEVA las declaraciones -> pone el "var a" arriba de todo al leer el codigo.
// ocurre cuando se compila. pudimos acceder a un valor que previamente no estuvo declarado.

console.log(b); // undefined
var b = 2;

// aca da undefined porque la variable "b" no está disponible.
// JS solo usa el hoisting en las declaraciones y no en las inicializaciones.


function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Elmo');
// Ejecutar esto obviamente da el resultado del nombre OK.


nameOfDog('Elmo');

function nameOfDog(name) {
    console.log(name);
}

// Ejecutar la funcion antes de declararla va a dar el resultado OK tambien.
// El motor que compila en JS lo hace antes de ser interpretado.
// Lo que hace es primero poner la funcion y luego ejecuta la funcion. 
// Nuevamente esto lo hace el hoisting.