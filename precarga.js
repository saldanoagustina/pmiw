function precargar() {

  for (let a = 1; a <= caminar_cant; a++) {
    caminar.push(loadImage("images/caminata_" + a + ".png"));
  }

  for (let a = 1; a <= acelerar_cant; a++) {
    acelerar.push(loadImage("images/correr_" + a + ".png"));
  }

  for (let a = 1; a <= saltar_cant; a++) {
    saltar.push(loadImage("images/bolita_" + a + ".png"));
  }

  fondo = loadImage("images/fondo.jpg");
}
