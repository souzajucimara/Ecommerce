function entrar(email, senha) {
    var email = document.querySelector('#form-email');
    var senha = document.querySelector('#form-control');
    
    if(email.value != "" || senha.value != "") {
        alert('Bem-vindo!');
    }
    else(email.value == "" || senha.value == "") 
        alert('E-mail ou senha invalidos, por favor, revise as informações!');
    }

entrar() // invoca a função


