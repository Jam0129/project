$(document).ready(function () {
    const $images1 = $('.icontainer img, .icontainer video');
    const $images2 = $('.icontainer2 img');
    const $images3 = $('.icontainer3 img');
    const $images4 = $('.icontainer4 img');
    const $images5 = $('.icontainer5 img');
    const $images6 = $('.icontainer6 img');
    const $dotsContainer1 = $('.dots1');
    const $dotsContainer2 = $('.dots2');
    const $dotsContainer3 = $('.dots3');
    const $dotsContainer4 = $('.dots4');
    const $dotsContainer5 = $('.dots5');
    const $dotsContainer6 = $('.dots6');
    const $nextIcons = $('.next-icon');
    const $prevIcons = $('.prev-icon');

    let currentIndex1 = 0;
    let currentIndex2 = 0;

    // Dots 생성
    for (let i = 0; i < $images1.length; i++) {
        $dotsContainer1.append($('<span></span>'));
    }
    for (let i = 0; i < $images2.length; i++) {
        $dotsContainer2.append($('<span></span>'));
    }
    for (let i = 0; i < $images3.length; i++) {
        $dotsContainer3.append($('<span></span>'));
    }
    for (let i = 0; i < $images4.length; i++) {
        $dotsContainer4.append($('<span></span>'));
    }
    for (let i = 0; i < $images5.length; i++) {
        $dotsContainer5.append($('<span></span>'));
    }
    for (let i = 0; i < $images6.length; i++) {
        $dotsContainer6.append($('<span></span>'));
    }

    const $dots1 = $('.dots1 span');
    const $dots2 = $('.dots2 span');
    const $dots3 = $('.dots3 span');
    const $dots4 = $('.dots4 span');
    const $dots5 = $('.dots5 span');
    const $dots6 = $('.dots6 span');

    $dots1
        .eq(0)
        .addClass('active');
    $dots2
        .eq(0)
        .addClass('active');
    $dots3
        .eq(0)
        .addClass('active');
    $dots4
        .eq(0)
        .addClass('active');
    $dots5
        .eq(0)
        .addClass('active');
    $dots6
        .eq(0)
        .addClass('active');

    function showMedia(index, images, dots) {
        images
            .removeClass('active')
            .addClass('hidden');
        dots.removeClass('active');

        images
            .eq(index)
            .removeClass('hidden')
            .addClass('active');
        dots
            .eq(index)
            .addClass('active');
    }

    showMedia(0, $images1, $dots1);
    showMedia(0, $images2, $dots2);
    showMedia(0, $images3, $dots3);
    showMedia(0, $images4, $dots4);
    showMedia(0, $images5, $dots5);
    showMedia(0, $images6, $dots6);

    // 슬라이드 버튼 이벤트
    $nextIcons.click(function () {
        let container = $(this).closest('.image-container');
        let images = container.find('img, video');
        let dots = container.find(
            '.dots1 span, .dots2 span, .dots3 span, .dots4 span, .dots5 span, .dots6 span'
        );
        let currentIndex = container.hasClass('container')
            ? ++currentIndex1
            : ++currentIndex2;
        currentIndex %= images.length;
        showMedia(currentIndex, images, dots);
    });
    $prevIcons.click(function () {
        let container = $(this).closest('.image-container');
        let images = container.find('img, video');
        let dots = container.find(
            '.dots1 span, .dots2 span, .dots3 span, .dots4 span, .dots5 span, .dots6 span'
        );
        let currentIndex = container.hasClass('container')
            ? --currentIndex1
            : --currentIndex2;
        currentIndex = (currentIndex + images.length) % images.length;
        showMedia(currentIndex, images, dots);
    });

    // 이미지 더블클릭 시 좋아요
    $('.image-container img, .image-container video').dblclick(function () {
        let imageContainer = $(this).closest('.image-container'); // 이미지가 속한 컨테이너 찾기
        let heartIcon = imageContainer
            .nextAll('.icon')
            .find('.fa-heart'); // 다음에 오는 icon 클래스 내 하트 아이콘 찾기
        let likeText = imageContainer
            .nextAll('.icon')
            .next()
            .find('h4'); // 좋아요 텍스트 찾기
        let count = parseInt(
            likeText.text().match(/\d+/)
                ?.[0] || '0',
            10
        );

        heartIcon
            .toggleClass('fa-regular fa-solid')
            .css(
                'color',
                heartIcon.hasClass('fa-solid')
                    ? 'red'
                    : ''
            );
        count += heartIcon.hasClass('fa-solid')
            ? 1
            : -1;
        likeText.text(`좋아요 ${count}개`);
    });

    // 좋아요 버튼 이벤트 (게시글)
    $(
        '.commentheart, .commentheart2, .commentheart3, .commentheart4, .commentheart5,' +
        ' .commentheart6'
    ).click(function () {
        let heartIcon = $(this);
        let iconContainer = heartIcon.closest('.icon'); // 해당 하트 아이콘이 속한 아이콘 컨테이너 찾기
        let likeText = iconContainer
            .next()
            .find('h4'); // 해당 아이콘 컨테이너 다음의 좋아요 텍스트 찾기
        let count = parseInt(
            likeText.text().match(/\d+/)
                ?.[0] || '0',
            10
        );

        heartIcon
            .toggleClass('fa-regular fa-solid')
            .css(
                'color',
                heartIcon.hasClass('fa-solid')
                    ? 'red'
                    : ''
            );
        count += heartIcon.hasClass('fa-solid')
            ? 1
            : -1;
        likeText.text(`좋아요 ${count}개`);
    });

    // 좋아요 버튼 이벤트 (댓글)
    $('.replyheart').click(function () {
        let heartIcon = $(this);
        let likey = $(this)
            .closest('.otheruser')
            .find('.likey');
        let count = parseInt(
            likey.text().match(/\d+/)
                ?.[0] || 0
        );
        heartIcon
            .toggleClass('fa-regular fa-solid')
            .css(
                'color',
                heartIcon.hasClass('fa-solid')
                    ? 'red'
                    : ''
            );
        count += heartIcon.hasClass('fa-solid')
            ? 1
            : -1;
        likey.text(`좋아요 ${count}개`);
    });
});
