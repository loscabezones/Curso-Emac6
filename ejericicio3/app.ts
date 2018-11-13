
/**
 * Cadenas de texto
 */

function getNumber(){
    return "Fernando";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 33;

/* let texto = "Hola, " + nombre + " " + apellido + " ("+ edad +")"; */

let texto = `Hola,
${nombre} ${apellido}
(${edad})`; 

let texto2:string = `${ getNumber() }`; 

console.log(texto2);