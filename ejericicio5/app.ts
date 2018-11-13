/**
 * Funciones flecha
 */



 let miFuncion = function (a:any){
     return a;
 }


 let miFuncionF = (a:any) => a;
 
 console.log ("\n---FUNCIONES BASICAS ------")
 console.log("_____________\n");
 console.log( miFuncion("Normal") );
 console.log( miFuncionF("Flecha") );
 console.log("_____________\n");


 let miFuncion2 = function (a:any, b:any) {
     return a + b; 
 }
 let miFuncion2F =  (a:any, b:any) => a + b ;


 console.log(miFuncion2(2, 5));
 console.log(miFuncion2F(2,3));
 console.log("_____________\n");

 let miFuncion3 = function ( nombre:string){
     nombre = nombre.toUpperCase();
     return nombre;
 }

 let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
 };

 console.log(miFuncion3("david"));
 console.log(miFuncion3F("francisco"));
 console.log("_____________\n");

 console.log("----FUNCIONES CON OBJETOS ----\n")

 let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout( () => console.log(this.nombre + " smash!!!"), 1500 );
    }
 }

 hulk.smash();