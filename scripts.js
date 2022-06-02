var nrImagem = 0;
var imagens = [];
var refresh = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "img02.png";
imagens[1] = "img03.png";
imagens[2] = "img01.png";
imagens[3] = "img04.png";
imagens[4] = "img05.png";
imagens[5] = "img04.png";
imagens[6] = "img05.png";
imagens[7] = "img04.png";
imagens[8] = "img05.png";
//...

function rodarImagens() {
   document.images["misto"].src = imagens[nrImagem++];

   if (nrImagem >= imagens.length)
      nrImagem = 0;

   setTimeout("rodarImagens()", refresh * 1000);  
}

rodarImagens();
