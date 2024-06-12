trocaTema = () => {
  // const html = document.documentElement;
  // document.querySelector("body").style.background = "Black"//Procura a tag body no html, e muda o estilo do background para Preto

  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light"); //Uma variável booleana, true e false

  const imagem = isLight ? "./img/gatinho.jpg" : "./img/image.png";

  document.querySelector("#profile img").setAttribute("src", imagem);

  const textoNight =
    "Uma foto pequena, de um adolescente de 16 anos, com cabelo castanho escuro, penteado com franja, ele está sorrindo, pele facial lisa, e aparece apenas a gola de sua camisa social";
  const textoLight = "Um gatinho bonito, dourado, com óculos escuros refletindo a luz do pôr do Sol";

  isLight
    ? document.querySelector("#profile img").setAttribute("alt", textoLight)
    : document.querySelector("#profile img").setAttribute("alt", textoNight);
};
