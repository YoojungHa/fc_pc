$(window).scroll(function() {
    console.log($(window).scrollTop());

    if($(window).scrollTop() > 0){
        $('header').addClass('on')
    }else {
        $('header').removeClass('on')
    }
})

let slideBoxW = $('.match_box').width(); 
let item = $('.match_box li').length ; 
let slideInit = 1;
$('.match_box .match').css({left:-slideBoxW});

$('.match_box .match').width(slideBoxW * item);
$('.match li').width(slideBoxW);

$('.btn_right').click(function(){
    $('.btn_left').fadeIn();
    slideInit++;
    if(slideInit >=3){
        slideInit =2
    }
    if(slideInit >=2){
        $('.btn_right').fadeOut();
    }
    $('.match_box .match').animate({left:'-'+slideBoxW*slideInit});
})


$('.btn_left').click(function(){
    $('.btn_right').fadeIn();
    slideInit--;
    if(slideInit < 0){
        slideInit = 1
    }
    if(slideInit <=0){
        $('.btn_left').fadeOut();
    }
    $('.match_box .match').animate({left:'-'+slideBoxW*slideInit});
})

// let slideNews = $('.news_box').width(); 
// let item2 = $('.seoulnews li').length;
// let slide2Init = 0;
// $('.news_box .seoulnews').css({left:-slideNews});

// function NewsSlideMove(){
//     $('.seoulnews').animate({left:'-' + slideNews * slide2Init})
// }

// $('.news_box .seoulnews').width(slideNews * item2);
// $('.seoulnews li').width(slideNews);

$('.btn2_right').click(function(){
    
        slide2Init++;
        if(slide2Init >= 2){
            slide2Init = 1
        }
    NewsSlideMove();
})

$('.btn2_left').click(function(){
   
    slide2Init--;
    if(slide2Init < 0){
        slide2Init = 1
    }

    NewsSlideMove();
})

$('.insta_content figure').mouseover(function(){
   let imgSrc = $(this).find('.insta_logo').attr('src');

//    $(this).attr('scr',imgSrc+)

   $(this).find('.insta_logo').attr('src', imgSrc.replace('insta_black.png','insta_color.png'))
})

$('.insta_content figure').mouseout(function(){
    let imgScr = $(this).find('.insta_logo').attr('src');

    $(this).find('.insta_logo').attr('src', imgScr.replace('insta_color.png','insta_black.png'))
})