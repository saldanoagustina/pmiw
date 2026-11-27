class Juego { // distintos elementos que formaan parte de la partida

  constructor() {
    this.crearPersonaje();

    this.fragmentos = [];
    this.crearFragmentos();

    this.plataformas = [];
    this.crearPlataformas();

    this.enemigos = [];
    this.crearEnemigos();

    this.estado = "inicio"; // creamos una variable nos permite controlar en que parte del juego estamos

    this.desplazamiento = 0;
  }

  crearPersonaje() {
    this.personaje = new Personaje(0, 300);
  }

  crearFragmentos() {
    this.fragmentos = [];

    this.fragmentos.push(new Fragmento(115, 310));
    this.fragmentos.push(new Fragmento(255, 240));
    this.fragmentos.push(new Fragmento(556, 215));
    this.fragmentos.push(new Fragmento(760, 310));
    this.fragmentos.push(new Fragmento(870, 240));
    this.fragmentos.push(new Fragmento(1220, 215));
    this.fragmentos.push(new Fragmento(1430, 310));
    this.fragmentos.push(new Fragmento(1580, 240));
  }

  crearEnemigos() {
    this.enemigos = [];

    this.enemigos.push(new Enemigo(350));
    this.enemigos.push(new Enemigo(1000));
    this.enemigos.push(new Enemigo(1540));
  }

  crearPlataformas() {
    this.plataformas = [];

    this.plataformas.push(new Plataforma(220, 275, 1));
    this.plataformas.push(new Plataforma(500, 250, 2));
    this.plataformas.push(new Plataforma(850, 275, 1));
    this.plataformas.push(new Plataforma(1150, 250, 3));
    this.plataformas.push(new Plataforma(1500, 275, 2));
  }

  dibujar() { // el metodo dibujar determina que pantalla o elemtnos se muestran
 if (this.estado == "inicio") {
    this.dibujarInicio();

  } else if (this.estado == "instrucciones") {
    this.dibujarInstrucciones();

  } else if (this.estado == "creditos") {
    this.dibujarCreditos();

  } else if (this.estado == "perdiste") {
    image(pantallaPerdedor, 0, 0, width, height);

  } else if (this.estado == "ganaste") {
    image(pantallaGanador, 0, 0, width, height);

  } else if (this.estado == "jugando") {

    background(0);

    this.moverPersonaje();

    this.desplazamiento = this.personaje.posX - 300;

    if (this.desplazamiento < 0) {
      this.desplazamiento = 0;
    }

    this.dibujarParallax(fondo, 0.3);

    push();
    translate(-this.desplazamiento, 0);

    for (let i = 0; i < this.plataformas.length; i++) {
      this.plataformas[i].dibujar();
    }

    for (let i = 0; i < this.fragmentos.length; i++) {
      this.fragmentos[i].dibujar();
    }

    this.personaje.aplicarGravedad(this.plataformas);
    this.personaje.actualizarEstado();
    this.personaje.dibujar();

    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
    }

    this.detectarFragmentos();
    this.detectarEnemigos();

    pop();

    this.mostrarContador();
  }
  }

  dibujarInicio() { // menu de incio
    image(imagenInicio, 0, 0, width, height);

    image(botonJugar, 80, 320, 150, 50);

    image(botonInst, 320, 320, 160, 50);

    image(botonCreditos, 560, 320, 160, 50);
  }
  dibujarInstrucciones() {
    image(imagenInst, 0, 0, width, height);

    image(volver, 320, 325, 160, 45);
  }

  dibujarCreditos() {
    image(imagenCreditos, 0, 0, width, height);

    image(volver, 320, 325, 160, 45);
  }


  moverPersonaje() {
    if (this.estado == "jugando") {

      if (keyIsDown(RIGHT_ARROW)) {
        this.personaje.moverDerecha();
      }

      if (keyIsDown(LEFT_ARROW)) {
        this.personaje.moverIzquierda();
      }
    }
  }

  detectarEnemigos() {

    for (let i = 0; i < this.enemigos.length; i++) {

      let enemigo = this.enemigos[i];

      let centroLinkX = this.personaje.posX + this.personaje.ancho / 2;
      let centroLinkY = this.personaje.posY + this.personaje.alto / 2;

      let centroEnemigoX = enemigo.posX + enemigo.ancho / 2;
      let centroEnemigoY = enemigo.posY + enemigo.alto / 2;

      let distancia = dist(centroLinkX, centroLinkY, centroEnemigoX, centroEnemigoY);

      if (distancia < 30 && this.estado == "jugando") {
        this.estado = "perdiste";

        musica.stop();
        sonidoGanar.stop();
        sonidoPerder.play();
      }
    }
  }

  detectarFragmentos() {

    for (let i = 0; i < this.fragmentos.length; i++) {

      let fragmento = this.fragmentos[i];

      if (!fragmento.recolectado) {

        let distancia = dist( this.personaje.posX + this.personaje.ancho / 2, this.personaje.posY + this.personaje.alto / 2, fragmento.posX, fragmento.posY);

        if (distancia < 50) {
          fragmento.recolectado = true;
          sonidoFragmento.play();
        }
      }
    }

    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    if (cantidad === 8 && this.estado == "jugando") {
      this.estado = "ganaste";

      musica.stop();
      sonidoPerder.stop();
      sonidoGanar.play();
    }
  }

  mostrarContador() {
    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    image(contadorFragmentos[cantidad], 20, 15, 120, 50);
  }

  dibujarParallax(imagenFondo, velocidad) {
    let escalaFondo = height / imagenFondo.height;
    ancho_fondo = imagenFondo.width * escalaFondo;

    image(imagenFondo, fondo_parallax, 15, ancho_fondo, height);
    image(imagenFondo, fondo_parallax + ancho_fondo, 15, ancho_fondo, height);

    fondo_parallax -= velocidad;

    if (fondo_parallax <= -ancho_fondo) {
      fondo_parallax = 0;
    }
  }
// interacciones del mouse y teclado
  teclaPresionada() {

  if ((this.estado == "perdiste" || this.estado == "ganaste") &&
      (key == "r" || key == "R")) {

    musica.stop();
    sonidoGanar.stop();
    sonidoPerder.stop();

    juego = new Juego();
    musica.loop();

  } else if (this.estado == "jugando" && key == " ") {

    this.personaje.saltar();

  }
  }
  mousePresionado() {

    if (this.estado == "inicio") {

      // jugar
      if (mouseX >= 80 && mouseX <= 240 && mouseY >= 320 && mouseY <= 370) {
        musica.setVolume(0.3);
        musica.loop();
        this.estado = "jugando";
      } else if (mouseX >= 320 && mouseX <= 480 &&  mouseY >= 320 && mouseY <= 370) {

        this.estado = "instrucciones";
      } else if (mouseX >= 560 && mouseX <= 720 && mouseY >= 320 && mouseY <= 370) {

        this.estado = "creditos";
      }
    } else if (this.estado == "instrucciones" ||
      this.estado == "creditos") {

      if (mouseX >= 320 && mouseX <= 480 && mouseY >= 325 && mouseY <= 375) {

        this.estado = "inicio";
      }
    }
  }
}
  
