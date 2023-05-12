// removes all container style attributes and removes children till only header remains as the sole children
const render = function(){
    const container = document.querySelector('#container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export default render;
