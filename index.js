//funzione che riconosce la lunghezza del testo
function caratteri() {
	var testo = document.getElementById('testo').value ; //riconosce il valore del testo come stringa
  var output = document.getElementById('ciao') ;//seleziona un paragrafo
	var lunghezza = testo.length ; //converte "testo", che è una stringa in un numero
  if (lunghezza >= 140) { //se i caratteri sono più di 140
    output.textContent = 'Il messaggio è troppo lungo! Max 140 caratteri' ; //scrivi il messaggio di avviso
    output.className = 'troppo';
  } else {//altrimenti
    output.textContent = '';//togli ogni messaggio
  }
 }
function prima() { //funzione per dare un avviso prima di scrivere
  var output = document.getElementById('ciao') ; //seleziona un paragrafo
  var testo = document.getElementById('testo').value ;
  var lunghezza = testo.length ;
  output.textContent = 'Max 140 caratteri' ;//messaggio da dare
  output.className = 'normale' ;
  if (lunghezza >= 140) { //se i caratteri sono più di 140
    output.textContent = 'Il messaggio è troppo lungo! Max 140 caratteri' ; //scrivi il messaggio di avviso
    output.className = 'troppo';
  } else {//altrimenti
    output.textContent = 'Max 140 caratteri';//togli ogni messaggio
    output.className = 'normale' ;
  }
}
testo.addEventListener('blur' , caratteri , false) ;//quando non si scrive più avvia la funzione 'caratteri'
testo.addEventListener('focus' , prima , false) ;//quando si inizia a scrivere avvia la funzione 'prima'

