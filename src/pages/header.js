import obcLogo from "../assets/images/obc-logo.png";

const headerDiv = function() {
    const header = document.createElement("div");
    header.id = "header";

    const headerLogo = document.createElement("img");
    headerLogo.src = obcLogo;
    headerLogo.id = "header-logo";

    header.appendChild(headerLogo);
    
    return header;
}

export default headerDiv;
