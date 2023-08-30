const numPopups = 5;
const popups = [];

for (let i = 1; i <= numPopups; i++) {
    const popup = document.querySelector(`#customPop-${i}`);
    if (popup) {
        popups.push(popup);
    }
}

let currentIndex = 0;

setInterval(function() {
    hideAllPopups(); // Hide all popups first
    showPopup(popups[currentIndex]); // Show the current popup
    currentIndex = (currentIndex + 1) % popups.length; // Move to the next popup
}, 2000);

function hidePopup(popup) {
    popup.classList.remove('show');
    popup.classList.add('card-small');
}

function showPopup(popup) {
    popup.classList.remove('card-small');
    popup.classList.add('show')
}

function hideAllPopups() {
    popups.forEach(popup => {
        hidePopup(popup);
    });
}