function dibujarPantallas() {
// arreglos para guardar las imagenes
  if (pantalla == 1) {
    image(imagenes[1], 0, 0, width, height);
    textoPantallas("En la fría noche, Link llega justo a tiempo: dos soldados de Ganon acorralan a Impa, la niñera de la princesa Zelda. Con un golpe certero, los ahuyenta y se arrodilla junto a ella, malherida pero viva.");
    boton(290, 395, 220, 40, "Comenzar");
  }

  else if (pantalla == 2) {
    image(imagenes[2], 0, 0, width, height);
    textoPantallas("—La princesa fue capturada —dice Impa con voz temblorosa—. Antes de caer presa, escondió ocho fragmentos de la Trifuerza por todo Hyrule. Reunilos todos para poder enfrentar a Ganon. ¿Cómo empezás tu búsqueda?");
    boton(80, 395, 190, 40, "Explorar las mazmorras");
    boton(305, 395, 190, 40, "Recorrer el mundo");
    boton(530, 395, 190, 40, "Ir directo hacia Ganon");
  }

  else if (pantalla == 4) {
    image(imagenes[3], 0, 0, width, height);
    textoPantallas("Link desciende a unas mazmorras olvidadas bajo las montañas de Hyrule. Los pasillos de piedra están cubiertos de musgo y trampas antiguas duermen bajo el polvo de siglos. En algún rincón brillan los fragmentos que busca.");
    boton(130, 390, 240, 50, "Revisar cada sala con calma");
    boton(430, 390, 240, 50, "Avanzar rápido, sin revisar todo");
  }

  else if (pantalla == 5) {
    image(imagenes[5], 0, 0, width, height);
    textoPantallas("Con los fragmentos guardados junto a su corazón, Link marcha hacia el norte, donde una montaña de picos negros escupe humo rojizo hacia el cielo. Ahí, en las profundidades de la roca, lo espera Ganon.");
    boton(290, 395, 220, 40, "Entrar a la guarida");
  }

  else if (pantalla == 6) {
    image(imagenes[6], 0, 0, width, height);
    textoPantallas("El calor de la lava golpea el rostro de Link cuando por fin encuentra a Ganon, gigante y cubierto de armadura oscura. El monstruo levanta su tridente, seguro de su victoria. Es el momento decisivo.");
    boton(290, 395, 220, 40, "Continuar");
  }

  else if (pantalla == 7) {
    image(imagenes[7], 0, 0, width, height);
    textoPantallas("Con un grito de determinación, Link reúne los ocho fragmentos frente a él. Una luz dorada envuelve la caverna: Ganon retrocede, vencido. La Trifuerza vuelve a brillar completa en las manos del héroe.");
    boton(290, 395, 220, 40, "Continuar");
  }

  else if (pantalla == 8) {
    image(imagenes[8], 0, 0, width, height);
    textoPantallas("Las antorchas se apagan una a una. Link revisó cada sala que pudo encontrar, pero algunos fragmentos siguen ocultos en rincones que nunca llegó a ver. Sin el poder completo, la misión puede terminar aquí.");
    boton(250, 390, 300, 50, "Retirarte a pensar una nueva estrategia");
  }

  else if (pantalla == 9) {
    image(imagenes[9], 0, 0, width, height);
    textoPantallas("En lugar de las mazmorras, Link recorre los caminos abiertos de Hyrule. Pronto se enfrenta a jaurías de monstruos, puentes derrumbados y desiertos hostiles. Cada fragmento que encuentra tiene un precio alto.");
    boton(290, 395, 220, 40, "Continuar");
  }

  else if (pantalla == 10) {
    image(imagenes[10], 0, 0, width, height);
    textoPantallas("Agotado tras la travesía, Link cuenta lo que consiguió: apenas la mitad de los fragmentos. No alcanza para enfrentar a Ganon. Respira hondo, sabiendo que deberá reunir fuerzas y volver a intentarlo.");
boton(290, 395, 220, 40, "Continuar");
  }

  else if (pantalla == 11) {
    image(imagenes[11], 0, 0, width, height);
    textoPantallas("Impaciente por rescatar a la princesa, Link decide no perder tiempo buscando fragmentos. Con la espada en la mano y el coraje como única arma, se dirige directo hacia la montaña de Ganon.");
    boton(290, 395, 220, 40, "Pelear contra Ganon");
  }

  else if (pantalla == 12) {
    image(imagenes[12], 0, 0, width, height);
    textoPantallas("Sin el poder de la Trifuerza, Link enfrenta a Ganon completamente solo. El monstruo es demasiado fuerte, y cada golpe del héroe no parece hacer ninguna diferencia. La batalla está perdida.");
    boton(290, 395, 220, 40, "Continuar");
  }

  // final clásico
  else if (pantalla == 13) {
    image(imagenes[13], 0, 0, width, height);
    textoPantallas("Con Ganon derrotado, Link corre hasta lo alto de la torre donde Zelda estaba prisionera. Ella sonríe al verlo, libre por fin. Hyrule respira tranquilo: el héroe cumplió su destino.");
    boton(290, 395, 220, 40, "Volver a empezar");
  }

  // final trágico
  else if (pantalla == 14) {
    image(imagenes[14], 0, 0, width, height);
    textoPantallas("La oscuridad de Ganon se extiende sobre Hyrule. Link ha caído, y en lo alto de la montaña, Zelda sigue prisionera, esperando a un héroe que esta vez no llegó a tiempo.");
    boton(290, 395, 220, 40, "Volver a empezar");
  }

  // final de reinicio
  else if (pantalla == 15) {
    image(imagenes[15], 0, 0, width, height);
    textoPantallas("El viaje termina antes de tiempo, pero no todo está perdido. Link mira hacia el horizonte, decidido a intentarlo de nuevo, con lo aprendido en el camino.");
    boton(290, 395, 220, 40, "Volver a empezar");
  }
   else if (pantalla == 16) {
    image(imagenes[16], 0, 0, width, height);
    textoPantallas("Herido y sin fuerzas, Link huye cuesta abajo mientras la sombra de Ganon crece a sus espaldas. Con el último aliento grita el nombre de Impa, que corre hacia él a lo lejos.");
    boton(80, 395, 300, 40, "Rendirse");
    boton(420, 395, 300, 40, "Intentarlo una vez más");
  }


  else if (pantalla == 17) {
    image(imagenes[17], 0, 0, width, height);
    textoPantallas( "Cansado pero decidido, Link regresa a la entrada de la mazmorra. Todavía le faltan fragmentos y sin ellos no podrá enfrentar a Ganon. Respira hondo y vuelve a entrar.");
    boton(80, 395, 300, 40, "Volver a las mazmorras");
    boton(420, 395, 300, 40, "Abandonar la misión");
  }

 
  else if (pantalla == 18) {
    image(imagenes[18], 0, 0, width, height);
    textoPantallas("—Quedate quieto —dice Impa, apoyando las manos sobre su herida—. Todavía no es tu hora. Una luz dorada envuelve a Link y, poco a poco, el color vuelve a su rostro.");
    boton(80, 395, 300, 40, "Enfrentarse a Ganon");
    boton(420, 395, 300, 40, "Rendirse");
  }
}
function cambiarPantalla(actual, siguiente, x = 290, y = 395, w = 220, h = 40) {
  if (pantalla == actual && clickBoton(x, y, w, h)) {
    pantalla = siguiente;
    return true;
  }
  return false;
}


