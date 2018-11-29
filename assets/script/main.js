'use strict'

const cards = document.querySelectorAll('.card')

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
		console.log('no match');
	} else {
		console.log('its a match');
	}
}
// adds click event for every card using callback flipCard
cards.forEach(card => card.addEventListener('click', flipCard));

