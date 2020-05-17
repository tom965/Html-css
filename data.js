//creazione oggetto data
var date = new Date();
//creazione variabil altri dati
var year = date.getFullYear();
var mese = date.getMonth();
var giorno = date.getDate();
var mese_reale = mese++ ; //variabile che aggiusta il conteggio dei mesi
//variabili per sostituire le scritte
var ul = document.getElementById('sad') ;
var el = document.getElementById('data');
//stringa per scrivere la data
el.innerHTML = '<p>Oggi è il ' + giorno + - + mese + - + year + '</p>';
//funzione per la fine scuola
function fine_scuola() {
  var fine = new Date('06 06, 2020') ; //costante giorno fine scuola
  var giorni_giusti = 86400000 ; //costante millisecondi in un giorno
  var manca = (fine - date) / giorni_giusti ; //variabile che fa l' operazione di quanti giorni mancano
  var arrotondo = Math.round(manca) ; //variabile che arrotonda il risultato all' intero più vicino
  var tl = document.getElementById('manca') ; //varaibile scritta
  tl.innerHTML = '<p>Alla fine della scuola mancano ' + arrotondo + ' giorni' + '</p>' ; //stringa che scrive il risultato
}
fine_scuola() ; //richiamo della funzione
function ora() {
var ora = date.getHours() ;
var minuti = date.getMinutes() ;
var ol = document.getElementById('ora') ;
ol.innerHTML =  'Sono le ore ' + ora + ' e ' + minuti  + ' minuti'  ;
}
ora() ;