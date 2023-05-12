
const prices = function() {
    const content = document.querySelector('#content');

    // Appointment to remind them to call
    const contact_container = document.createElement('div');
    contact_container.id = "contact_container";
    content.append(contact_container);

    const reminder = document.createElement('h2');
    reminder.textContent = "To book an appointment, Call today!"
    contact_container.append(reminder);

}

export default prices;
