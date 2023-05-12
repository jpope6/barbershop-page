import home from "../pages/home";
import background_image from "../assets/images/background1.jpg";
import headerDiv from "../pages/header";
import footerDiv from "../pages/footer";

const firstLoad = function() {
    const content = document.querySelector("#content");

    const header = headerDiv();
    content.append(header);

    // Set the background image
    document.body.style.backgroundImage = 'url(' + background_image + ')';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    const background = document.createElement("div");
    background.id = "background";
    content.appendChild(background);

    // main container for the page
    const container = document.createElement("div");
    container.id = "container";
    background.appendChild(container);
    
    home();

    const footer = footerDiv();
    content.append(footer)

}

export default firstLoad;
