const anotherFunction = () => {
    for (let i = 0; i<10; i++){
        setTimeout(() => {
            console.log(i)
        },1000)
    }
};
// el codigo deja pasar 1000 ms y luego corre lo que tiene
// en el set time out
anotherFunction();

// con esto creo un closure. cuando empieza a hacer la iteracion, teniamos el ultimo valor de i
// estabamos accediendo al ambito lexico por error.

// involuntariamente estabamos generando un closure que no nos deja hacer el loop que queremos.
// para resolverlo usabamos LET -> usaba un scope de bloque para no 
// tener el alcance hacia el bloque siguiente.

// si bien los closures son utiles para armar logica para asignacion 
// de metodos o valores privados, hay que atender estos detalles.

// Usando LET para i, mantenemos el ambito lexico del bloque unicamente y ahi funciona el codigo.
// Usamos el ambito del bloque y el closure juntos.
// Hay que tener cuidado de no hacer estos closures de forma involuntaria.
