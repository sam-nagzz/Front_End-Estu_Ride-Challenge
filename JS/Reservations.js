// JavaScript source code

document.addEventListener('DOMContentLoaded', function () {
    const reservations = {};
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    const roomImages = {
        "DC Boutique Hotel": "images/room1-1.png",
        "Terrestre": "images/room2-1.png",
        "Casa Joseph Zicatela": "images/room3-1.png"
    };

    document.getElementById('reservation-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedRoom = document.querySelector('input[name="roomOption"]:checked').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        let isDateReservedInRoom = reservations[selectedRoom] ? reservations[selectedRoom].some(reservation => reservation.date === date) : false;

        if (isDateReservedInRoom) {
            alert('This date is already reserved. Choose another one.');
            return;
        }

        if (!reservations[selectedRoom]) {
            reservations[selectedRoom] = [];
        }

        reservations[selectedRoom].push({ date, guests });
        alert('Successful booking.');
        displayReservations();
    });

    function displayReservations() {
        const reservationsDiv = document.getElementById('reservations');
        reservationsDiv.innerHTML = '';

        for (const room in reservations) {
            const reservationItem = document.createElement('li');
            reservationItem.classList.add('reservation-item');

            const contentContainer = document.createElement('div');
            contentContainer.classList.add('content-container');

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('reservation-image');
            const image = document.createElement('img');
            image.src = roomImages[room];
            image.alt = `Image of ${room}`;
            imageContainer.appendChild(image);

            const infoContainer = document.createElement('div');
            infoContainer.classList.add('reservation-info');
            const roomTitle = document.createElement('h3');
            roomTitle.textContent = room;
            infoContainer.appendChild(roomTitle);

            reservations[room].forEach(reservation => {
                const reservationDetails = document.createElement('p');
                reservationDetails.textContent = `Date: ${reservation.date}, Guests: ${reservation.guests}`;
                infoContainer.appendChild(reservationDetails);
            });

            contentContainer.appendChild(imageContainer);
            contentContainer.appendChild(infoContainer);
            reservationItem.appendChild(contentContainer);
            reservationsDiv.appendChild(reservationItem);
        }
    }
});