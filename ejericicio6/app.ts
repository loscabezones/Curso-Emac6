/**
 * Destrocturación de objetos y arrays
 */


let avenger = {
    nombre: "Stive",
    clave: "Capitan America",
    poder: "Droga"
};

let { nombre:alias, clave, poder } = avenger;

/* let nombre = avenger.nombre;
let clave = avenger.clave;
let poder = avenger.poder; */

console.log(alias, clave, poder);

let avengers:string [] = ["Thor", "Stive", "Tony"];

let [ thor, capi, ironman ] = avengers;

console.log(thor, capi, ironman);