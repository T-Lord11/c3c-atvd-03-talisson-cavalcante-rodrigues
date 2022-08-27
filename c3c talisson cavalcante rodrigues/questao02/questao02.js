/* Desenvolvido por Tálisson Cavalcante Rodrigues
    receba os valores dos parâmetros da equação de segundo grau e retorne as raízes da mesma, em caso de delta negativo retorne "Delta é negativo"
*/

// Selecionando os elementos da interface

let a = document.querySelector("#ax2");
let b = document.querySelector("#bx");
let c = document.querySelector("#c");
let res = document.querySelector("#resultado");
let btn = document.querySelector("#calcular");
let l1 = document.querySelector("#x2");
let l2 = document.querySelector("#x");
let igual = document.querySelector("#igual");
let aviso = document.querySelector("#aviso");


// Alertas visuais de preenchimento ao usuário

a.onblur = function () {
    if (a.value != "" ) {
        a.style = "border-color: #0DB51C";
    }
    else{
        a.style = "border-color: #EB0D3C";
    }
}

b.onblur = function () {
    if (b.value != "" ) {
        b.style = "border-color: #0DB51C";
    }
    else{
        b.style = "border-color: #EB0D3C";
    }
}

c.onblur = function () {
    if (c.value != "" ) {
        c.style = "border-color: #0DB51C";
    }
    else{
        c.style = "border-color: #EB0D3C";
    }
}

// Alertando de erros de preenchimento ao tentar iniciar a operação, em caso de ausência de erros as funçoes iniciam
btn.onclick = function () {
    
if (a.value == "" || a.value == "0") {
        a.focus();
        aviso.innerText="O primeiro valor não pode ser 0";
    } 
    else if (b.value == "") {
        b.focus();
    } 
    else if (c.value == "") {
        c.focus();
    } 
    else {
        let teste=delta(a.value,b.value,c.value);
        if(teste<0){
            res.value = "Delta é negativo";
        }
        else{
            
            res.value =raizes(a.value, b.value, c.value);
            aviso.innerText="";
            
        }
        
    }

}

// Funções de Bhaskara

function delta(a, b, c) {
    a= Number.parseFloat(a);
    b= Number.parseFloat(b);
    c= Number.parseFloat(c);
    return (b*b-(4*a*c));
}

function raizes(a,b,c){
    a= Number.parseFloat(a);
    b= Number.parseFloat(b);
    c= Number.parseFloat(c);
    let x1=((-b + Math.sqrt(delta(a,b,c)))/(2*a));
    let x2=((-b - Math.sqrt(delta(a,b,c)))/(2*a));
    let raiz1e2 = [x1.toFixed(2),x2.toFixed(2)];
    return raiz1e2;
}
