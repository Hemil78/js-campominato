

// *****LOCALE******

// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

function creaCampo(numberSquare) {
    for( var i = 1; i <= numberSquare; i++ ) {
        document.getElementById( "campo" ).innerHTML += "<div class=\"quadrato\">" + i + "</div>";
    }
}

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

function inArray(arr, elm) {
    var count = 0;
    while ( count < arr.length ) {
        if( arr[count] == elm ) {
            return true;
        }
        count++;
    }
    return false;
}




// *****PRINCIPALE********

// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var numeroCelle = parseInt(prompt( "Inserisci un mumero di celle"));
creaCampo(numeroCelle);

// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
var numCPU = [];

while( numCPU.length < 16 ) {
    var number = Math.floor(Math.random() * 100) + 1;
    // controllo che i numeri non si ripetano

    if( inArray(numCPU, number) == false ) {
        // se la condizione e vera
        numCPU.push(number);
    }
}
// i numeri generati dal cpu vanno inseriti nell'array vuoto
console.log(numCPU);

// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

var punteggio = [];
var tentativi = number - numCPU;

document.getElementById( "campo" ).addEventListener("click",
    function(evento) {
        var clickNum = parseInt(evento.target.innerHTML);
        // se clickNum è nell'array numPcu hai perso
        if( inArray( numCPU, clickNum ) == true ){
            alert("Hai perso! Il tuo punteggio è: " + punteggio.length);
            evento.target.classList.toggle("cliccato");
            location.reload();
            // se clicco piu di una volta lo stesso bottone
        } else if(inArray( punteggio, clickNum ) == true ){
            alert("Hai già cliccato su questo numero!");
            // salvo all'interno di punteggio i click validi 
        } else {
            punteggio.push(clickNum);
            evento.target.classList.toggle("blue");
            // se si cliccano tutte le possibilita
            if (punteggio.length == tentativi) {
                console.log(tentativi);
                alert("Molto bene! Hai completato il gioco");
                location.reload();
            }
        }
        
    }
);
        


/* BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */




























