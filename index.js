// ajout de la tete du snake
// ajout du body
// faire avancer le snake timeEvent()
// mettre en place le Kpress pour diriger le snake
// bloquer le snake quand il touche un mur et ajouter un game over
// ajouter la pomme
// faire grandir le snake des qu il touche la pomme et faire disraitre et re-apparaitre la pomme aléatoirement
// mettre le score

let snakeHead = document.getElementById("head");
let snakeBody = document.getElementById("body");
const game = document.querySelector(".game");
let pageX = 0;

game.addEventListener("click", (e) => {
  if (e.pageX++) {
    snakeHead.remove();
  }
});
