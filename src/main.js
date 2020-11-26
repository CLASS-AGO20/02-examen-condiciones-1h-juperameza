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
puedeCircular(dia, terminacion){
    let permiso;
    if(terminacion==0 && dia==1){
        permiso=true;
    }
    else if(terminacion==1&&dia==2){
        permiso=true;
    }
    else if(terminacion==2&&(dia==3||dia==4)){
        permiso=true;
    }
    else if(terminacion>2&&dia<=7){
        permiso=true;
    }
    else{
        permiso=false;
    }
    return permiso;
}
}

let app = new App();
console.log(app.convertir(2000));
console.log(app.costoRenta(200));
console.log(app.puedeCircular(1,0));