const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(event){

event.preventDefault()

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmarSenha")
const idade = document.getElementById("idade")

let valido = true

mensagem.textContent = ""
mensagem.className = ""

const campos = [nome,email,senha,confirmarSenha,idade]

campos.forEach(campo => campo.classList.remove("erro"))

if(nome.value.length < 10){

nome.classList.add("erro")
valido = false

}

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regexEmail.test(email.value)){
    email.classList.add("erro")
    valido = false
}

if(senha.value.length < 6){

senha.classList.add("erro")
valido = false

}

if(senha.value !== confirmarSenha.value){

confirmarSenha.classList.add("erro")
valido = false

}

if(idade.value < 18){

idade.classList.add("erro")
valido = false

}

if(valido){

mensagem.textContent = "Cadastro realizado com sucesso!"
mensagem.className = "sucesso"

}else{

mensagem.textContent = "Corrija os campos destacados."
mensagem.className = "erro-msg"

}

})
