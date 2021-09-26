var listaFilmes = ["Forrest Gump", "Star Wars: Uma Nova Esperança"];
var listaPosterFilmes = [
  "https://http2.mlstatic.com/D_NQ_NP_902574-MLB25905266188_082017-O.jpg",
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/4/040020140421-poster-filmes-guerra-nas-estrelas-star-wars-retro.jpg.jpg"
];

var elementoResultado = document.getElementById("resultadoAdicionarFilme");
var elementoListaFilmes = document.getElementById("listaFilmes");

function adicionarFilme() {
  var filmeParaAdicionar = document.getElementById("filme").value;
  var posterParaAdicionar = document.getElementById("posterParaAdicionar")
    .value;

  var filmeRepetido = validarFilme(filmeParaAdicionar);

  if (filmeRepetido == false && posterParaAdicionar.endsWith(".jpg")) {
    listaFilmes.push(filmeParaAdicionar);
    listaPosterFilmes.push(posterParaAdicionar);
    elementoResultado.innerHTML = "Filme adicionado!";
  } else if (filmeParaAdicionar == "") {
    elementoResultado.innerHTML = "Favor colocar o nome do filme!";
  } else if (posterParaAdicionar == "") {
    elementoResultado.innerHTML = "Favor colocar o poster do filme!";
  } else {
    elementoResultado.innerHTML =
      "Este filme já está na lista ou o link não termina com .jpg!";
  }
  document.getElementById("filme").value = "";
  document.getElementById("posterParaAdicionar").value = "";
}

function validarFilme(filmeNovo) {
  var filmeParaAdicionar = filmeNovo;
  var filmeRepetido = false;

  for (var i = 0; i < listaFilmes.length; i++) {
    if (filmeParaAdicionar == listaFilmes[i]) {
      filmeRepetido = true;
      break;
    }
  }
  return filmeRepetido;
}

function mostrarLista() {
  elementoListaFilmes.innerHTML = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    elementoListaFilmes.innerHTML +=
      "<li><img src=" +
      listaPosterFilmes[i] +
      "><p>" +
      listaFilmes[i] +
      "</p></li>";
  }
}

function removeFilme() {
  var filmeParaRemover = document.getElementById("filme").value;
  var filmeRemovido = false;

  for (var i = 0; i < listaFilmes.length; i++) {
    if (filmeParaRemover == listaFilmes[i]) {
      listaFilmes.splice(i, 1);
      listaPosterFilmes.splice(i, 1);
      filmeRemovido = true;
      break;
    }
  }

  if (filmeRemovido) {
    elementoResultado.innerHTML = "Filme removido!";
  } else {
    elementoResultado.innerHTML = "Filme inválido";
  }
}