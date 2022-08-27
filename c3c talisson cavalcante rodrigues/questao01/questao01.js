/* Desenvolvido por Tálisson Cavalcante Rodrigues
    receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados
*/

// Selecionando os elementos da interface

let x1 = document.querySelector("#x1");
let x2 = document.querySelector("#x2");
let x3 = document.querySelector("#x3");
let res = document.querySelector("#resultado");
let btn = document.querySelector("#calcular");
let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let l3 = document.querySelector("#l3");
let aviso = document.querySelector("#aviso");


// Alertas visuais de preenchimento ao usuário, se tudo estiver correto é chamada a função do tipo

x1.onblur = function () {
    if (x1.value == "" || x1.value <= 0) {
        l1.style = "color: #EB0D3C";
        x1.style = "border-color: #EB0D3C"
    }
    else {
        l1.style = "color: #0DB51C";
        x1.style = "border-color: #0DB51C"
    }
}

x2.onblur = function () {
    if (x2.value == "" || x2.value <= 0) {
        l2.style = "color: #EB0D3C";
        x2.style = "border-color: #EB0D3C"
    }
    else {
        l2.style = "color: #0DB51C";
        x2.style = "border-color: #0DB51C"
    }
}

x3.onblur = function () {
    if (x3.value == "" || x3.value <= 0) {
        l3.style = "color: #EB0D3C";
        x3.style = "border-color: #EB0D3C"
    }
    else {
        l3.style = "color: #0DB51C";
        x3.style = "border-color: #0DB51C"
    }
}

btn.onclick = function () {
    if (x1.value == "") {
        x1.focus();
    }
    else if (x2.value == "") {
        x2.focus();
    }
    else if (x3.value == "") {
        x3.focus();
    }
    else if (x1.value <= 0 || x2.value <= 0 || x3.value <= 0) {
        x1.value = "";
        x2.value = "";
        x3.value = "";
        res.value = "";
        aviso.innerText = "Insira valores maiores que 0 para os lados";
    }
    else {
        res.value = tipoTriangulo(x1.value, x2.value, x3.value);
        aviso.innerText = "";
    }

}
//Analisar o tipo do triangulo
function tipoTriangulo(x1, x2, x3) {
    x1 = Number.parseFloat(x1);
    x2 = Number.parseFloat(x2);
    x3 = Number.parseFloat(x3);
    if (x1 == x2 && x1 == x3) {
        return "Seu triângulo é Equilátero!";
    }
    else if (x1 != x2 && x1 != x3 && x2 != x3) {
        return "Seu triângulo é Escaleno!";
    }
    else {
        return "Seu triângulo é Isósceles!";
    }
}
