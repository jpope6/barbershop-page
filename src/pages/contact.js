import blank_profile_pic from "../assets/images/blank-profile-pic.png";

const contact = function() {
    const container = document.querySelector('#container');

    // Appointment to remind them to call
    const contact_container = document.createElement('div');
    contact_container.id = "contact_container";
    container.append(contact_container);

    const reminder = document.createElement('h2');
    reminder.textContent = "To book an appointment, Call today!"
    contact_container.append(reminder);

    // Phone number
    const phone_number = document.createElement('h2');
    phone_number.textContent = "(714) 602-7333";
    contact_container.append(phone_number);

    // Create a wrapper for barbers' containers
    const barbers_wrapper = document.createElement('div');
    barbers_wrapper.className = "barbers_wrapper";
    container.append(barbers_wrapper);

    // Create containers for different barbers
    for (let i = 0; i < 7; i++) {
        let barber_container = document.createElement('div');
        barber_container.className = "barber_container";

        let barber_pic = document.createElement('img');
        barber_pic.src = blank_profile_pic;

        let barber_name = document.createElement('h2');
        barber_name.textContent = "Barber Name";

        barber_container.append(barber_pic);
        barber_container.append(barber_name);
        barbers_wrapper.append(barber_container);
    }
}

export default contact;
