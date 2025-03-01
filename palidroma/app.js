// chiedere all'utente di inserire una parola
let userWord = prompt('inserisci una parola');

if (isPalindroma(userWord)){
    // stampa "la parola e palindroma"
        console.log("la parola e palindroma");
    }else{
    // stampa "la parola non e palintroma"
        console.log("la parola non e palintroma");
    }




// funzione 
function isPalindroma(word){
// converti la parola in minuscolo
    word = word.toLowerCase();
// inverti la parola
    for (let i = 0;i < word.length - i - 1;i++){
        if (word[i] != word[word.length -1 -i]){
            return false // se i caratteri non corrispondono non e palindroma
        }
    };
    return true; // se i caratteri corrispondono la parola e palindromma 
};

