var content ;

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
        $('.menu').hide();
        $('.content').show();
        $('.title').scrollTop($(window).height() * 0.96);
    }
    else
    {

    }

    $('.menu-item').removeClass('menu-selected');
    $(element).addClass("menu-selected", 200);
    //$('#'+opt).css('display','flex');

    if ( content != undefined )
        $('#'+content).fadeOut(200, function () {
            $('#'+opt).fadeIn(400);
        });
    else
        $('#'+opt).fadeIn(400);
    content = opt;
}

function goMenu() { // Always Mobile
    $('.content').hide();
    clear();
    $('.menu').show();
}

function ismobile() {
    if ( window.screen.availWidth < 768.01 )
        return true;
    //console.log("here");
    //console.log(window.screen.availHeight);
    //console.log(window.screen.availWidth);
}