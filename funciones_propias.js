function iniciarMusica() { // reproduce el audio comprobando que este cargado
  if (sonidoIntro.isLoaded() && !sonidoIntro.isPlaying()) {
    sonidoIntro.play();
  }
}
function boton (x, y, ancho, alto, texto) { // dibuja los botones y cambia los colores cuando le mouse pasa por encima
   if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {

    fill(76, 122, 58); // color cuando pasa por encima

  } else {

  fill (40, 65, 42); // color normal
  }
  rect (x, y, ancho, alto, 20);
  
  fill(255);
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  
  let tamaño =16;
  
  while (textWidth(texto) > ancho - 20 && tamaño > 10) {
    tamaño = tamaño - 1;
    textSize(tamaño);
  }

  textSize(tamaño);
  text(texto, x + ancho / 2, y + alto / 2);
}


function clickBoton (x, y, ancho, alto){ // comprueba si se hace clic dentro del area del boton
    return mouseX > x &&
         mouseX < x + ancho &&
         mouseY > y &&
         mouseY < y + alto;
}
function textoPantallas (texto){
  fill(0, 0, 0, 170);
  rect(0, 300, 800, 165);
  fill(255);
  textFont("Georgia");
  textSize(18);
  textAlign(LEFT, CENTER);

 text(texto, 60, 315, 680, 70);
}
function textoIntroPantalla() {
 background(0);
  posTextoIntro -= velocidadTexto;
  push();
  
  fill(255);
  textFont("Georgia");
  textSize (18);
  
  textAlign(CENTER, TOP);
  text (textoIntro, 100, posTextoIntro, 600, 1000);

  text (textoIntro2, 100, posTextoIntro + 500, 600, 300);
text (textoIntro3, 100, posTextoIntro + 600,600, 300);
  pop ();
  
if (posTextoIntro < -700) {
  if (sonidoIntro.isPlaying()) {
    sonidoIntro.stop();
  }

  pantalla = 1;
}
}
