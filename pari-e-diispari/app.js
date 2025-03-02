// l'utente sceglie pari o dispari
let choiceUser = prompt("scegli pari o dispari:").toLocaleLowerCase();
// l'utente scieglie un numero da 1 a 5
let userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
// genera un numero da 1 a 5 per il computer
let numComputer = randomNumber();

console.log(`Hai scelto: ${choiceUser}`);
console.log(`Il tuo numero: ${userNum}`);
console.log(`Numero del computer: ${numComputer}`);
// somma i due numeri
let sum = userNum + numComputer;
console.log(`soma: ${sum}`);
// stampa il vincitore
if((isEqual(sum) && choiceUser === "pari") || (!isEqual(sum) && choiceUser === "dispari")) {
    console.log("hai vinto");
} else{
    console.log("hai perso")
}



// genera un numero da 1 a 5 per il computer
function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

// crea una funzione per veriificare se la somma e pari 
function isEqual(number) {
    return number % 2 === 0;
}