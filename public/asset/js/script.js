$(document).ready(function() {

    handleWindowScroll();
    handleNavigation();
});

function handleWindowScroll() {
    $(window).scroll(throttle(function() {
        /* Przyklejanie nawigacji */
        if($(window).scrollTop() > 70) {
            $('.site-nav').addClass('sticky-bar');
        } else {
            $('.site-nav').removeClass('sticky-bar');
        }
    }, 50)) // Wykonanie funkcji max 1 raz na 50ms (20 razy na sekundę)
}

function handleNavigation() {
    /* Rozwijanie mobinej nawigacji */
    $('.site-nav .hamburger').click(function() {
        $('body').toggleClass('open');
    });

    $('.menu-list .list-item .link').click(function(event) {
        event.preventDefault();
        var anchor = $(this).attr('href');
        if($(anchor).length > 0) {
            var distanceFromTop = $(anchor).offset().top;
            $('body').removeClass('open');
            $('html, body').animate({
                scrollTop: distanceFromTop
            }, 500, function() {
                location.hash = anchor;
            });
        }
    });
}

function throttle (callback, limit) {
    /* Funkcja ograniczająca ilość wykonań innej funkcji (zdarzeń), co pozwala odciążyć przeglądarkę użytkownika */
    var wait = false;                  
    return function () {               
        if (!wait) {                   
            callback.call();           
            wait = true;               
            setTimeout(function () {  
                wait = false;          
            }, limit);
        }
    }
}