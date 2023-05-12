
const prices = function() {
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

    // Haircut prices
    const haircut_container_div = document.createElement('div');
    haircut_container_div.id = "haircut_container_div";
    container.append(haircut_container_div);

    const haircut_title = document.createElement('h2');
    haircut_title.id = "haircut_title";
    haircut_title.textContent = "Haircuts";
    haircut_container_div.append(haircut_title);


    const haircuts = { "Men's Haircut":"$30",
        "Senior's Haircut":"$25", "Buzz Cut":"$15",
        "Shave":"$15" };

    for (let haircut in haircuts) {
        let haircut_container = document.createElement('div');
        haircut_container.className = 'haircut_and_price';

        let haircut_name = document.createElement('h3');
        haircut_name.textContent = haircut;

        let haircut_price = document.createElement('h3');
        haircut_price.textContent = haircuts[haircut];

        haircut_container.append(haircut_name);
        haircut_container.append(haircut_price);
        haircut_container_div.append(haircut_container);
    }

    // Beard and Shave prices
    const shave_container_div = document.createElement('div');
    shave_container_div.id = "shave_container_div";
    container.append(shave_container_div);

    const shave_title = document.createElement('h2');
    shave_title.id = "shave_title";
    shave_title.textContent = "Shave & Beard";
    shave_container_div.append(shave_title);


    const shaves = { "Trim":"$10",
        "Mustache Trim":"$10", "Hot Shave":"$12",
        "Luxary Shave":"$15" };

    for (let shave in shaves) {
        let shave_container = document.createElement('div');
        shave_container.className = 'shave_and_price';

        let shave_name = document.createElement('h3');
        shave_name.textContent = shave;

        let shave_price = document.createElement('h3');
        shave_price.textContent = shaves[shave];

        shave_container.append(shave_name);
        shave_container.append(shave_price);
        shave_container_div.append(shave_container);
    }

}

export default prices;
