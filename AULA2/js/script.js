alerta = () => {
  alert("Olá, eu sou um alerta! 🤑🤑");
};
const enviar = () => {
  let nome = document.getElementById("nome").value;
  
document.getElementById("resposta").innerHTML = `<h2 class="textoCentro"> Olá ${nome}, formulário enviado com sucesso!</h2>`

  nome == "" ? alert(`Bem vindo!`) : alert(`Olá ${nome}, bem vindo!`);
};
