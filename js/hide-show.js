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
        $('#modal').slideToggle();
        $('body').toggleClass('no-scroll');
    });
    $('.modal-closer').click(function(){
       $('#modal').slideToggle();
       $('body').toggleClass('no-scroll');
    });
});

// Success Alert Closer
$(document).ready(function(){
    $('#alert--success-closer').click(function(){
        $('.alert--success').toggle();
    });
});
