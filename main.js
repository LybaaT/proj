$(document).ready(function(){
    $('.third-row  li.active-1').find('span').css('color' , 'white');
    $(' .third-row li').click(function() {
    $(' .third-row li.active-1').find('span').css('color' , 'black');
    $(' .third-row li.active-1').removeClass('active-1');
    $(' .third-row li.active-1').addClass('text-dark');
    $(this).addClass('active-1');
    $(' .third-row  li.active-1').find('span').css('color' , 'white');
    });
});


