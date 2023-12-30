

function navToggle() {
    const navBar = document.querySelector('ul');
    const navToggle = document.querySelector('.nav-toggle');

    const onEvent = addEventListener('click', () => {
        navBar.className = 'navbar showNav';
    })

}

navToggle();