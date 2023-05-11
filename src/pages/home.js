
import logo_img from "../assets/images/obc-logo-transparent.png";

const home = function() {
    const content = document.querySelector('#content');


    const background = document.createElement("div");
    background.id = "background";
    content.appendChild(background);


    // main container for the page
    const container = document.createElement("div");
    container.id = "container";
    background.appendChild(container);

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
}

export default home;
