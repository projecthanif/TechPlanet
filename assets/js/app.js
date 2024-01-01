

function navToggle() {
    const navBar = document.querySelector('ul.navbar');
    const navToggle = document.querySelector('.nav-toggle')
    const font = document.querySelector('i.fa.fa-bars.fa-1x');

    navToggle.addEventListener('click', () => {
        navBar.className = 'showNav';
        font.className = 'fa fa-plus fa-1x';
    });

    // font.addEventListener('click', () => {
    //     navBar.className = 'navbar';
    //     font.className = 'fa fa-bars fa-1x';
    // });

}

navToggle();
