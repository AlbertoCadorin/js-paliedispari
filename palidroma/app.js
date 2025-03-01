// chiedere all'utente di inserire una parola
let userWord = prompt('inserisci una parola');






// funzione 
function isPalindroma(word){
// inverti la parola
    for (let i = 0;i < word.length - i - 1;i++){
        if (word[i] != word[word.length -1 -i]){
            return false // se i caratteri non corrispondono non e palindroma
        }
    };
    return true; // se i caratteri corrispondono la parola e palindromma 
};

