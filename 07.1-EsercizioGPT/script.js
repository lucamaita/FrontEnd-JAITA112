const videogameForm = document.getElementById("videogameForm");
const videogameList = document.getElementById("videogameList");

videogameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const platforms = document.getElementById("platforms").value;
    const price = document.getElementById("price").value;
    const pegi = document.getElementById("pegi").value;
    const releaseDate = document.getElementById("releaseDate").value;

    // Crea un nuovo elemento di videogame
    const videogameItem = document.createElement("div");
    videogameItem.classList.add("videogame-item");
    videogameItem.innerHTML = `
        <h2>${title}</h2>
        <p>Genere: ${genre}</p>
        <p>Piattaforme: ${platforms}</p>
        <p>Prezzo: ${price}</p>
        <p>Pegi: ${pegi}</p>
        <p>Data di Rilascio: ${releaseDate}</p>
        <button class="delete-btn">Elimina</button>
    `;

    // Aggiungi il videogame alla lista
    videogameList.appendChild(videogameItem);

    // Resetta il form
    videogameForm.reset();
});

// Aggiungi l'evento di ascolto per cancellare il videogame quando viene cliccato il pulsante "Elimina"
videogameList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});
