let mossaUtente = prompt("Inserisci la tua mossa (Carta/Sasso/Forbice)");

mossaUtente = mossaUtente.toLowerCase();

//mossaUtente = "mossaUtente"

//console.log(mossaUtente);

function creaMossaPC() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1: {
            return "Sasso";
        }
        case 2: {
            return "Carta";
        }
        case 3: {
            return "Forbice";
        }
        default: {
            return 0;
        }
    }
};

let mossaPC = creaMossaPC();

console.log(mossaPC);
console.log(mossaUtente);

function round(mossaPC, mossaUtente) {
    let ris = "";
    if (mossaPC === "Sasso") {
        switch (mossaUtente) {
            case "sasso": {
                ris = "Sasso contro sasso, pari!";
                break;
            }
            case "carta": {
                ris = "Vittoria! Carta batte sasso.";
                break;
            }
            case "forbice": {
                ris = "Sconfitta, Forbice perde contro sasso";
                break;
            }
        }
    } else if (mossaPC === "Forbice") {
        switch (mossaUtente) {
            case "sasso": {
                ris = "Vittoria! Sasso vince contro forbice.";
                break;
            }
            case "carta": {
                ris = "Sconfitta, carta perde contro forbice";
                break;
            }
            case "forbice": {
                ris = "Forbice contro forbice, pari!";
                break;
            }
        }
    } else if (mossaPC === "Carta") {
        switch (mossaUtente) {
            case "sasso": {
                ris = "Sconfitta, sasso perde contro carta.";
                break;
            }
            case "carta": {
                ris = "Carta contro carta, pari!";
                break;
            }
            case "forbice": {
                ris = "Vittoria, forbice vince contro carta";
                break;
            }
        }
    } if (mossaUtente != "carta" && mossaUtente != "sasso" && mossaUtente != "forbice") {
        ris = "Input non validi!";
    }
    return ris;
}
console.log(round(mossaPC, mossaUtente));