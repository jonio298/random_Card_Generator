//timer//
let timerInterval = null;
let secondsLeft = 10;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft === 0) {
      generateCard();
      secondsLeft = 10;
    }
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerElem = document.getElementById('timer');
  const formattedTime = (secondsLeft < 11 ? '00:' : '') + ('0' + secondsLeft).slice(-2);  timerElem.innerHTML = formattedTime;
}

//Generate card//
function generateCard() {

//Animation//
  const cardElem = document.getElementById('card');
  cardElem.classList.add('flip-in');
  setTimeout(() => {
    cardElem.classList.remove('flip-in');
  }, 500);

  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['&hearts;', '&diams;', '&spades;', '&clubs;'];
 //select a card at random//
  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];

  const valueElems = document.querySelectorAll('.value');
  const suitElems = document.querySelectorAll('.suit');

  for (let i = 0; i < valueElems.length; i++) {
    valueElems[i].innerHTML = value;
  }

  for (let i = 0; i < suitElems.length; i++) {
    suitElems[i].innerHTML = suit;
//removing previous card and adding a new one//
    if (suit === '&hearts;' || suit === '&diams;') {
      suitElems[i].classList.add('heart');
      suitElems[i].classList.remove('club');
      suitElems[i].classList.remove('spades');
      suitElems[i].classList.add('diams');
    } else if (suit === '&spades;' || suit === '&clubs;') {
      suitElems[i].classList.add('club');
      suitElems[i].classList.remove('heart');
      suitElems[i].classList.remove('diams');
      suitElems[i].classList.add('spades');
    }
  }
}

startTimer();
updateTimer();

