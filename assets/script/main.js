'use strict'

const cards = document.querySelectorAll('.card');
const shuffle = document.querySelector('.shuffle');

let flippedCard = false;
let firstCard, secondCard;

// toggles flip class to every card
function flipCard() {
	this.classList.toggle('flip');

	if(!flippedCard) {
		flippedCard = true;
		firstCard = this;
	} else {
		flippedCard = false;
		secondCard = this;
		checkForMatch();
	}
}

function checkForMatch() {
	if(firstCard.dataset.img !== secondCard.dataset.img) {
		resetCards();
	} else {
		disableCards();
	}
}


function resetCards() {
  // adding timout for cards to unflip
  setTimeout(() => {
  	firstCard.classList.remove('flip');
  	secondCard.classList.remove('flip');
  }, 1000);  
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
}

// adds click event for every card using callback flipCard
cards.forEach(card => card.addEventListener('click', flipCard));

// shuffle cards on click
shuffle.addEventListener('click', function() {
	cards.forEach(card => {
		let randImg = Math.floor(Math.random() * 16);
		card.style.order = randImg;
	});
});