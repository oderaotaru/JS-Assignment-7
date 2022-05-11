var randomOne = Math.floor(Math.random() * 6) + 1

var firstDice = 'images/dice'+randomOne+'.png';

document.getElementById('img1').setAttribute('src', firstDice);

var randomTwo = Math.floor(Math.random() * 6) + 1

var secondDice = 'images/dice'+randomTwo+'.png';

document.getElementById('img2').setAttribute('src', secondDice);

if(randomOne > randomTwo) {
    document.querySelector('h1').innerHTML = '👍 Player 1 wins!';
} else if(randomOne < randomTwo){
    document.querySelector('h1').innerHTML = "Player 2 wins! 👍"; 
} else {
    document.querySelector('h1').innerHTML = "Draw!"
}









// var dice1 = 'images/dice1.png';
// var dice2 = 'images/dice2.png';
// var dice3 = 'images/dice3.png';
// var dice4 = 'images/dice4.png';
// var dice5 = 'images/dice5.png';
// var dice6 = 'images/dice6.png';

// var diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

// var arr = diceArray.length

// var firstDice = arr+randomOne;





// randomOne[1] = new Image();
// randomOne[1].src = 'images/dice1.png';

// randomOne[2] = new Image();
// randomOne[2].src = 'images/dice2.png';

// randomOne[3] = new Image();
// randomOne[3].src = 'images/dice3.png';

// randomOne[4] = new Image();
// randomOne[4].src = 'images/dice4.png';

// randomOne[5] = new Image();
// randomOne[5].src = 'images/dice5.png';

// randomOne[6] = new Image();
// randomOne[6].src = 'images/dice6.png';