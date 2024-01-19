//Estas son las variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsurio = 0;
let intentos = 1;
let maximoIntentos = 6;
//let palabraVeces = 'vez';

while(numeroUsurio != numeroSecreto) {
    numeroUsurio = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}, por favor:`));

    console.log(typeof(numeroUsurio));
    if (numeroUsurio == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsurio > numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > 3) {
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}