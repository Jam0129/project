
$(window).on('scroll',function(){
    

    var 스크롤양 = $(window).scrollTop();
    var 현재창높이 = $(window).height();
    var 문서높이 = $(document).height();

    var 스크롤비율 = 스크롤양/(문서높이-현재창높이);
    var 채워질높이 = 스크롤비율 *50

    console.log(스크롤양, 현재창높이, 문서높이);

    $('.contbar').css({
        'height':`${채워질높이}%`,
        'background-color':'pink',
        'transition':'height all 0.1 linear'
    });

    if (스크롤양>0 && 스크롤비율 < 0.1) {
        $('.contbar').css('display','block')
        $('.la1').css('opacity', '1');
        $('.la2, .la3, .la4').css('opacity', '0');
    } else if (스크롤비율 >= 0.1 && 스크롤비율 < 0.4) {
        $('.la1, .la2').css('opacity', '1');
        $('.la3, .la4').css('opacity', '0');
    } else if (스크롤비율 >= 0.4 && 스크롤비율 < 0.6) {
        $('.la1, .la2, .la3').css('opacity', '1');
        $('.la4').css('opacity', '0');
    } else if (스크롤비율 >= 0.6) {
        $('.la1, .la2, .la3, .la4').css('opacity', '1');
    } else if (스크롤양 === 0) {
        $('.la1, .la2, .la3, .la4').css('opacity', '0');
    }
    if (스크롤비율 < 0.25) {
        $('body').css('background-image', 'url("https://togetherfolder.s3.ap-northeast-2.amazonaws.com/fukuoka/japan_marin2.jpg")');
    } else if (스크롤비율 >= 0.25 && 스크롤비율 < 0.5) {
        $('body').css('background-image', 'url("https://togetherfolder.s3.ap-northeast-2.amazonaws.com/fukuoka/japan_yuhu.jpg")');
    } else if (스크롤비율 >= 0.5 && 스크롤비율 < 0.75) {
        $('body').css('background-image', 'url("https://togetherfolder.s3.ap-northeast-2.amazonaws.com/fukuoka/japan_cannel.jpg")');
    } else if (스크롤비율 >= 0.75) {
        $('body').css('background-image', 'url("https://togetherfolder.s3.ap-northeast-2.amazonaws.com/fukuoka/japan_ohory3.jpg")');
    }

});
