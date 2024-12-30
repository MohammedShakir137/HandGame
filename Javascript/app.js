let playerHand1 = document.querySelector('.playerHand1')
let playerHand2 = document.querySelector('.playerHand2')
let extension = ".jpg"
let winnerTag = document.querySelector('#winnerTag')
buttonControl= document.querySelector('#buttonControl')

document.addEventListener('keydown',(event)=>{
    if (event.code === 'Space') {
    event.preventDefault();
    process()
    }
})

buttonControl.addEventListener('click', () => {
  process(); // Call the same process function
});

let process = ()=>{
    let player1=(Math.floor(Math.random()*3)+1);
    let player2=(Math.floor(Math.random()*3)+1);
    let p1='Images/'+player1+'.png'
    let p2='Images/'+player2+'.png'
    playerHand1.setAttribute('src',p1);
    playerHand2.setAttribute('src',p2);
    if (player1 === player2) {
        winnerTag.innerHTML="IT'S A TIE";
      } else if (player1 === 1 && player2 === 3) {
        winnerTag.innerHTML="PLAYER 1 WINS";
      } else if (player1 === 2 && player2 === 1) {
        winnerTag.innerHTML="PLAYER 1 WINS";
      } else if (player1 === 3 && player2 === 2) {
        winnerTag.innerHTML="PLAYER 1 WINS";
      } else {
        winnerTag.innerHTML="PLAYER 2 WINS";
      }
}