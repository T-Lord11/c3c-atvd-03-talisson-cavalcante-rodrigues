/* Desenvolvido por Tálisson Cavalcante Rodrigues
    receba a nota de um aluno e avalie se o mesmo passou ou não com critérios de arredondamento de inferiores a 3 para o próximo multiplo de 5
*/

// Selecionando os elementos da interface

let nota = document.querySelector("#nota");
let res = document.querySelector("#resultado");
let btn = document.querySelector("#avaliar");
let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let aviso = document.querySelector("#aviso");

// Alertas visuais de preenchimento ao usuário
nota.onblur = function () {
    if (nota.value == "" || nota.value < 0) {
        nota.style = "border-color: #EB0D3C";
        l1.style = "color: #EB0D3C";
    } 
    else {
        nota.style = "border-color: #0DB51C";
        l1.style = "color: #0DB51C";
    }
}

// Alertando de erros de preenchimento ao tentar iniciar a operação, em caso de ausência de erros as funçoes iniciam
btn.onclick = function () {
    if (nota.value == "") {
        nota.focus();
        aviso.innerText = "Digite um valor";
    } 
    else if (nota.value < 0) {
        aviso.innerText = "Digite um valor positivo";
        nota.style = "border-color: #EB0D3C";
        nota.value = "";
    } 
    else if (nota.value > 100) {
        aviso.innerText = "o valor máximo de nota é 100";
        nota.style = "border-color: #EB0D3C";
        l1.style = "color: #EB0D3C";
        nota.value = "";
        res.value = "";
    } 
    else {
        res.value = avaliador(arredondador(nota.value));
    }
}

//funções de arredondamento e avaliação de aprovação
function arredondador(x) {
    x = Number.parseFloat(x);
    
    if (x < 38) {
        return x;
    }
    let newx = Math.ceil(x / 5) * 5;

    if (newx - x < 3) {
        return newx;
    } 
    else {
        return x;
    }
}

function avaliador(x) {
    x = Number.parseFloat(x);
    if (x < 38) {
        return "Aluno reprovado com " + x;
    } 
    else if (x >= 40 && x <= 100) {
        return "Aluno aprovado com " + x;
    }

}