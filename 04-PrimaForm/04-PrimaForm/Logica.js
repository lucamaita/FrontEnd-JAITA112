// JavaScript (o JS in breve) non è tipizzato.
// in JS tutte le variabili sono o VAR o LET

function calcola()
{
    // Chiamo l'elelemento solo tramite il nome dell'ID nell'HTML
    let ba = base;
    // Sconsigliato perchè se dovesse mai esistere in JS una variabile chiamata base
    // la riga 4 prendere il valore della variabile JS anzichè il valore dell'input HTML

    // Chiamo l'elemento tramite il valore dell'id html passando attraverso il DOCUMENT
    // Vantaggioso più sicuro: punta unicamente all'HTML come strategia, senza farsi distrarre dalle variabili JS
    let a = parseFloat(document.getElementById("altezza").value);
    let b = parseFloat(document.getElementById("base").value);

    //DOCUMENT ------------> è colui che detiene tutti gli elementi usati nell'HTML (TAG, id, class, name, attributi...). Si chiama anche DOM
    //GetElementByID() ----> è un metodo che cerca l'elemento HTML (il tag) che ha come id il valore passato nelle tonde
    //VALUE ---------------> Estrapola il valore assolciato all'elemento HTML (in caso di input il value estrapola il valore scritto dall'utente)
    //PARSEFloat/ParseInt -> Sono metodi che cercano di trasformare in numeri decimali/interi i valori passati nelle loro tonde
    
    console.log("Altezza: " + a + "\nBase: " + b);

    let pe = (b+a)*2;
    let ar = b*a;

    console.log("Area: " + ar + "cm2\nPerimetro: " + pe + "cm");

    // Se posso scrivere tra il tag di apertura e di chiusura uso riga 29
    document.getElementById("perimetro").innerHTML = pe;
    // Se non posso scrivere tra il tag di apertura e di chiusura uso riga 31
    document.getElementById("area").value = ar;
}

function pulisci()
{
    document.getElementById("base").value = null;
    document.getElementById("altezza").value = null;
    document.getElementById("perimetro").value = "";
    document.getElementById("area").value = "";
}

/**
 * JSDoc -> Descrive cosa fa la function nello specchietto quando passate sopra una function
 */
function valida()
{
    let a = parseFloat(document.getElementById("altezza").value);
    let b = parseFloat(document.getElementById("base").value);

    if(b != null && a != null)
    {
        if(b > 0 && a > 0)
            calcola();
        else
            alert("Digita un numero valido! (No negativi)");
    }
}
