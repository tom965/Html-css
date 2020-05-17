//creazione variabili
var numero ;
var text ;
// funzione che crea il numero random ,lo arrotonda e stampa a schermo una frase
function num() {
	numero = Math.round( Math.random() *101 ) ;
	text = document.getElementById('fortuna') ;
	text.innerHTML = '<p> Vediamo se oggi è il tuo giorno fortunato </p>' ;
}
//funzione richiamata
num() ;
//decisione if: se il numero random è maggiore di 80 restituisce true, apre una finestra e apre index.
if (numero > 90) {
    window.alert('Oggi è il tuo giorno fortunato') ;
    window.open('index.html') ;	
}
//se viene restituito false apre una finestra e ricarica la pagina. Si crea una specie di ciclo.
else {
	window.alert('mi spiace oggi non sei fortunato, ritenta domani') ;
	window.location.reload() ;
}
