var content ;

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

function load(){
    if ( ismobile() )
    {
        console.log("mobile");
        $('.content').hide();
    }
    else
    {
        console.log("desktop");
    }
    $('.overlay').hide();
    //document.getElementById('overlay').style.display = 'none';
}

function clear() {
    $('.overlay').hide();
    $('.menu-item').removeClass('menu-selected');
    //document.getElementById('overlay').style.display = 'none';
}

function navigate(opt, element) {
    if ( ismobile() )
    {
        $('.menu').fadeOut(200,function () {
            $('.content').fadeIn(200);
            $('.title').scrollTop($(window).height() * 0.96);
        });
    }
    else
    {

    }

    $('.menu-item').removeClass('menu-selected');
    $(element).addClass("menu-selected", 200);
    //$('#'+opt).css('display','flex');

    if ( content != undefined )
        $('#'+content).fadeOut(200, function () {

            if ( ismobile() ){
                $('.content').css({'background-image': 'url(img/'+opt+'.jpg)'})
                    .animate({opacity: 1},400, function(){
                        $('#'+opt).fadeIn(400);
                    });
            }
            else
            {
                //$('.content').css("background-image", "url(img/"+opt+".jpg)");
                $(".content").stop().animate({opacity: 0},200,function(){
                    $('.content').css({'background-image': 'url(img/'+opt+'.jpg)'})
                        .animate({opacity: 1},400, function(){
                            $('#'+opt).fadeIn(400);
                        });
                });
            }
        });
    else
    {
        if ( ismobile() ){
            $('.content').css({'background-image': 'url(img/'+opt+'.jpg)'})
                .animate({opacity: 1},400, function(){
                    $('#'+opt).fadeIn(400);
                });
        }
        else
        {
            //$('.content').css("background-image", "url(img/"+opt+".jpg)");
            $(".content").stop().animate({opacity: 0},200,function(){
                $('.content').css({'background-image': 'url(img/'+opt+'.jpg)'})
                    .animate({opacity: 1},400, function(){
                        $('#'+opt).fadeIn(400);
                    });
            });
        }
    }
    content = opt;
}

function goMenu() { // Always Mobile

    $('.content').fadeOut(200, function () {
        clear();
        $('.menu').fadeIn(200);
    });


}

function ismobile() {
    if ( window.screen.availWidth < 768.01 )
        return true;
    //console.log("here");
    //console.log(window.screen.availHeight);
    //console.log(window.screen.availWidth);
}