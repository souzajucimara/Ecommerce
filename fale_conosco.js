function enviar(nome, sobrenome, email, assunto, mensagem) {

    var nome = document.querySelector('#form-name');
    var sobrenome = document.querySelector('#form-lastname');
    var email = document.querySelector('#form-email');
    var assunto = document.querySelector('#form-need');
    var mensagem = document.querySelector('#form-message');
    
    if(nome.value != "" || sobrenome.value != "" || email.value != "" || assunto.value != "" || mensagem.value != "") {
        alert('Sua mensagem foi enviada com sucesso!');
    }
else(nome.value == "" || sobrenome.value == "" || email.value == "" || assunto.value == "" || mensagem.value == "") 
        alert('Certifique-se de que todos os campos foram preenchidos!');
    }

enviar() // invoca a função
