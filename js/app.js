

/* -- Inicio aba Cadastro -- */

    //validação do nome 

    var iptNome = document.getElementById("nome")

    iptNome.onblur = function() {
        var regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
        var msgNomeError = document.querySelector(".msg-nome.dado-nok");
        var msgNomeOk = document.querySelector(".msg-nome.dado-ok");

        if(regexNome.test(iptNome.value)){
            msgNomeError.style.display = 'none';
            msgNomeOk.style.display = "block";
            msgNomeOk.style.color = "green";
        } else {
            msgNomeOk.style.display = "none";
            msgNomeError.style.display = 'block';
            msgNomeError.style.color = "red";
        }
    }

    //validacao do Email de Cadastro


    var iptEmailTwo = document.getElementById("email2")

    iptEmailTwo.onblur = function() {
        var regexEmailTwo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var msgEmailTwoError = document.querySelector(".msg-email-2.dado-nok");
        var msgEmailTwoOk = document.querySelector(".msg-email-2.dado-ok");

        if(regexEmailTwo.test(iptEmailTwo.value)){
            msgEmailTwoError.style.display = 'none';
            msgEmailTwoOk.style.display = "block";
            msgEmailTwoOk.style.color = "green";
        } else {
            msgEmailTwoOk.style.display = "none";
            msgEmailTwoError.style.display = 'block';
            msgEmailTwoError.style.color = "red";
        }
    }


    //válidação do CPF

    var iptCpf = document.getElementById("cpf")

    iptCpf.onblur = function() {
        var regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
        var msgCpfError = document.querySelector(".msg-cpf.dado-nok");
        var msgCpfOk = document.querySelector(".msg-cpf.dado-ok");

        if(regexCPF.test(iptCpf.value)){
            msgCpfError.style.display = 'none';
            msgCpfOk.style.display = "block";
        } else {
            msgCpfOk.style.display = "none";
            msgCpfError.style.display = 'block'; 
        }
    }


    //validação de CEP


    var iptCep = document.getElementById("cep")

    iptCep.onblur = function() {
        var regexCep = /^[0-9]{2}[0-9]{3}-[0-9]{3}$/
        var msgCepError = document.querySelector(".msg-cep.dado-nok");
        var msgCepOk = document.querySelector(".msg-cep.dado-ok");

        if(regexCep.test(iptCep.value)){
            msgCepError.style.display = 'none';
            msgCepOk.style.display = "block";
        } else {
            msgCepOk.style.display = "none";
            msgCepError.style.display = 'block'; 
        }
    }


    //válidação da Senha

    // var iptSenha = document.querySelectorAll(".senha")

    // iptSenha.onblur = function() {
    //     var regexSenha = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     var msgSenhaError = document.querySelector(".msg-senha.dado-nok");
    //     var msgSenhaOk = document.querySelector(".msg-senha.dado-ok");

    //     if(regexSenha.test(iptSenha.value)){
    //         msgSenhaError.style.display = 'none';
    //         msgSenhaOk.style.display = "block";
    //         msgSenhaOk.style.color = "green";
    //     } else {
    //         msgSenhaOk.style.display = "none";
    //         msgSenhaError.style.display = 'block';
    //         msgSenhaError.style.color = "red";
    //     }
    // }


/* -- Fim aba Cadastro -- */