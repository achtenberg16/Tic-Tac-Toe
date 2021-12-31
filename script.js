const container = document.querySelector('ul');
const restart = document.querySelector('button')
let vez = "player one";
let win = false;
let jogadas = 0;

const start_draw = () => {
    for(let index = 0; index < 9; index +=1){
        let create = document.createElement('li')
        create.classList = 'item'
        container.appendChild(create)
    }
}

function restargame() {
    container.innerHTML = ''
    start_draw();
    vez = "player one";
    win = false
    restart.classList = ''
}
restart.addEventListener('click', restargame)

function endGame(array, position, position1, position2) {
  array[position].classList.add('win');
  array[position2].classList.add('win');
  array[position1].classList.add('win');
  restart.className = 'btn'
  jogadas = 0;
}

function OneWindCondicion () {
    const itens = document.querySelectorAll('li');
    if(itens[0].classList.contains('player-1') && itens[1].classList.contains('player-1')&& itens[2].classList.contains('player-1')){win = true; endGame(itens, 0,1,2)}
    else if(itens[3].classList.contains('player-1') && itens[4].classList.contains('player-1')&& itens[5].classList.contains('player-1')){win = true; endGame(itens,3,4,5)}
    else if(itens[6].classList.contains('player-1') && itens[7].classList.contains('player-1')&& itens[8].classList.contains('player-1')){win = true; endGame(itens,6,7,8)}
    else if(itens[0].classList.contains('player-1') && itens[3].classList.contains('player-1')&& itens[6].classList.contains('player-1')){win = true; endGame(itens,0,3,6)}
    else if(itens[1].classList.contains('player-1') && itens[4].classList.contains('player-1')&& itens[7].classList.contains('player-1')){win = true; endGame(itens,1,4,7)}
    else if(itens[2].classList.contains('player-1') && itens[5].classList.contains('player-1')&& itens[8].classList.contains('player-1')){win = true; endGame(itens,2,5,8)}
    else if(itens[0].classList.contains('player-1') && itens[4].classList.contains('player-1')&& itens[8].classList.contains('player-1')){win = true; endGame(itens,0,4,8)}
    else if(itens[2].classList.contains('player-1') && itens[4].classList.contains('player-1')&& itens[6].classList.contains('player-1')){win = true; endGame(itens,2,4,6)}
}

function TwoWinCondicion () {
    const itens = document.querySelectorAll('li');
    if(itens[0].classList.contains('player-2') && itens[1].classList.contains('player-2')&& itens[2].classList.contains('player-2')){win = true; endGame(itens, 0,1,2)}
    else if(itens[3].classList.contains('player-2') && itens[4].classList.contains('player-2')&& itens[5].classList.contains('player-2')){win = true; endGame(itens,3,4,5)}
    else if(itens[6].classList.contains('player-2') && itens[7].classList.contains('player-2')&& itens[8].classList.contains('player-2')){win = true; endGame(itens,6,7,8)}
    else if(itens[0].classList.contains('player-2') && itens[3].classList.contains('player-2')&& itens[6].classList.contains('player-2')){win = true; endGame(itens,0,3,6)}
    else if(itens[1].classList.contains('player-2') && itens[4].classList.contains('player-2')&& itens[7].classList.contains('player-2')){win = true; endGame(itens,1,4,7)}
    else if(itens[2].classList.contains('player-2') && itens[5].classList.contains('player-2')&& itens[8].classList.contains('player-2')){win = true; endGame(itens,2,5,8)}
    else if(itens[0].classList.contains('player-2') && itens[4].classList.contains('player-2')&& itens[8].classList.contains('player-2')){win = true; endGame(itens,0,4,8)}
    else if(itens[2].classList.contains('player-2') && itens[4].classList.contains('player-2')&& itens[6].classList.contains('player-2')){win = true; endGame(itens,2,4,6)}
}    
  

function played (event) {
    if(vez === "player one"){
        event.classList.add('player-1')
        vez = "player two";
        OneWindCondicion()
    }
    else {
        event.classList.add('player-2')
        vez = "player one"
        TwoWinCondicion()
    }
    jogadas +=1
    if(jogadas === 9) {
    restart.className = 'btn'
    }
}

function verify (event) {
 if(win === true) {
     return false
 }
 else if(event.target.classList.length != 1) {
  return false
 }
 else {
     played(event.target)
 }
}

function init () {
    start_draw();
}
container.addEventListener('click', verify)
window.onload = init