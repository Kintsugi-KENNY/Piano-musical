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
      case "a":
      var bajo = new Audio("sonidos/contrabajo.mp3");
      bajo.play();
      break;

      case "b":
      var violin = new Audio("sonidos/A3.mp3");
      violin.play();
      break;

      case "c":
      var cello = new Audio("sonidos/C3.mp3");
      cello.play();
      break;

      case "d":
      var viola = new Audio("sonidos/B3.mp3");
      viola.play();
      break;

      default: console.log(buttonInnerHTML);
    }



  });

}






