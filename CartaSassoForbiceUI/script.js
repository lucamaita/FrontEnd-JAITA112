function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
             return "sasso";
        case 1:
             return "forbice";
        case 2:
             return "carta";
    }
}

let sceltaPc

var btnCarta = document.getElementById("btnCarta");
var btnForbice = document.getElementById("btnForbice");
var btnSasso = document.getElementById("btnSasso");

btnCarta.addEventListener("click", function() {
    const sceltaUtente = btnCarta.value;
    round(sceltaUtente);
});


btnForbice.addEventListener("click", function() {
    const sceltaUtente = btnForbice.value;
    round(sceltaUtente);
});

btnSasso.addEventListener("click", function() {
    const sceltaUtente = btnSasso.value;
    round(sceltaUtente);
});

let ris;

function round(sceltaUtente, sceltaPc) {
    
    sceltaPc=getComputerChoice();

    console.log("Round - Scelta Utente  : " + sceltaUtente)
    console.log("Round - Scleta PC      : " + sceltaPc)

    if (sceltaUtente === sceltaPc) {
        ris = "Pareggio!";
    }
    else if ((sceltaUtente === 'sasso' && sceltaPc === 'forbice')||
            (sceltaUtente === 'carta' && sceltaPc === 'sasso')||
            (sceltaUtente === 'forbice' && sceltaPc === 'carta')) {
        ris = "Hai vinto! " + sceltaUtente.toUpperCase() + " contro " + sceltaPc.toUpperCase();
    } else {
            ris = "Hai perso! " + sceltaUtente.toUpperCase() + " contro " + sceltaPc.toUpperCase();
    }
    console.log(ris + "\n\n\n\n");

    let esito = document.getElementById("esitoRound")

    esito.innerHTML = ris

    esito.classList.add("esito-round");

    setTimeout(function() {
        esito.classList.remove("esito-round");
    }, 250);
    
    return ris;
}