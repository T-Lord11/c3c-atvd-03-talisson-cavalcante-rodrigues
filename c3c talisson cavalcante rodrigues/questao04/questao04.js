/* Desenvolvido por Tálisson Cavalcante Rodrigues
    receba um número e mostre a contagem até ele substituindo os divisiveipor 9,5 e 9 e 5 ao mesmo tempo pelas palavras Luidy,Moura e LuidyMoura
*/

// Selecionando os elementos da interface


let res = document.querySelector("#resultado");
let btn = document.querySelector("#avaliar");
let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let aviso = document.querySelector("#aviso");

//função para escrever no array de resultado inserindo as palavras

function contar(n) {
    n = Number.parseInt(n);
    let contagem = [];
    for (var i = 1; i <= n; i++) {
        console.log('entrou');
        if (i % 5 == 0 && i % 9 == 0) {
            contagem.push("LuidyMoura");
        } 
        else if (i % 5 == 0) {
            contagem.push("Luidy");
        } 
        else if (i % 9 == 0) {
            contagem.push("Moura");
        } 
        else {
            contagem.push(i);
        }

    }
    return contagem;
}

//avisos visuais de preenchimento ao user, caso problemas não sejam identificados a função será chamada
let n = document.querySelector("#numero");
n.onblur = function () {
    if (n.value == "" || n.value <= 0) {
        n.style = "border-color: #EB0D3C";
        l1.style = "color: #EB0D3C";
    } 
    else {
        n.style = "border-color: #0DB51C";
        l1.style = "color: #0DB51C";
    }
}

btn.onclick = function () {
    var n = document.querySelector("#numero").value;
    if (n == "") {
        n.focus();
        aviso.innerText = "Digite um valor";
    } 
    else if (n <= 0) {
        aviso.innerText = "Digite um valor positivo";
        n.style = "border-color: #EB0D3C";
        l1.style = "color: #EB0D3C";
        n.value = "";
    } 
    else {
        res.innerHTML = contar(n);
        aviso.innerText = "";
    }
}

//aumentar tamanho de caixa de resultado para mostrar todos os valores com base no tamanho da entrada
function auto_height(elem) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight) + "px";
}