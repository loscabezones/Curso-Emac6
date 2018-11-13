/**
 * Promesas
 */

let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("promesa terminada")

        //Si termina bien //
        /* resolve(); */

        //si termina mal //
        reject();
    }, 1500);
});


console.log("Paso1");

prom1.then(() => console.log("ejecutarme cuando se termine bien"), () => console.error("ejecutarme si todo sale mal"));

console.log("Paso2");