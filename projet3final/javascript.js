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