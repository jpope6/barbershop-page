# Orange Barber Co. Website Repository

This repository contains the source code for the Orange Barber Co. website, a traditional men's barbershop site built entirely using HTML, CSS, and JavaScript. This project is part of my journey with The Odin Project, an open-source curriculum for learning web development. The project is intended to be a practical application of skills learned, focusing specifically on DOM manipulation and modular JavaScript design.

## Structure

The project is organized into several modules:

- `index.js`: The main JavaScript entry point. This file imports other modules and initializes the site.
- `firstLoad.js`: This script sets up the initial page structure and loads the home page content.
- Individual page modules: Each page (Home, Prices, Contact) is handled by a separate JavaScript module.
- Header/Footer modules: The header and footer of the site are also managed by individual modules.

## Styles

The styling for the website is contained within a single CSS file, `home.css`. One of the goals for future iterations is to improve this by breaking out the styles into separate CSS files for each page.

## Running the Project

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Once the installation is complete, run `npm start` to launch the development server and view the website.

## Areas for Improvement

- **CSS Organization:** The styles could be broken out into separate CSS files to align with the modular structure of the JavaScript, making it easier to manage and edit styles for individual components or pages.
- **Expand Functionality:** As I continue to learn and grow in JavaScript and CSS, I could add new features to the website such as transitions, animations, or a booking form.
