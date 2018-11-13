/**
 * Funciones con parametros obligatorios, por defecto y opcionales
 */
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en el " + momento + " ";
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto + " ";
    }
    console.log(mensaje);
}
activar("Gordon", "batiseñal", "tarde");
