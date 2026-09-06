function obtenerFrame(frames) {
  return floor(frameCount / velocidadAnimacion) % frames.length;
}

function dibujarAnimacion(frames, x, y) {
  let f = obtenerFrame(frames);
  image(frames[f], x, y,
    frames[f].width * escalaSprite,
    frames[f].height * escalaSprite);
}

function reiniciar() {
  estado_personaje = "CAMINAR";
  posX_caminar = 0;
  posY_saltar = 415;
  posX_fondo = 0;
  tiempoEstado = 0;
  estado_saltar = -1;
}

function accion_caminar() {
  dibujarAnimacion(caminar, posX_caminar, 415);

  if (tiempoEstado < 120) {
    posX_caminar += 1;
  } 
  else if (tiempoEstado < 240) {
    posX_fondo -= 1;
  } 
  else {
    estado_personaje = "ACELERAR";
    tiempoEstado = 0;
  }
}

function accion_acelerar() {
  dibujarAnimacion(acelerar, posX_caminar, 415);

  if (tiempoEstado < 60) {

  } 
  else if (tiempoEstado < 140) {
    posX_caminar += 4;
    posX_fondo -= 2;
  } 
  else {
    estado_personaje = "SALTAR";
    estado_saltar = -1;
    tiempoEstado = 0;
  }
}

function accion_saltar() {
  dibujarAnimacion(saltar, posX_caminar, posY_saltar);

  posX_caminar += 3;
  posY_saltar += estado_saltar * 6;

  if (posY_saltar <= 250) {
    estado_saltar = 1;
  } 

  else if (posY_saltar >= 415) {
    posY_saltar = 415;
    estado_saltar = 0;
    estado_personaje = "ACELERAR";
    tiempoEstado = 0;
  }
  if (posX_caminar > width + 100) {
    reiniciar();
  }
}
