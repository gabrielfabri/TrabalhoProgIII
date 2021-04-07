const btnReservar = document.getElementById('btnReservar');
const filterPanel = document.getElementById('filterPanel');

btnReservar.addEventListener('click', (e) => {
  e.preventDefault();

  const dateStart = document.getElementById('dateStart').value;
  const dateEnd = document.getElementById('dateEnd').value;
  const adultos = document.getElementById('adultos').value;
  const crianças3anos = document.getElementById('crianças3').value;
  const crianças12anos = document.getElementById('crianças12').value; 
  const resultReserva = document.getElementById('resultReserva');

  if(dateStart === ''){
    resultReserva.innerText = "Data de entrada inválida!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
    return;
  }

  if(dateEnd === ''){
    resultReserva.innerText = "Data de saída inválida!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
    return;
  }

  if(adultos === ''){
    resultReserva.innerText = "Insira a quantidade de adultos!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
    return;
  }
  
  if(crianças3anos === ''){
    resultReserva.innerText = "Insira a quantidade de crianças de 3 anos!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
    return;
  }

  if(crianças12anos === ''){
    resultReserva.innerText = "Insira a quantidade de crianças até 12 anos!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
    return;
  }

  let data = new Date();
  let dataMais2 = data.setDate(data.getDate() + 1);


  var formatter = new Intl.DateTimeFormat('pt-BR');

  let dataFormated = formatter.format(dataMais2);

  let dataInicio = new Date(dateStart);
  let dataFinal = new Date(dateEnd);
  
  let dateStartFormated = formatter.format(dataInicio);
  let dateEndFormated = formatter.format(dataFinal);

  

  let adultosNumber = parseInt(adultos);
  let criançasNumber = parseInt(crianças3anos);
  let crianças12Number = parseInt(crianças12anos);
  

  function error(){
    resultReserva.innerText = "Reserva indisponível!";
    resultReserva.style.color = "red"; 
    filterPanel.style.height = "350px";
  }

  function success(){
    resultReserva.innerText = "Reserva Solicitada!";
    resultReserva.style.color = "green";
    filterPanel.style.height = "350px";
  }

if((dateStartFormated && dateEndFormated < dataFormated) || (dateStartFormated >= dateEndFormated) ||(adultosNumber < 1 || adultosNumber > 4) ||
  (criançasNumber < 0 || criançasNumber > 3) || (crianças12Number < 0 || crianças12Number > 4) || 
  isNaN(adultosNumber) === true || isNaN(criançasNumber) === true || isNaN(crianças12Number) === true){
    error();
  }else{
    success();
  }
})