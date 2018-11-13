/**
 * interfaces
 */
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
function enviarAlCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
var wolverin = {
    nombre: "Wolverin",
    poder: "Regeneración"
};
enviarMision(wolverin);
enviarAlCuartel(wolverin);
