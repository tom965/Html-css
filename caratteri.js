function caratteri() {
	var testo = document.getElementById('testo').value ; //riconosce il valore del testo come stringa
    var scritta = document.getElementById('bo') ;//seleziona un paragrafo
	var lunghezza = testo.length ; //converte "testo", che è una stringa in un numero
	var corretto = ++lunghezza;
	scritta.innerHTML = '<p> Hai scritto ' + corretto + ' caratteri.</p>' ;
}
testo.addEventListener('blur', caratteri , false) ;
testo.addEventListener('keypress' , caratteri , false) ;
