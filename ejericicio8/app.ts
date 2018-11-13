/**
 * interfaces
 */

interface Xmen{
    nombre: string,
    poder: string
}


 function enviarMision(xmen:Xmen){
    console.log("Enviando a: " + xmen.nombre)
 };

 function enviarAlCuartel(xmen:Xmen){
    console.log("Enviando al cuartel: " + xmen.nombre)
 };

 let wolverin:Xmen = {
     nombre: "Wolverin",
     poder: "Regeneración"
 }

 enviarMision(wolverin);
 enviarAlCuartel(wolverin);