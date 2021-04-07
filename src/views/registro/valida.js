var cepResult;


function validacao(){
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var dtNasc = document.getElementById('dtNasc');
    var sexo = document.getElementById('sexo');
    var estadoCivil = document.getElementById('estadoCivil');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');
    var cep = document.getElementById('cep');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    // var confSenha = document.getElementById('confSenha');
    // var concordo = document.getElementById('concordo');
    var res = document.getElementById('res');

    /// ------ VALIDAÇÃO DO NOME 
    
    if(ValidaNome(nome) === false){
        res.innerText = "Nome inválido!";
        nome.focus();
        return;
    }


    // ------ VALIDAÇÃO DO CPF

    if(cpf.value === '' || TestaCPF(cpf.value) === false){
        res.innerText = "CPF inválido!";
        cpf.focus();
        return;
    }


    // ------ VALIDAÇÃO DO Data de nascimento

    // if(ValidaDtNasc(dtNasc) === false){
    //     res.innerText = "Data de nascimento inválida!";
    //     dtNasc.focus();
    //     return;
    // }

    // ------ VALIDAÇÃO DO SEXO

    if(sexo.value === 'null'){
        res.innerText = "Sexo inválido!";
        sexo.focus();
        return;
    }

    // ------ VALIDAÇÃO DO ESTADO CIVIL

    if(estadoCivil.value === 'null' || estadoCivil.value === ''){
        res.innerText = "Estado Civil inválido!";
        estadoCivil.focus();
        return;
    }

    //   ------ VALIDAÇÃO DA CIDADE

    if(cidade.value === ''){
        res.innerText = "Cidade inválida!";
        cidade.focus();
        return;
    }


    //   ------ VALIDAÇÃO DO ESTADO

    if(estado.value === '' || estado.value.length > 2){
        res.innerText = "Estado inválido!";
        estado.focus();
        return;
    }

    //   ------ VALIDAÇÃO DO CEP

    if(cep.value === ''){
        res.innerText = "CEP inválido!";
        cep.focus();
        return;
    } else {
        ValidaCEP(cep.value);
        if(estado.value !== cepResult){
            res.innerText = "CEP e Estado não conferem!";
            cep.focus();
            estado.focus();
            return;
        }
    }


    //   ------ VALIDAÇÃO DO EMAIL

    if(ValidaEmail(email.value) === false){
        res.innerText = "Email inválido!";
        email.focus();
        return;
    }

    //   ------ VALIDAÇÃO DA SENHA

    if(password.value.length === 0){
        res.innerText = "Senha inválida!";
        email.focus();
        return;
    }
    
}


function ValidaEmail(email){
    let emailSplit = email.split("");

    let resultSplit = isNaN(emailSplit[0]);
  
    if (email === email.toLowerCase() && resultSplit === true && email !== ""){
      if(emailSplit.indexOf('@') !== -1 && !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
            return true;
      } else {
          return false;
      }
    } else {
        return false;
    }
}

function ValidaNome(nome){
    if(nome.value === ''){
        return false;
    } else {
        if((nome.value.indexOf(" ") === -1) || (nome.value.length < 6 || (nome.value.length) - nome.value.indexOf(" ") <= 3) || isNaN(nome.value[0]) === false || isNaN(nome.value[nome.value.indexOf(" ")+1]) === false){
            return false;
        } else {
            nome.value[0] = nome.value[0].toUpperCase();
            nome.value[nome.value.indexOf(" ")+1] = nome.value[nome.value.indexOf(" ")+1].toUpperCase();
        }
    }

    let primeiroNome = nome.value.slice(0, nome.value.indexOf(" ")+1);
    primeiroNome = primeiroNome[0].toUpperCase() + primeiroNome.substr(1);
    let segundoNome = nome.value.slice(nome.value.indexOf(" ") + 1, nome.value.length);
    segundoNome = segundoNome[0].toUpperCase() + segundoNome.substr(1);
    document.getElementById('nome').value= primeiroNome + segundoNome;
}

function ValidaDtNasc(dtNasc){
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR');
    const dataFormated = formatter.format(date);

    const dtNascFormat = new Date(dtNasc.value);
    const dtNascFormated = formatter.format(dtNascFormat);
    
    var strData = dtNascFormated;
    var partesData = strData.split("/");
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

    if(dtNasc.value === '' || data < new Date('01/01/1900') || data > new Date()){
        return false;
    }
}


function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    console.log("teste");
    return true;
}

function cep_callback(conteudo) {
    if (!("erro" in conteudo)) {
        cepResult = conteudo.uf;
    }
}

function ValidaCEP(cep){
    var script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=cep_callback';
    document.body.appendChild(script);
}



let password = document.getElementById('password');
let resPassword = document.getElementById('resPassword');
let passwordConf = document.getElementById('passwordConf');
let resPasswordConf = document.getElementById('resPasswordConf');

password.addEventListener('keyup', (e) => {

    function getMedium(){
      return regex.test(password.value);
    }
  
    function getStrong(){
      return regexStrong.test(password.value);
    }
  
    e.preventDefault();
  
    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/;
    let regexStrong = /(?=.*([}{,.^?#@~=+\-_\/*\-+.\|]).{2,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/;
  
    if(password.value.length < 6 || password.value.length > 12){
        resPassword.innerText = "Senha inválida!";
        resPassword.style.color = "red";
    }else{
      resPassword.innerText = "";
      if(password.value.length == 6 || regex.test(password.value) === false){
        resPassword.innerText = "Senha Fraca!";
        resPassword.style.color = "red";
      }else if(password.value.length > 6 && getMedium() === true && getStrong() === false){
        resPassword.innerText = "Senha Média!";
        resPassword.style.color = "green";
      } else if(password.value.length > 6 && getStrong() === true){
        resPassword.innerText = "Senha Forte!";
        resPassword.style.color = "blue";
      }
    }
});

passwordConf.addEventListener('keyup', (e) => {
    e.preventDefault();
  
    if(passwordConf.value === '' || passwordConf.value !== password.value){
        resPasswordConf.innerText = "Senhas Diferentes!";
        resPasswordConf.style.color = "red";
    }else{
        resPasswordConf.innerText = "";
    }
  
  })