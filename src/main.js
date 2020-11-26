export default class App {
convertir(pesos){
    let convertion;
    if(pesos<2000){
        convertion=pesos*20.5;
    }
    else{
        convertion=pesos*22.7;
    }
    return convertion;
}
costoRenta(kilometros){
    let costo;
    if(kilometros<50){
        costo=kilometros*3;
    }
    else if(kilometros>=50 && kilometros<100){
        costo=kilometros*5;
    }
    else if(kilometros>=100&&kilometros<200){
        costo=kilometros*6;
    }
    else{
        costo=kilometros*6.5;
    }
    return costo;
}
}

let app = new App();
console.log(app.convertir(2000));
console.log(app.costoRenta(200));