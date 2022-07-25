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

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
