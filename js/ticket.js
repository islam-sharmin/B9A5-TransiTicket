function success() {
    hideElementById('header');
    hideElementById('best-offer');
    hideElementById('details');
    showElementById('success');
}

function apply() {
    hideElementById('input-field');
    showElementById('discount-container');
}

const seatIds = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
seatIds.forEach(seatId => {
    document.getElementById(seatId).addEventListener('click', () => {
        selectSeat(seatId);
    });
});

document.getElementById('input-field').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-apply');
    if (text === 'NEW15') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
    document.getElementById('btn-apply').addEventListener('click', function() {
        const secret = document.getElementById('input-container');
        secret.style.display = 'none';
    })

})