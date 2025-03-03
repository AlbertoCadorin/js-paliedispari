// chiedi pari o dispari 
let choiceUser = askEvenOdd();
if (choiceUser === null) exit();
// l'utente scieglie un numero da 1 a 5
let userNum = askNum();
if (userNum === null) exit();
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
// controllo per il numero scelto 
function askNum(){
    let attemps = 0;
    let num;
    while (attemps < 5){
        num = parseInt(prompt("inserisci un numero da 1 a 5"));
        if (!isNaN(num) && num >= 1 && num <= 5){
            return num;
        }
        console.log("errore! devi inserire un numero tra 1 a 5");
        attemps++;
    }
    console.log("hai esaurito i tentativi")
    return null 
}
// controllo se l'utente a scelto pari o dispari
function askEvenOdd(){
    let attemps = 0;
    let choice;
    while (attemps < 5){
// l'utente sceglie pari o dispari
     choice = prompt("scegli pari o dispari:").toLocaleLowerCase();
     if (choice === "pari" || choice === "dispari"){
        return choice;
     }
     console.log("errore! devi scegliere tra pari o dispari");
     attemps++;
    }
    console.log("hai esaurito i tentativi")
    return null;
}