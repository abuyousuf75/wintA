$(function(){


/// Bottom-Top

$('.topbtns').click(function(){

    $('body,html').animate({scrollTop:0},1000);

});

$(window).scroll(function(){
   var srcool = $(this).scrollTop();
   if(srcool>250){
    $('.topbtns').fadeIn(500);
   }else{
    $('.topbtns').fadeOut(500);
   }

   // for navBar background

   if(srcool>250){

    $('.navbar').addClass('nav-add');

}else{
    
    $('.navbar').removeClass('nav-add');

}

});

//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -120
            }, 1500);
            return false;
        }
    }
});


  
});