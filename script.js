function generateCard() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['&hearts;', '&diams;', '&spades;', '&clubs;'];
  
    const value = values[Math.floor(Math.random() * values.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
  
    const valueElems = document.querySelectorAll('.value');
    const suitElems = document.querySelectorAll('.suit');
  
    for (let i = 0; i < valueElems.length; i++) {
      valueElems[i].innerHTML = value;
    }
  
    for (let i = 0; i < suitElems.length; i++) {
      suitElems[i].innerHTML = suit;
  
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