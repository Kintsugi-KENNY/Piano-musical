// teclado//

var context= new AudioContext();

function nota(frecuencia){
  var o= context.createOscillator();
g=context.createGain();
o.connect(g);
o.type="sawtooth";
o.frequency.value =frecuencia;
g.connect(context.destination);
o.start(0);
g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1,5);
}


// instrumentos//

let numDeBotones = document.querySelectorAll(".img").length;

for (let i = 0; i<numDeBotones; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML) {
      case "<h1>Contrabajo</h1>":
      var bajo = new Audio("sonidos/bajo.mp3");
      bajo.play();
      
      break;

      case "<h1>Violín</h1>":
      var violin = new Audio("sonidos/violin.mp3");
      violin.play();
      break;

      case "<h1>Violonchelo</h1>":
      var cello = new Audio("sonidos/cello.mp3");
      cello.play();
      break;

      case "<h1>Viola</h1>":
      var cello = new Audio("sonidos/viola.mp3");
      cello.play();
      break;

        // maderas//

      case "<h1>Oboe</h1>":
      var oboe = new Audio("sonidos/oboe.mp3");
      oboe.play();
      break;

      case "<h1>Flauta</h1>":
      var flauta = new Audio("sonidos/flauta.mp3");
      flauta.play();
      break;

      case "<h1>Piccolo</h1>":
      var viola = new Audio("sonidos/piccolo.mp3");
      viola.play();
      break;

      case "<h1>Clarinete</h1>":
      var viola = new Audio("sonidos/clarinete.mp3");
      viola.play();
      break;

      case "<h1>Fagot</h1>":
      var viola = new Audio("sonidos/fagot.mp3");
      viola.play();
      break;

       // metales//

       case "<h1>corno</h1>":
      var corno = new Audio("sonidos/corno.mp3");
      corno.play();
      break;

      case "<h1>tuba</h1>":
      var tuba = new Audio("sonidos/tuba.mp3");
      tuba.play();
      break;

      case "<h1>trombon</h1>":
      var trombon = new Audio("sonidos/trombon.mp3");
      trombon.play();
      break;

      case "<h1>trompeta</h1>":
      var trompeta = new Audio("sonidos/trompeta.mp3");
      trompeta.play();
      break;

      // percusion//

      case "<h1>timbales</h1>":
      var timbales = new Audio("sonidos/timbales.mp3");
      timbales.play();
      break;

      case "<h1>platillos</h1>":
      var platillos = new Audio("sonidos/platillos.mp3");
      platillos.play();
      break;

      case "<h1>marimba</h1>":
      var marimba = new Audio("sonidos/marimba.mp3");
      marimba.play();
      break;

      case "<h1>tambor</h1>":
      var tambor = new Audio("sonidos/tambor.mp3");
      tambor.play();
      break;



      default: console.log(buttonInnerHTML);
    }
  });

}






