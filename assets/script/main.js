'use strict'

const cards = document.querySelectorAll('.card')

// toggles flip class to every card
function flipCard() {
	this.classList.toggle('flip');
}
// adds click event for every card using callback flipCard
cards.forEach(card => card.addEventListener('click', flipCard));