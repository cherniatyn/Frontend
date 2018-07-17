;(function() {
    var navElement = document.getElementsByClassName('btn-nav')[0];
    var body = document.body;

    var openNavigation = function (e) {
        e.preventDefault();
        body.classList.toggle('active');
    };

    navElement.addEventListener("click", openNavigation, false);

    window.onbeforeunload = (e) => {
        e.preventDefault();
        navElement.removeEventListener('click', openNavigation, false);
    };
})();