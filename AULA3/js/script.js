trocaTema = () => {
  // const html = document.documentElement;
  // document.querySelector("body").style.background = "Black"//Procura a tag body no html, e muda o estilo do background para Preto

  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light"); //Uma variável booleana, true e false

  const imagem = isLight ? "./img/gatinho.jpg" : "./img/image.png";

  document.querySelector("#profile img").setAttribute("src", imagem);
};
