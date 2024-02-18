function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// function setBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1DD100]', 'text-white');
// }

// function selectSeat() {
//     const seatArray = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'];
//     const seat = seatArray[index];
//     return seat;
// }

function selectSeat(seatId) {
    const seatElement = document.getElementById(seatId);
    seatElement.style.backgroundColor = '#1DD100';
    seatElement.style.color = 'white';
}