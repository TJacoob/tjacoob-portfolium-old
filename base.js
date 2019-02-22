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
    clear();
    $(element).addClass("menu-selected", 200);
    //console.log($(this)[);
    //$(this).addClass("test");
    $('#'+opt).css('display','flex');
}

function aboutMe() {
    if ( ismobile() )
    {
        $('.menu').hide();
        $('.content').show();
    }
    else
    {
        clear();
        $('#aboutMe').css('display','flex');
    }
}

function education() {
    clear();
    $('#education').css('display','flex');
}

function skills() {
    clear();
    $('#skills').css('display','flex');
}

function previousWork() {
    clear();
    $('#previousWork').css('display','flex');
}

function getInTouch() {
    clear();
    $('#getInTouch').css('display','flex');
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