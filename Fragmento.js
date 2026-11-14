class Fragmento {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.ancho = 50;
    this.alto = 50;

    this.recolectado = false;

    // Variables para el parpadeo
    this.opacidad = 255;
    this.direccionBrillo = -1;
  }

  dibujar() {

    if (!this.recolectado) {

      // Efecto de parpadeo
      this.opacidad += this.direccionBrillo * 4;

      if (this.opacidad <= 100) {
        this.opacidad = 100;
        this.direccionBrillo = 1;
      }

      if (this.opacidad >= 255) {
        this.opacidad = 255;
        this.direccionBrillo = -1;
      }

      // Dibujar la imagen con transparencia variable
      push();
      tint(255, this.opacidad);
      image( imagenFragmento, this.posX, this.posY, this.ancho, this.alto);
      pop();
    }
  }
}
