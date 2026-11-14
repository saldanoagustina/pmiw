class Fragmento {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.ancho = 50;
    this.alto = 50;

    this.recolectado = false;
    this.opacidad = 255;
    this.direccionBrillo = -1;
  }

  dibujar() {

    if (!this.recolectado) {

      //  parpadeo 
      this.opacidad += this.direccionBrillo * 4;

      if (this.opacidad <= 100) {
        this.opacidad = 100;
        this.direccionBrillo = 1;
      }

      if (this.opacidad >= 255) {
        this.opacidad = 255;
        this.direccionBrillo = -1;
      }

      push();
      tint(255, this.opacidad);
      image( imagenFragmento, this.posX, this.posY, this.ancho, this.alto);
      pop();
    }
  }
}
