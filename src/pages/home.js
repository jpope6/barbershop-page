import logo_img from "../assets/images/obc-logo-transparent.png";

const home = function() {
    const container = document.querySelector('#container');

    //logo goes inside the main container
    const logo = document.createElement("img");
    logo.src = logo_img;
    container.append(logo);

    //Text container div
    const text_container = document.createElement("div");
    text_container.id = "text_container";
    container.append(text_container);

    //some cool slogan
    const slogan = document.createElement("h1");
    slogan.textContent = "Traditional Men's Barbershop";
    text_container.append(slogan);

    const small_slogan = document.createElement("h3");
    small_slogan.textContent = "Exclusively at Orange Barber Co"
    text_container.append(small_slogan);

    const phone_number = document.createElement("h3");
    phone_number.id = "phone_number";
    phone_number.textContent = "(714) 602-7333";
    text_container.append(phone_number);

    //Container that will hold the hours of operation
    const hours_container = document.createElement("div");
    hours_container.id = "hours_container";
    container.append(hours_container);

    // Hours title
    const hours_title = document.createElement("h2")
    hours_title.textContent = "Hours of Operation";
    hours_container.append(hours_title);

    //Container to hold the days of the week
    const day_of_the_week = document.createElement("div");
    day_of_the_week.id = "day_of_the_week";
    hours_container.append(day_of_the_week);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < days.length; i++) {
        let new_container = document.createElement("div");
        new_container.className = "days_and_hours";
        let day = document.createElement("h3");
        day.textContent = days[i] + ":";
        let hours = document.createElement("h3");

        if (days[i] == "Sunday") {
            hours.textContent = "Closed";
        } else {
            hours.textContent = "9 AM - 6 PM";
        }

        new_container.append(day);
        new_container.append(hours);
        day_of_the_week.append(new_container);
    }

    // Container to hold the location
    const location_container = document.createElement("div");
    location_container.id = "location_container";
    container.append(location_container);

    // Location title
    const location_title = document.createElement("h2")
    location_title.textContent = "Location";
    location_container.append(location_title);

    // Address
    const address = document.createElement("h3");
    address.textContent = "1132 E Katella Ave A15, Orange, CA 92867";
    location_container.append(address)
}

export default home;
