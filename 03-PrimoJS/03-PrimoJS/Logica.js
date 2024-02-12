// Commento monoriga
/* Commento multiriga*/

function mostra()
{
    console.log("Hai cliccato MOSTRA()");
    contenitore.style.display = "block";
}

function nascondi()
{
    console.log("Hai cliccato NASCONDI()");
    
    // contenitore è l'id che ho dato nell'HTML al DIV che voglio far mostrare/nascondere
    contenitore.style.display = "none";
}