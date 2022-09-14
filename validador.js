function validar() {
    // Obtem o nome e o email digitados pelo usuário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var mensagem = document.getElementById("mensagem").value;
 
    
    var nome_erro = document.getElementById("nome-erro");
    var email_erro = document.getElementById("email-erro");
    var celular_erro = document.getElementById("celular-erro");
    var mensagem_erro = document.getElementById("mensagem-erro");
    
     //Limpa os erros anteriores
    nome_erro.innerHTML = "";
    email_erro.innerHTML = "";
    celular_erro.innerHTML = "";
    mensagem_erro.innerHTML = "";
    
     if (nome.length < 3) {
    nome_erro.innerHTML = "O nome deve ter no mínimo 3 caracteres"
    return false;
    }
    
     if (email.indexOf("@") == -1) {
    email_erro.innerHTML = "Por favor, informe um email válido"
    return false;
    }

    if (celular.length < 9) {
      celular_erro.innerHTML = "O campo de celular deve ter no mínimo 9 números"
      return false;
      }

    if (mensagem.length == 0) {
      mensagem_erro.innerHTML = "O campo mensagem não foi preenchido"
      return false;
      }

    
    //Passou por todos os testes!
    return true;
    }