

let numDeBotones = document.querySelectorAll(".soni").length;

for (let i = 0; i<numDeBotones; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML;
        
        switch(buttonInnerHTML) {
            case "flauta":
            let flauta = new Audio("sonidos/flauta.mp3");
            play.addEventListener("click", ()=>{
            flauta.play();
         });
            pause.addEventListener("click", ()=>{
            sound.pause();
         })
            break;







        }
  });
}
