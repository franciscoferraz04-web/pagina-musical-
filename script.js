const botaoClaro = document.getElementById("temaClaro");
const botaoEscuro = document.getElementById("temaEscuro");
const botaoAumenta=document.getElementById("aumentarFonte");
const botaoDiminui=document.getElementById("diminuirFonte");
const botaoPadrao=document.getElementById("temaPadrao");
const divLetra=document.getElementById("letra");

let tamanhoAtual= parseInt(localStorage.getItem("tamanhoFonte")) || 18;

const temaSalvo = localStorage.getItem("tema");

divLetra.style.fontSize = tamanhoAtual + "px";

botaoPadrao.addEventListener("click", () => {
    tamanhoAtual = 18;
    divLetra.style.fontSize = tamanhoAtual + "px";
    localStorage.setItem("tamanhoFonte", tamanhoAtual);
});

botaoAumenta.addEventListener("click", () => {
    if(tamanhoAtual <30){
        tamanhoAtual += 2;
        divLetra.style.fontSize = tamanhoAtual + "px";
        localStorage.setItem("tamanhoFonte", tamanhoAtual);
    }
});

botaoDiminui.addEventListener("click", () => {
    if(tamanhoAtual >12){
        tamanhoAtual -= 2;
        divLetra.style.fontSize = tamanhoAtual + "px";
        localStorage.setItem("tamanhoFonte", tamanhoAtual);
    }
});

if(temaSalvo === "escuro"){
    document.body.classList.add("dark-mode");
}

botaoClaro.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("tema", "claro");
});

botaoEscuro.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("tema", "escuro");
});