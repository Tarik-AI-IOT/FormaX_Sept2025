document.addEventListener('click', function(evenement){ // evenemnt pour lobjet evenement que le navig fourni a tout evenement  comme position souris , clavier, ettc
    const circle = document.createElement('div');
    circle.classList.add('click-glow');

    circle.style.left = `${evenement.clientX}px`; /*Position au niveau du click*/
    circle.style.top = `${evenement.clientY}px`;

    document.body.appendChild(circle);
    circle.addEventListener('animationend', function (){
        circle.remove()
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#primary-nav');

    if (!toggle || !nav) {
        return;
    }

    function closeMenu() {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        const isOpen = document.body.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('click', function (event) {
        if (!document.body.classList.contains('nav-open')) {
            return;
        }
        if (event.target.closest('.nav-toggle') || event.target.closest('#primary-nav')) {
            return;
        }
        closeMenu();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
