

function navToggle() {
    const navBar = document.querySelector('ul.navbar');
    const navToggle = document.querySelector('.nav-toggle')

    navToggle.addEventListener('click', () => {
        navBar.className = 'showNav';
    })

}

// navToggle();