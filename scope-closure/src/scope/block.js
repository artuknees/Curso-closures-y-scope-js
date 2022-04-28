const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);    
    }
    console.log(fruits1);
}

fruits()

// Me va a mostrar solo apple porque esta definido con var
// las otras dos son let y const y quedan definidas en el
// scope del bloque IF



// let x = 1;
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

// muestra primero 2 y luego 1.
// lo que cierro entre corchetes es un bloque, y por eso muestra el 2

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

// aca el resultado va a ser siempre 2


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

