$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active')
    $('.container').toggleClass('container-active')
});