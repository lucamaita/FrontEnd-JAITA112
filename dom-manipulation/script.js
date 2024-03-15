const btn = document.getElementById("btn");
const lista = document.getElementById("ul");

btn.onclick = function() {
    let deleteBTN = document.createElement("button");
    let articolo = document.getElementById("item").value
    console.log(articolo);
    document.getElementById("item").value = '';
    const listElement = document.createElement("li");
    const span = document.createElement("span");
    lista.appendChild(listElement);
    span.textContent = articolo
    listElement.appendChild(span);
    deleteBTN.textContent = "Rimuovi articolo";
    listElement.appendChild(deleteBTN)
    deleteBTN.onclick = function() {
        listElement.remove();
    }
}