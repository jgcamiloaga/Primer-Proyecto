//Estas son las variables
let numeroSecreto = 2;
let numeroUsurio = prompt("Me indicas un número entre 1 y 10, por favor:");

console.log(numeroUsurio);
/*
Este código realiza
la comparación 
*/
if (numeroUsurio == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroSecreto}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}
