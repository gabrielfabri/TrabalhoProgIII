const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  var resSubmit = document.getElementById('resSubmit');

  let emailSplit = email.split("");

  let resultSplit = isNaN(emailSplit[0]);

    if(email == email.toLowerCase() && resultSplit === true && email !== "" && emailSplit.indexOf('@') !== -1 && !email.endsWith('@') && (emailSplit.indexOf('.') !== -1 && 
    email.indexOf('@') < email.indexOf('.') && !email.endsWith('.'))){
        if(password == ""){
            resSubmit.innerText = "Senha inválida!";
            resSubmit.style.color = "red";
        }else{
          window.location.href = "../reserva/index.html";
        }
    }else{
        resSubmit.innerText = "Email inválido!";
        resSubmit.style.color = "red";
      }
})
