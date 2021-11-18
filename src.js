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
/*const registrarLimite = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) => {
    
    if (valorPM10>limitePM10 && limitePM10){
        return ("¡Se superaron los límites de PM10 !")
    }else if (valorPM2punto5>limitePM2punto5 && limitePM2punto5){
        return ("¡Se superaron los límites de PM2.5 !")
    }else if (valorNO2>limiteNO2 && limiteNO2){
        return ("¡Se superaron los límites de NO2 !")
    }else if (valorCO>limiteCO && limiteCO){
        return ("¡Se superaron los límites de CO !")
    }else if (valorS02>limiteS02 && limiteS02){
        return ("¡Se superaron los límites de SO2 !")
    }else{
        return ("Ninguna partícula sobrepasa los límites")
    }
}*/






module.exports.registrarAQI= registrarAQI;
module.exports.calcularPorcentajes= calcularPorcentajes;



