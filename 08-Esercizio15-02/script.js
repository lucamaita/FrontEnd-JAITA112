const casellaInput = document.getElementById("casella-input");
const listContainer = document.getElementById("list-container");

function aggiungiPromemoria(){
    if(casellaInput.value === ''){
        alert("Digita qualcosa!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = casellaInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    casellaInput.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completato");
        salva();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salva();
    }
}, false);

function salva(){
    localStorage.setItem("promemoria", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("promemoria");
}
showTask();