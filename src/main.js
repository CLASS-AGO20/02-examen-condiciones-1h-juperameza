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
}

let app = new App();
console.log(app.convertir(2000));