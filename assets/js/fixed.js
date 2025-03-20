(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('#main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let windowPos;
    let breakpoint = main.offsetTop - navbarHeight;
    let isFixed = false; //evita que se cambien los estilos cada que se hace scroll

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {
        updatePos();

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + "px;";
            isFixed = true;
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()