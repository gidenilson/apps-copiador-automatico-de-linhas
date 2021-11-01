const lista = document.getElementById("lista");
const button = document.getElementById("ok");
const numeracao = document.getElementById("numeracao");
const wrapper = document.getElementById("wrapper");
const resposta = document.getElementById("resposta");
let linhas;

const clickLinha = function (evt) {
    let p = evt.target;
    let div = p.parentElement;
    navigator.clipboard.writeText(p.innerHTML);
    div.classList.add("copiada");
    div.removeEventListener("click", this);
};
button.addEventListener("click", () => {
    linhas = lista.value.split("\n");
    wrapper.innerHTML = "";

    let numero = 1;
    linhas.forEach((linha) => {
        if (linha.trim() == "") {
            return;
        }
        let div = document.createElement("div");
        let span = document.createElement("span");
        if (numeracao.checked) {
            span.innerHTML = numero++;
        }

        span.classList.add("numeracao");
        let p = document.createElement("p");
        p.classList.add("linha-texto");
        div.appendChild(span);
        div.appendChild(p);
        p.innerHTML = linha;
        div.classList.add("linha");

        p.addEventListener("click", clickLinha);
        wrapper.appendChild(div);

        resposta.style.display = "block";
        lista.value = "";
    });
});
