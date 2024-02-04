// // Select all elements with the class expandableCards and store them in the cards variable!
const cards = document.querySelectorAll('.expandableCards')

// Add a mouseover event listener to each card element!
cards.forEach(card => {
    // When the mouse is over a card, remove active class from all cards and add it to the current card!
    card.addEventListener('mouseover', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})

// Function to remove active class from all cards!
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}