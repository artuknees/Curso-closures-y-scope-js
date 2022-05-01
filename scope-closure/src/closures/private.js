// Vamos a hacer una funcion person. Tendrá unos metodos internos 
// con los que podremos obtener info de una variable o 
// asignarle un valor, pero solo desde adentro
const person = () => {
    var saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
}
// La función va a proteger la variable saveName, que es privada.
newPerson = person();
console.log(newPerson.getName()); // accedo a la variable que no conozco
newPerson.setName('Oscar');
console.log(newPerson.getName());

// Primero devuelve "name" que es el que tiene almacenado.
// Despues le asigno un nuevo valor y lo devuelve.

// No podemos cambiar el valor de saveName desde otro medio que con
// la funcion setName. Estamos generando un valor privado.