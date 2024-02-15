function Videogioco(titolo, genere, piattaforma, prezzo, pegi, dataRilascio) {
    this.titolo = titolo;
    this.genere = genere;
    this.piattaforma = piattaforma;
    this.prezzo = prezzo;
    this.pegi = pegi;
    this.dataRilascio = dataRilascio;
}

const videogiochi = [];

function aggiungiVideogioco(event) {
    event.preventDefault();

    const titolo = document.getElementById("titolo").value;
    const genere = document.getElementById("genere").value;
    const piattaforma = document.getElementById("piattaformaScelta").value;
    const prezzo = document.getElementById("prezzo").value;
    const pegi = document.getElementById("pegi").value;
    const dataRilascio = document.getElementById("dataRilascio").value;

    const nuovoVideogioco = new Videogioco(titolo, genere, piattaforma, prezzo, pegi, dataRilascio);

    videogiochi.push(nuovoVideogioco);

    aggiornaListaVideogiochi();
}

function aggiornaListaVideogiochi() {
    const listaVideogiochi = document.getElementById("lista");
    listaVideogiochi.innerHTML = "";

    videogiochi.forEach(function(videogioco, index) {
        const nuovoElemento = document.createElement("div");
        nuovoElemento.innerHTML = `
            <h3>${videogioco.titolo}</h3>
            <p>Genere: ${videogioco.genere}</p>
            <p>Piattaforma: ${videogioco.piattaforma}</p>
            <p>Prezzo: ${videogioco.prezzo}</p>
            <p>PEGI: ${videogioco.pegi}</p>
            <p>Data di Rilascio: ${videogioco.dataRilascio}</p>
            <button onclick="rimuoviVideogioco(${index})">Rimuovi</button>
        `;
        listaVideogiochi.appendChild(nuovoElemento);
    });
}

function rimuoviVideogioco(index) {
    videogiochi.splice(index, 1);
    aggiornaListaVideogiochi();
}

const form = document.getElementById("gameForm");
form.addEventListener("submit", aggiungiVideogioco);