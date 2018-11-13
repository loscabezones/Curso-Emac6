/**
 * Introduccion classe de (Programacion orientada a objetos)
 * 
 */


 class Avenger {

    nombre:string = "sin nombre";
    equipo:string = "sin equipo";
    nombreReal:string = "undefined";

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

 };

 let antman:Avenger = new Avenger("Antman", "cap", "Scott Lang");

 console.log(antman);