// ajout de la tete du snake
// ajout du body
// faire avancer le snake timeEvent()
// mettre en place le Kpress pour diriger le snake
// bloquer le snake quand il touche un mur et ajouter un game over
// ajouter la pomme
// faire grandir le snake des qu il touche la pomme et faire disraitre et re-apparaitre la pomme aléatoirement
// mettre le score

const snakeHead = document.getElementById("head");
const snakeBody = document.getElementById("body");
const game = document.querySelector(".game");
// const move = setInterval(snakeHead, 1000);

window.addEventListener("load", (e) => {
  snakeHead.style.left = transformX(+1);
});
