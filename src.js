/*const rangosAQI = [
    {etiqueta : "excelente", de:0, hasta:30},
    {etiqueta : "bueno", de:31, hasta:50},
    {etiqueta : "moderado", de:51, hasta:100},
    {etiqueta : "bajo", de:101, hasta:150},
    {etiqueta : "insalubre", de:151, hasta:200},
    {etiqueta : "peligroso", de:201, hasta:300}
]*/


const calcularPorcentajes = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) => {
    
}



const registrarAQI = (value) => {

}


//Función extra:
/*function registrarLimite (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) {
    
    console.log( encontrarLimites(valorPM10,limitePM10, "PM10"))
    console.log(encontrarLimites(valorPM2punto5, limitePM2punto5, "PM2.5"))
    console.log(encontrarLimites(valorNO2, limiteNO2, "NO2"))
    console.log(encontrarLimites(valorCO, limiteCO, "CO"))
    console.log(encontrarLimites(valorS02,limiteS02, "S02"))
    
}


function encontrarLimites (valor, limite, particula){
    if (limite && valor>limite){
        return ("¡Se superaron los límites de " + particula + " !")
    }else{
        return (":)")
    }
}*/






module.exports.registrarAQI= registrarAQI;
module.exports.calcularPorcentajes= calcularPorcentajes;



