'use strict'

const cards = document.querySelectorAll('.card');
const shuffle = document.querySelector('.shuffle');
const reset = document.querySelector('.reset');

let flippedCards = [];
let lockedCards = [];

// check if the two targets are the same
function checkForMatch(firstCard, secondCard) {
    // if data attributes match, disable both cards
    if (firstCard.dataset.img === secondCard.dataset.img) {
        disableOnMatch([firstCard, secondCard]);

        // resets array
        flippedCards = [];
    } else {
        setTimeout(() => {
            resetCards(flippedCards);
            // resets array if there's no match
            flippedCards = [];
        }, 1000);
    }
}

// when 2 cards match disable target
function disableOnMatch(target) {
    setTimeout(() => {
        target.forEach(card => {
            card.classList.add('disable');
        });
    }, 500);
}

// loops through cards & makes each card clickable
cards.forEach(card => card.addEventListener('click', () => {

    // if there are 2 or more flipped cards OR if clicked card is locked then do nothing
    if (flippedCards.length >= 2 || lockedCards.indexOf(card) !== -1) {
        return;
    }

    card.classList.add('flip');

    flippedCards.push(card);
    lockedCards.push(card);

    // if there are less than 2 cards, do nothing
    if (flippedCards.length < 2) {
        return;
    }

    // if there are 2 cards, check for match
    checkForMatch(flippedCards[0], flippedCards[1]);
}));

// reset cards through array 'target'
function resetCards(target) {
    // loops through each targeted card
    target.forEach(card => {
        card.classList.remove('disable');
        card.classList.remove('flip');

        // check if card is currently locked
        let index = lockedCards.indexOf(card)
        if (index !== -1) {
            // if it is locked, unlock it
            delete lockedCards[index];
        }
    });
}
// adds some effect
function skewMe() {
    cards.forEach(card => {
        card.classList.add('skew');

        setTimeout(() => {
            card.classList.remove('skew');
        }, 500);
    });
}

shuffle.addEventListener('click', shuffleCards);

// resets game on click
reset.addEventListener('click', () => {
    // resets all available cards
    resetCards(cards);
    skewMe();

    setTimeout(() => {
        shuffleCards();
    }, 500);
});

// shuffles cards with random function
function shuffleCards() {
    cards.forEach(card => {
        let randImg = Math.floor(Math.random() * 16);
        card.style.order = randImg;
    });
};

// shuffle cards on load
window.onload = shuffleCards();
