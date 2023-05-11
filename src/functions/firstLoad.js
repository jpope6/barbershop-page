import headerDiv from "../pages/header";
import home from "../pages/home";
import background_image from "../assets/images/background1.jpg";

const firstLoad = function() {
    const content = document.querySelector("#content");
    const header = headerDiv();
    content.appendChild(header);

    document.body.style.backgroundImage = 'url(' + background_image + ')';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    
    home();

}

export default firstLoad;
