function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function selectSeat(elementId) {

    const seatElement = document.getElementById(elementId);

    const selectedSeats = document.querySelectorAll('.selected').length;

    if (selectedSeats < 4) {
        seatElement.classList.remove('available');
        seatElement.classList.add('selected');
        seatElement.classList.add('bg-[#1DD100]');
        seatElement.classList.add('text-white');

        const seatAvailable = getTextElementValueById('seat-available');
        const seat = seatAvailable - 1;
        setTextElementValueById('seat-available', seat);

        const p = document.createElement('p');
        p.innerText = seatElement.innerText;
        const p1 = document.createElement('p');
        p1.innerText = 'Econony';
        const p2 = document.createElement('p');
        p2.innerText = '550';

        document.getElementById("seat-details-container").appendChild(p);
        document.getElementById("seat-details-container").appendChild(p1);
        document.getElementById("seat-details-container").appendChild(p2);

        const totalElementPrice = getTextElementValueById('total-price');
        const price = (totalElementPrice + 550).toFixed(2);
        setTextElementValueById('total-price', price);

        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = price;

    } else {
        alert('You can select maximum 4 seats.');
        return;
    }
}



function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}