function clickPantallas() { 

  if (cambiarPantalla(1, 2)) { }

  else if (cambiarPantalla(2, 4, 80, 395, 190, 40)) { }
  else if (cambiarPantalla(2, 9, 305, 395, 190, 40)) { }
  else if (cambiarPantalla(2, 11, 530, 395, 190, 40)) { }

  else if (cambiarPantalla(4, 5, 130, 390, 240, 50)) { }
  else if (cambiarPantalla(4, 8, 430, 390, 240, 50)) { }

  else if (cambiarPantalla(5, 6)) { }
  else if (cambiarPantalla(6, 7)) { }
  else if (cambiarPantalla(7, 13)) { }

 else if (cambiarPantalla(9, 10)) { }

else if (cambiarPantalla(10, 8)) { }
else if (cambiarPantalla(8, 17, 250, 390, 300, 50)) { }

  else if (cambiarPantalla(11, 12)) { }
  else if (cambiarPantalla(12, 16)) { }
  
  else if (cambiarPantalla(16, 14, 80, 395, 300, 40)) { }
  else if (cambiarPantalla(16, 18, 420, 395, 300, 40)) { }
  
  else if (cambiarPantalla(18, 6, 80, 395, 300, 40)) { }

  
  else if (cambiarPantalla(17, 5, 80, 395, 300, 40)) { }
  else if (cambiarPantalla(17, 15, 420, 395, 300, 40)) { }
  
  else if (cambiarPantalla(13, 1)) { }
  else if (cambiarPantalla(14, 1)) { }
  else if (cambiarPantalla(15, 1)) { }
}
