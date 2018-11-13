/**
 * Introduccion classe de (Programacion orientada a objetos)
 *
 */
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "sin nombre";
        this.equipo = "sin equipo";
        this.nombreReal = "undefined";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
;
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
