/**
 * Promesas
 */
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promesa terminada");
        //Si termina bien //
        /* resolve(); */
        //si termina mal //
        reject();
    }, 1500);
});
console.log("Paso1");
prom1.then(function () { return console.log("ejecutarme cuando se termine bien"); }, function () { return console.error("ejecutarme si todo sale mal"); });
console.log("Paso2");
