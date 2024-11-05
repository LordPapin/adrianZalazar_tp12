var compacto = 14000
var mediano = 17000
var camioneta = 28000
var silla = ""
var sillaNiño = 1200
var dias = 0
var prompt = require("prompt-sync")()
function rentarVeiculo() {
    console.log("hola bienvenido a nuestro sistema online para rentar un veiculo");
    var seleccion = prompt(`tenemos 3 opciones para veiculos
        1_ para un veiculo pequeño que cuesta $14000 por dia
        2_ para un veiculo mediano que cuesta $17000 por dia
        3_ para una camioneta que cuesta 28000 por dia
        `,null)
    switch (seleccion) {
            case "1":
                dias = prompt(`acaba de selecionar un veiculo pequeño ¿cuantos dias le gustaria alquilarlo? `,null)
                silla = prompt(`le gustaria alquilar tambien una silla para niños por un extra de $1200 adicionales por dia
                    ¿si o no?
                    `,null)
                if (silla == "si") {
                    var pagoFinal = (compacto + sillaNiño)*dias
                    console.log(`
                        Estimado cliente: en base al veiculo compacto alquilado y añadiendo la silla para niños
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                    
                    
                } else {
                    var pagoFinal = compacto *dias
                    console.log(`
                        Estimado cliente: en base al veiculo compacto alquilado,
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                    
                }
                break;
            case "2":
                dias = prompt(`acaba de selecionar un veiculo mediano ¿cuantos dias le gustaria alquilarlo? `,null)
                silla = prompt(`le gustaria alquilar tambien una silla para niños por un extra de $1200 adicionales por dia
                    ¿si o no?
                    `,null)
                if (silla == "si") {
                    var pagoFinal = (mediano + sillaNiño)*dias
                    console.log(`
                        Estimado cliente: en base al veiculo mediano alquilado y añadiendo la silla para niños
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                    
                    
                } else {
                    var pagoFinal = mediano *dias
                    console.log(`
                        Estimado cliente: en base al veiculo mediano alquilado,
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                }
                break;
            case "3":
                dias = prompt(`acaba de selecionar un veiculo camioneta ¿cuantos dias le gustaria alquilarlo? `,null)
                silla = prompt(`le gustaria alquilar tambien una silla para niños por un extra de $1200 adicionales por dia
                    ¿si o no?
                    `,null)
                if (silla == "si") {
                    var pagoFinal = (camioneta + sillaNiño)*dias
                    console.log(`
                        Estimado cliente: en base al veiculo camioneta alquilado y añadiendo la silla para niños
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                    
                    
                } else {
                    var pagoFinal = camioneta *dias
                    console.log(`
                        Estimado cliente: en base al veiculo camioneta alquilado,
                        considerando que lo ha solicitador por ${dias} dias para utilizarlo, el monto a pagar es de $${pagoFinal}
                        `);
                    }
                break;
        
            default:
                console.log("su opcion no corresponde a una aceptada por el sistema");
                
                break;
    }
    
    
}
console.log(rentarVeiculo());
