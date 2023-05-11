const headerDiv = function() {
    // Header
    const header = document.createElement("div");
    header.id = "header";

    const tab_container = document.createElement('div');
    tab_container.id = "tab_container";
    header.append(tab_container);

    const home_tab = document.createElement('button');
    home_tab.id = 'home_tab';
    home_tab.textContent = 'Home';
    tab_container.appendChild(home_tab);

    const prices_tab = document.createElement('button');
    prices_tab.id = 'prices_tab';
    prices_tab.textContent = 'Prices';
    tab_container.appendChild(prices_tab);

    const about_tab = document.createElement('button');
    about_tab.id = 'about_tab';
    about_tab.textContent = 'About Us'
    tab_container.appendChild(about_tab);

    // Add event listeners to each of the tabs
    home_tab.classList.add('active'); // Set the initial active tab

    home_tab.addEventListener('click', function() {
        prices_tab.classList.remove('active'); // Remove active class from the other tabs
        about_tab.classList.remove('active');
        home_tab.classList.add('active'); // Add active class to the clicked tab
    });

    prices_tab.addEventListener('click', function() {
        home_tab.classList.remove('active'); // Remove active class from the other tabs
        about_tab.classList.remove('active');
        prices_tab.classList.add('active'); // Add active class to the clicked tab
    });

    about_tab.addEventListener('click', function() {
        home_tab.classList.remove('active'); // Remove active class from the other tabs
        prices_tab.classList.remove('active');
        about_tab.classList.add('active'); // Add active class to the clicked tab
    });

    return header;
}

export default headerDiv;
