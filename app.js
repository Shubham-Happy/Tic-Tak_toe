let squares = document.querySelectorAll('.square');
let reset = document.querySelector('#Reset'); 
let msgcontainer = document.querySelector('.msg-conatiner');
let newgame = document.querySelector('#new-btn');
let message = document.querySelector('#message');

let trun0 = true;
let count=0;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetgame = () => {
trun0 = true;
count=0;
enablebox();
msgcontainer.classList.add("hide");
}
squares.forEach((square) => {
  square.addEventListener("click", () => {
    console.log("square clicked");
    if (trun0) {
      square.innerText = "O";
      trun0 = false;
    } else {
      square.innerText = "X";
      trun0 = true;
    }
    square.disabled = true;
    count ++;
     let iswin = checkwin();

     if(count===9 && !iswin){
      gamedraw();
    }

  });
});

const gamedraw = () => {
  msgcontainer.innerText = "Game was Draw";
  msgcontainer.classList.remove("hide");
  disablebox();
}

const disablebox =() => {
  for(let box of squares){
box.disabled = true;
  }
}
const enablebox =() => {
  for(let box of squares){
box.disabled = false;
box.innerText = "";
  }
}


const showwinner = (Winner) => {
  msgcontainer.innerText= `${Winner} won the game`; 
  msgcontainer.classList.remove('hide');
  disablebox();
}

const checkwin = () => {
  for (let pattern of winpatterns) {
    let pos1 = squares[pattern[0]].innerText;
    let pos2 = squares[pattern[1]].innerText;
    let pos3 = squares[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("win", pos1);
      showwinner(pos1);  
      }
  }
};

newgame.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);