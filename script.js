let arrayNumeri = [];
let arrayVittoria = [];

const numeri = document.getElementById("numeri");
const testo = document.querySelector(".testo-indovinati");
const tentativi = document.querySelector(".numeri-indovinati");
const timer = document.querySelector(".timer");

// Creo la funzione per popolare un array di numeri casuali fino a 5
function creaArray(array) {
    while (array.length < 5) {
        const numero = Math.floor(Math.random() * 100) + 1;
        if (!array.includes(numero)) {
            array.push(numero);
        }
    }
}

const show = document.getElementById("show");

// Creo la funzione del tasto show al click
show.addEventListener("click", function() {
    
    let second = 10;
    let time = setInterval((myTimer), 1000);
    function myTimer() {
        timer.innerHTML = second;
        second--;
    }
    // Pulisco l'HTML
    testo.innerHTML = "";
    tentativi.innerHTML = "";
    // Chiamo la funzione per creare array
    creaArray(arrayNumeri);
    console.log(arrayNumeri);
    // Metto il mio array nell'HTML
    numeri.innerHTML = arrayNumeri;
    // Creo la funzione per oscurare i numeri
    setTimeout(() => {
        numeri.innerHTML = "";
        clearInterval(time);
    },11000)
    // Creo la funzione per far apparire 5 volte il prompt per indovinare i numeri
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            const indovina = parseInt(prompt("Inserisci i numeri uno alla volta"))
            if (arrayNumeri.includes(indovina)) {
                arrayVittoria.push(indovina);
                console.log(arrayVittoria);
                tentativi.innerHTML = arrayVittoria;
            }
        }
        // Creo una funzione di confronto per vedere se i numeri inseriti sono all'interno dell'array iniziale       
        if (arrayVittoria.length == 5) {
            testo.innerHTML = "Hai indovinato tutti i numeri!";
            } else {
            testo.innerHTML = "Hai indovinato " + arrayVittoria.length + " numeri";
            }
        // Pulisco gli array
        arrayNumeri = [];
        arrayVittoria = [];
    },11500)
})

    