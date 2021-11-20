const calcularPocentajes = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) => {
    
    let porcentajePM10 = porcentaje(limitePM10, valorPM10);
    let porcentajePM2punto5 = porcentaje(limitePM2punto5, valorPM2punto5);
    let porcentajeNO2 = porcentaje(limiteNO2,valorNO2);
    let porcentajeCO = porcentaje(limiteCO, valorCO);
    let porcentajeS02 = porcentaje(limiteS02, valorS02);
  
    return {
        porcentajePM10,porcentajePM2punto5,porcentajeNO2,porcentajeCO,porcentajeS02
    }

}

const porcentaje = (max, actual) => {
    if (max && max != 0){
        
        return actual*100/max;
        } else {
        return 0
    } 
    
}



global.rangosAQI = [

    { etiqueta: 'exelente', de: 0, hasta: 30},
    { etiqueta: 'bueno', de: 31, hasta: 50},  
    { etiqueta: 'moderado', de: 51, hasta: 100}, 
    { etiqueta: 'bajo', de: 101, hasta: 150}, 
    { etiqueta: 'insalubre', de: 151, hasta: 200}, 
    { etiqueta: 'peligroso', de: 201, hasta: 300},  
];

const registrarAQI = (value) => {
    if(value < 0 || value > 300 )
    {
        return ("fuera_de_rango");
    }
    else
    {
        while (a = true)
        {
            for (i = 0; i < rangosAQI.length; i++) 
            {
                if((value >= rangosAQI[i].de) && (value <= rangosAQI[i].hasta)){
                    return rangosAQI[i].etiqueta;
                    a = false;
                }
            }
        }
    }
}



//Función extra:
const registrarLimite = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorS02) => {

}





module.exports.registrarAQI= registrarAQI;
module.exports.calcularPocentajes= calcularPocentajes;