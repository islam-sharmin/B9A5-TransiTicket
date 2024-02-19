function success() {
    hideElementById('header');
    hideElementById('best-offer');
    hideElementById('details');
    hideElementById('footer');
    showElementById('success');
}

const continueButton = document.getElementById('btn-continue');

continueButton.addEventListener('click', function() {
    window.location.reload()
})

function handleButtonClick(elementId) {
    const uniqueSeat = document.getElementById(elementId);
    let buttonSelected = false;
    if (!buttonSelected === uniqueSeat) {
        buttonSelected = true;
    } else {
        alert('Seat Already Selected.');
    }
}



const seatIds = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
seatIds.forEach(seatId => {
    document.getElementById(seatId).addEventListener('click', () => {
        selectSeat(seatId);
    });
});

function selectSeat(elementId) {

    const seatElement = document.getElementById(elementId);

    document.getElementById(elementId).addEventListener('click', handleButtonClick);

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

        const showSeatQuantity = getTextElementValueById('seat-quantity');
        const seatQuantity = showSeatQuantity + 1;
        setTextElementValueById('seat-quantity', seatQuantity);

        document.getElementById("seat-details-container").appendChild(p);
        document.getElementById("seat-details-container").appendChild(p1);
        document.getElementById("seat-details-container").appendChild(p2);

        document.getElementById('input-field').addEventListener('keyup', function(event) {
            const text = event.target.value;
            const deleteButton = document.getElementById('btn-apply');
            if (selectedSeats === 3) {
                if (text === 'NEW15') {
                    deleteButton.removeAttribute('disabled');
                    document.getElementById('btn-apply').addEventListener('click', function() {
                        hideElementById('input-container');
                        showElementById('discount-container');

                        const discountElement = document.getElementById('discount');
                        discountAmount = price * 0.15;
                        discountElement.innerText = discountAmount.toFixed(2);

                        const grandTotal = document.getElementById('grand-total');
                        grandTotal.innerText = price - discountAmount;
                    })

                } else if (text === 'Couple 20') {
                    deleteButton.removeAttribute('disabled');
                    document.getElementById('btn-apply').addEventListener('click', function() {
                        hideElementById('input-container');
                        showElementById('discount-container');

                        const discountElement = document.getElementById('discount');
                        discountAmount = price * 0.20;
                        discountElement.innerText = discountAmount.toFixed(2);

                        const grandTotal = document.getElementById('grand-total');
                        grandTotal.innerText = price - discountAmount;
                    })
                } else {
                    deleteButton.setAttribute('disabled', true);
                }
            }
        })

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