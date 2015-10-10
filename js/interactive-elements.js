/*-----------------------------------------
    Hamburger Menu
------------------------------------------*/
$(document).ready(function(){
    $('#show-menu').click(function(){
        $('#menu-overlay').toggle();
        $('body').toggleClass('no-scroll');
    });
    $('#close-menu').click(function(){
       $('#menu-overlay').toggle();
       $('body').toggleClass('no-scroll');
    });
});

/*-----------------------------------------
    Modal Forms
------------------------------------------*/

// Main Form Opener
$(document).ready(function(){
    $('.modal-opener').click(function(){
        $('#modal').toggle();
        $('#modal-bg').fadeToggle();
        $('.modal-form').delay(100).slideToggle();
        $('body').toggleClass('no-scroll');
    });
    $('.modal-closer').click(function(){
        $('#modal').fadeToggle();
        $('#modal-bg').fadeToggle();
        $('.modal-form').delay(100).slideToggle();
        $('body').toggleClass('no-scroll');
    });
});

