import github from "../assets/images/white-github.png";

const footerDiv = function() {
    // Footer
    const footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer)

    const my_name = document.createElement('h3');
    my_name.textContent = "Created by Jared Pope";
    footer.append(my_name);

    const logo = document.createElement('img');
    logo.src = github;

    const link = document.createElement('a');
    link.href = "https://github.com/jpope6";
    link.target = "_blank";

    link.append(logo);
    footer.append(link);

    return footer;
}

export default footerDiv;
