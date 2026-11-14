class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.velocidad = 1.5;
    this.velocidadSalto = 14;
    this.saltando = false;

    this.ancho = 70;
    this.alto = 70;

    this.estado = "QUIETO";

    this.velocidadAnimacion = 8;
  }

  dibujar() {
    
    let imagenes;

    if (this.saltando) {
      imagenes = personajeSaltando;
    } else if (this.estado == "CORRIENDO_D") {
      imagenes = personajeCorriendoD;
    } else if (this.estado== "CORRIENDO_I") {
      imagenes = personajeCorriendoI;
    } else {
      imagenes = personajeQuieto;
    }

 
    let cuadro = floor(frameCount / this.velocidadAnimacion) % imagenes.length;

    image(imagenes[cuadro],  this.posX, this.posY, this.ancho, this.alto);
  }

  moverDerecha() {
  if (this.posX < 1800 - this.ancho) {
    this.posX += this.velocidad;
  }
  this.estado = "CORRIENDO_D";
}

  moverIzquierda() {
  this.posX -= this.velocidad;
  if (this.posX < 0) this.posX = 0;
  this.estado = "CORRIENDO_I";
}

  saltar() {
    if (!this.saltando) {
      this.velocidadSalto = -12;
      this.saltando = true;
    }
  }

  aplicarGravedad(plataformas) {
  let posicionAnterior = this.posY;

  this.posY += this.velocidadSalto;
  this.velocidadSalto += 0.6;

  this.saltando = true;

  // Detectar el suelo
  if (this.posY >= 300) {
    this.posY = 300;
    this.velocidadSalto = 0;
    this.saltando = false;
  }

  // Detectar plataformas
  for (let i = 0; i < plataformas.length; i++) {
    let plataforma = plataformas[i];

    let estabaArriba =
      posicionAnterior + this.alto <= plataforma.posY;

    let tocaPlataforma =
      this.posX + this.ancho > plataforma.posX &&
      this.posX < plataforma.posX + plataforma.ancho;

    let estaCayendo = this.velocidadSalto >= 0;

    if (estabaArriba &&tocaPlataforma && estaCayendo &&this.posY + this.alto >= plataforma.posY) {
      this.posY = plataforma.posY - this.alto;
      this.velocidadSalto = 0;
      this.saltando = false;
    }
  }
}
  actualizarEstado() {
    if (!this.saltando &&!keyIsDown(RIGHT_ARROW) &&!keyIsDown(LEFT_ARROW)) {
      this.estado = "QUIETO";
    }
  }
  }
  
  }
}
