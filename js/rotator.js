function showImage(img, duration){ 
	$('.container').removeClass('current').css({
			"opacity" : 0.0, 
			"zIndex" : 2
			});
	img.animate({opacity:1.0}, duration, function(){		
		$(this).addClass('current').css({zIndex:1});
	});	 	
}

$(document).ready(function(){
    
    $('.container').each(function(e){
    	if(e == 0){
    		$(this).addClass('current');
    	}
    	 $(this).attr('id', 'handle' + e);
        })

    $('.tabs li').each(function(e){
		if(e == 0){
			$(this).addClass('current'); 
		}
		$(this).wrapInner('<a class="title"></a>'); 			
		$(this).append('<a><img /></a>'); 	
		$(this).children('a').attr('href', '#handle' + e);	
		y = $('#handle' + e + ' img').attr('src'); 
		$(this).find('img').attr('src', y); 
		t = $(this).children('a').text(); 
		$('#handle' + e).append('<h2>' + t + '</h2>'); 	
	})
	
	$('.tabs li a').click(function(){
		c = $(this).attr('href'); 		
		if($(c).hasClass('current')){
			return false;
		}else{
			showImage($(c), 20);
			$('.tabs li').removeClass('current');
			$(this).parent().addClass('current');
			return false;
		}			
    })

});
