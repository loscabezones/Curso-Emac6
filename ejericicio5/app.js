/**
 * Funciones flecha
 */
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log("\n---FUNCIONES BASICAS ------");
console.log("_____________\n");
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
console.log("_____________\n");
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion2(2, 5));
console.log(miFuncion2F(2, 3));
console.log("_____________\n");
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("david"));
console.log(miFuncion3F("francisco"));
console.log("_____________\n");
console.log("----FUNCIONES CON OBJETOS ----\n");
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!!"); }, 1500);
    }
};
hulk.smash();
