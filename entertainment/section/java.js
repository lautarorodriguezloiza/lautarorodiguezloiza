let nombre= prompt("Escriba su nombre y apellido")
let fechaDeNacimiento = prompt("Fecha de nacimiento")
let dni = prompt("DNI")




let seleccioneProducto = Number(prompt("Seleccione una opcion: \n 1 - playstation \n 2 - xboxSeriesX \n 3 - nvidiaRtx \n 4 - nintendoSwitch \n 5 - sillaGamer"))

const precioPlay = 400000
const precioxboxSeriesX = 300000
const precionvidiaRtx   = 1000000
const precionintentoSwitch = 100000
const preciosillaGamer    = 50000


let seleccionCuotasTres = 3
let seleccionCuotasSeis = 6
let seleccionCuotasDoce = 12



numeroDeCuotas(seleccioneProducto)



function numeroDeCuotas(productos ){
    
    let numeroIngresado = parseInt(prompt("Tenemos de 3 ,6 , 12 cuotas sin interes fijate cuanto deberias pagar dependiendo las cuotas"))
    
            switch(productos){
                case 1:
                    if(numeroIngresado==3) {
                        let resultado = precioPlay/seleccionCuotasTres
                            alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }else if(numeroIngresado==6){
                        let resultado = precioPlay/seleccionCuotasSeis
                            alert(precioPlay  + " por " + numeroIngresado   + " meses es =" + resultado);
                    }else if(numeroIngresado==12){
                        let resultado = precioPlay/seleccionCuotasDoce
                            alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }
                    break;
                    


                case 2:
                    if(numeroIngresado==3) {
                        let resultado = precioxboxSeriesX/seleccionCuotasTres
                            alert(precioxboxSeriesX  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }else if(numeroIngresado==6){
                        let resultado = precioxboxSeriesX/seleccionCuotasSeis
                            alert(precioxboxSeriesX  + " por " + numeroIngresado   + " meses es =" + resultado);
                    }else if(numeroIngresado==12){
                        let resultado = precioxboxSeriesX/seleccionCuotasDoce
                            alert(precioxboxSeriesX + " por " +   numeroIngresado + " meses es =" + resultado);
                    }
                    break;
                            
                case 3:

                    if(numeroIngresado==3) {
                        let resultado = precionvidiaRtx/seleccionCuotasTres
                            alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }else if(numeroIngresado==6){
                        let resultado = precionvidiaRtx/seleccionCuotasSeis
                            alert(precionvidiaRtx  + " por " + numeroIngresado   + " meses es =" + resultado);
                    }else if(numeroIngresado==12){
                        let resultado = precionvidiaRtx/seleccionCuotasDoce
                            alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }
                    break;
                case 4:
                    if(numeroIngresado==3) {
                        let resultado = precionintentoSwitch/seleccionCuotasTres
                            alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }else if(numeroIngresado==6){
                        let resultado = precionintentoSwitch/seleccionCuotasSeis
                            alert(precionintentoSwitch  + " por " + numeroIngresado   + " meses es =" + resultado);
                    }else if(numeroIngresado==12){
                        let resultado = precionintentoSwitch/seleccionCuotasDoce
                            alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }
                    break;

                case 5:
                    if(numeroIngresado==3) {
                        let resultado = preciosillaGamer/seleccionCuotasTres
                            alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }else if(numeroIngresado==6){
                        let resultado = preciosillaGamer/seleccionCuotasSeis
                            alert(preciosillaGamer  + " por " + numeroIngresado   + " meses es =" + resultado);
                    }else if(numeroIngresado==12){
                        let resultado = preciosillaGamer/seleccionCuotasDoce
                            alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
                    }
                    break;
}
}



alert("Espero que le haya servido! :D")

alert("Elija los productos que desea comprar")



class Producto{
    constructor(){
        this.seleccion = prompt("Seleccione un producto que vio anteriormente \n 1 - playstation: 400000 \n 2 - xboxSeriesX: 300000 \n 3 - nvidiaRtx: 1000000 \n 4 - nintendoSwitch: 100000 \n 5 - sillaGamer: 50000")
        this.precio = parseInt(prompt("Ponga el precio porfavor"))
    }
}
const arrayDeProducto= []
let seguirAgregandoAlCarrito= true
while(seguirAgregandoAlCarrito){
    let seguirAgregando= new Producto ()
    arrayDeProducto.push(seguirAgregando)

    let finalizaCompra= parseInt(prompt("Elija 1 si quiere seguir agregando productos al carrito, elija 2 si no quiere agregar mas "))
    if(finalizaCompra===2){
    break}
}
function mostrarTotal(){
    let precioTotal = 0
    for(productos of  arrayDeProducto){
        precioTotal = precioTotal+ productos.precio
    }
    return precioTotal
}

alert("El total de la compra es" + mostrarTotal())

alert("Muchas Gracias por su compra!!!")










