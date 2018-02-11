$(document).ready(function(){
    var w = $(window).width();
    var wg = 150;
    var wh = 150;

    $(".fr-abuttons1").css({
        'margin-left' : ((w/2)-(wg/2)) + 'px'
    });
    $(".fr-abuttons2").css({
        'margin-left' : ((w/2)-wg) + 'px',
        'margin-top' : (wh/1.3) +'px'
    });
    $(".fr-abuttons3").css({
        'margin-left' : (w/2) + 'px',
        'margin-top' : (wh/1.3) +'px'
    });
    $(".fr-abuttons4").css({
        'margin-left' : ((w/2)-(wg+(wg/2))) + 'px',
        'margin-top' : ((2*wh)/1.3) +'px'
    });
    $(".fr-abuttons5").css({
        'margin-left' : ((w/2)-(wg/2)) + 'px',
        'margin-top' : ((2*wh)/1.3) +'px'
    });
    $(".fr-abuttons6").css({
        'margin-left' : ((w/2)+(wg/2)) + 'px',
        'margin-top' : ((2*wh)/1.3) +'px'
    });
    $(".fr-abuttons7").css({
        'margin-left' : ((w/2)-wg) + 'px',
        'margin-top' : ((3*wh)/1.3) +'px'
    });
    $(".fr-abuttons8").css({
        'margin-left' : (w/2) + 'px',
        'margin-top' : ((3*wh)/1.3) +'px'
    });
    $(".fr-abuttons9").css({
        'margin-left' : (w/2)-(wg/2) + 'px',
        'margin-top' : ((4*wh)/1.3) +'px'
    });
    
    $(".fr-winter div").each(function(i){
       
        setTimeout(function(){
            $(".fr-winter div").eq(i).addClass("appear");
        },150*(i+1));
    });
    $(".button-collapse").sideNav();
});



