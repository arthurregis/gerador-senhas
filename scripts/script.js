let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let tooltip = document.querySelector(".tooltip")

let containerPassword = document.querySelector("#container-password")

let charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1236547890!@#$%¨&*()/*-+";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    tooltip.innerHTML = "Clique na senha para copiar"
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    tooltip.innerHTML = "Senha copiada!"
}