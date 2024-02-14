//      OGGETTI
// In JS gli oggetti sono generalmente di due cateogrie: DEFINITI e INDEFINITI

// Gli oggetti DEFINITI sono oggetti che derivano da classi e da costruttori
// ESEMPIO
class Libro
{
    // Scrivo il costruttore con i parametri
    constructor(t, a, g, np)
    {
        // Assegno alle proprietà i parametri.
        // In JS il THIS è obbligatorio sia quando uso le proprietà che quando richiamo le funzioni!!
        this.titolo = t;
        this.autore = a;
        this.genere = g;
        this.numeroPagine = np;
    }

    scheda()
    {
        // Interpolazione: permette quando usate il backtip (`) di inserire dentro al blocco ${} del codice JS da eseguire, solitamente
        // sono variabili o chiamate di metodi.
        return `Titolo: ${this.titolo}, Autore: ${this.autore}, Genere: ${this.genere}, Pagine: ${this.numeroPagine}`;
        // In pratica è come scrivere:
        //return "Titolo: " + this.titolo + ", Autore: " + this.autore + ", Genere: " + this.genere + ", Pagine: " + this.numeroPagine;
    }
}

//      Esempi di oggetti definiti
// Oggetto Vuoto
const libro1 = new Libro();
// Oggetto "deforme"
const libro2 = new Libro("It",null,"Horror");
// Oggetto "corretto"
const libro3 = new Libro("Misery","King","Horror",450);

//const -> è l'abbreviazione di COSTANTE, inteso nel senso che ha una vita più lunga del VAR/LET ma può comunque venire modificata
libro3.titolo = "Cujo";


// Gli oggetti INDEFINITI non hanno una struttura precisa, ed è quindi fondamentale l'ordine con cui li scriviamo
// ESEMPIO
var libro = {
            titolo: "Misery",
            autore: "King",
            genere: "Horror",
            pagine: 450
            };
var libroBis = {
                    titolo: "Addicted",
                    autore: "Roversi",
                    genere: "Thriller",
                    pagine: 560
                };

//------------------------------------------ Per l'esercizio di oggi useremo i tipi indefiniti ------------------------------------------------------------
var viaggi = 
[
    {
        destinazione: "Roma",
        dataPartenza: "25/02/2024",
        permanenza: 10,
        costoGiornaliero: 20.50,
        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPP-Kr9IduvUfVd3bLULmIuVK_MkqssltSA&usqp=CAU",
        descrizione: "Città bella, con tanto parcheggio e strada lisie come l'olio",
        preventivo: 205.00
    },
    {
        destinazione: "Milano",
        dataPartenza: "05/03/2024",
        permanenza: 5,
        costoGiornaliero: 25.00,
        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Zg7B0eesgoB_4lIurCNL_5FiuShzgDcUiw&usqp=CAU",
        descrizione: "Città tranquilla, senza troppa gente e con persone molto normali per strada",
        preventivo: 125.00
    }
];

function grafica()
{
    var ris = "";

    for(var i = 0; i < viaggi.length; i++)
    {
        ris += `<div class="viaggio">
                    <h3>${viaggi[i].destinazione}</h3>
                    <h4>Partenza: ${viaggi[i].dataPartenza}</h4>
                    <div class="immagineSingola">
                        <img src="${viaggi[i].immagine}"/>
                    </div>
                    <div>
                        <p class="descrizioneViaggio">
                            ${viaggi[i].descrizione}
                        </p>
                        <p class="altreInfo">
                            Permanenza: ${viaggi[i].permanenza}<br>
                            Costo: ${viaggi[i].costoGiornaliero}€/gg<br>
                            Preventivo Finale: ${viaggi[i].preventivo}€
                        </p>
                    </div>
                    <button onclick="viaggi.splice(${i},1); grafica()">Killami</button>
                </div>
                `;
    }

    document.getElementById("contenitoreViaggi").innerHTML = ris;
}

function svuota()
{
    // Modo "Meccanico"
    // document.getElementById("destinazione").value = "";
    // document.getElementById("dataPartenza").value = "";
    // document.getElementById("permanenza").value = "";
    // document.getElementById("costoGiornaliero").value = "";
    // document.getElementById("immagine").value = "";
    // document.getElementById("descrizione").value = "";
    // document.getElementById("preventivo").value = "";

    // Modo Automatico: influenza tutti i tag input con un tipo diverso da button
    var input = document.getElementsByTagName("input");
    
    // Anche così possiamo prendere tutto gli elementi dall'html: "tag", ".class" oppure "#id"
    //var prova2 = document.querySelectorAll("");

    for(var i = 0; i < input.length; i++)
        if(input[i].type !== "button")
            input[i].value = "";

    document.getElementById("descrizione").value = "";
    document.getElementById("preventivo").value = "";
}

function aggiungi()
{
    viaggi.push(
                {
                    destinazione: document.getElementById("destinazione").value,
                    dataPartenza: document.getElementById("dataPartenza").value,
                    permanenza: document.getElementById("permanenza").value,
                    costoGiornaliero: document.getElementById("costoGiornaliero").value,
                    immagine: document.getElementById("immagine").value,
                    descrizione: document.getElementById("descrizione").value,
                    preventivo: document.getElementById("preventivo").value
                }
                );

    grafica();
    svuota();
}
