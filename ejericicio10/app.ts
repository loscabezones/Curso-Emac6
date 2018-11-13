/**
 * decoradores de classes
 */


function consola( constructor:Function) {
    console.log(constructor);
}

@consola
 class villano {
     constructor( public nombre:string){

     }
 }

 