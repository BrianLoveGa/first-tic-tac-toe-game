//  alert(" CHECK me out");

/// much Thanks & credit to Prof Ali and Prof Carlos for helping me get my cells to be clickable instead of just the first one or the background

/// Double credit to Ali for fixing the syntax on my or clause for not clicking an already played square
///  this looks pretty but doesn't work ... e.target.classList.contains("x"||"o")    !===  e.target.classList.contains("x") || e.target.classList.contains("o") - longer but works correctly!


//Grabbing Elements
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

const gridClick  = document.querySelector('.grid');

const cleanBtn = document.querySelector('.reset');

const yourTurn = document.getElementById('turn');

const squares = document.getElementsByClassName('cell');






/// for alternating color have odd red even blue keep trak of clicks with a score counter

let colorClicks = 0;


//Functions
const openModal = () => {
  modal.style.display = 'block';
};


const closeModal = () => {
  modal.style.display = 'none'
};

const wipeIt = () => {
    for (i=0;i <squares.length; i++){
    squares[i].classList.remove("x") 
    squares[i].classList.remove("o")
    squares[i].classList.add("cell")
}};

const turnDisplay = () => {
    if( colorClicks  %2 === 0) /// it's red so score % 2 === o)
    {
        yourTurn.classList.add("x");
        yourTurn.classList.remove("o");
} else if (colorClicks  %2 === 1){ // its blue so score % 2 === 1
        yourTurn.classList.add("o");
        yourTurn.classList.remove("x");
}};


const isItOverYet = () => {
    if (squares[0].classList.contains("x") && squares[1].classList.contains("x") && squares[2].classList.contains("x")) // squares ... array of all cells ...  =  id[1]class=x id[2]class=x id[3]class=x win x
    {alert("Congrats RED (player X) You won with a red top row")
}else if (squares[3].classList.contains("x") && squares[4].classList.contains("x") && squares[5].classList.contains("x")){
    alert("Congrats RED (player X) You won with a red row in the middle")
} else if (squares[6].classList.contains("x") && squares[7].classList.contains("x") && squares[8].classList.contains("x")){
    alert("Congrats RED (player X) You won with a bottom red row")
} else if (squares[0].classList.contains("x") && squares[4].classList.contains("x") && squares[8].classList.contains("x")) {
    alert("Congrats RED (player X) You won with a diagonal red stripe ... horray beer")
} else if (squares[2].classList.contains("x") && squares[4].classList.contains("x") && squares[6].classList.contains("x")){
    alert("Congrats RED (player X) You won with a diagonal red stripe ... horray beer")
} else if (squares[0].classList.contains("x") && squares[3].classList.contains("x") && squares[6].classList.contains("x")){
    alert("Congrats RED (player X) You won with a red left column")
} else if (squares[1].classList.contains("x") && squares[4].classList.contains("x") && squares[7].classList.contains("x")){
    alert("Congrats RED (player X) You won with a middle red column")
} else if (squares[2].classList.contains("x") && squares[5].classList.contains("x") && squares[8].classList.contains("x")){
    alert("Congrats RED (player X) You won with a red right column")
} else if };





//Event Listeners

cleanBtn.addEventListener('click', wipeIt);


openBtn.addEventListener('click', openModal);


close.addEventListener('click', closeModal);


gridClick.addEventListener('click', (e) => {
        if (e.target.classList.contains("grid")) {
            alert("click inside the square not beside the square please ... try to aim for the middle")
            turnDisplay();
            colorClicks+=0
        } else if (/// that cell has x or o class already don't change it
        e.target.classList.contains("x")|| e.target.classList.contains("o")
        ){
            alert("that spot was already played click an empty square");
            colorClicks+=0
            turnDisplay();
        } else if (colorClicks  %2 === 0){  /// count the clicks  on the squares starts at zero
            colorClicks++;
        e.target.classList.add('x') /// if odd make x (red) - 0+1=1 so odd
        turnDisplay();
        isItOverYet();
       }else if (colorClicks %2 === 1) {
        colorClicks++;
        e.target.classList.add('o') /// if even make o (blue) 1+2 = 2 so even (score modlus returns 0 = even)
        turnDisplay();
        isItOverYet();
      } 
    });







