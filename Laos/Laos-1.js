$(document).ready(function () {
  const $images1 = $('.icontainer img, .icontainer video');
  const $images2 = $('.icontainer2 img');
  const $dotsContainer1 = $('.dots1');
  const $dotsContainer2 = $('.dots2');
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

  // dots1과 dots2를 다시 선택해야 정상적으로 적용됨
  const $dots1 = $('.dots1 span'); 
  const $dots2 = $('.dots2 span');

  $dots1.eq(0).addClass('active'); // 첫 번째 dot에 active 클래스 추가
  $dots2.eq(0).addClass('active');

  function showMedia(index, images, dots) {
    images.removeClass('active').addClass('hidden');
    dots.removeClass('active');

    images.eq(index).removeClass('hidden').addClass('active');
    dots.eq(index).addClass('active');
  }
  console.log("images1 개수:", $images1.length);
  console.log("images2 개수:", $images2.length);
  console.log("dots1 개수:", $dots1.length);
  console.log("dots2 개수:", $dots2.length);
  // dots가 정상적으로 전달되는지 확인
  showMedia(0, $images1, $dots1);
  showMedia(0, $images2, $dots2);
  
  // 슬라이드 버튼 이벤트
  $nextIcons.click(function () {
    let container = $(this).closest('.image-container');
    let images = container.find('img, video');
    let dots = container.find('.dots1 span, .dots2 span');
    let currentIndex = container.hasClass('container') ? ++currentIndex1 : ++currentIndex2;

    currentIndex %= images.length;
    showMedia(currentIndex, images, dots);
  });

  $prevIcons.click(function () {
    let container = $(this).closest('.image-container');
    let images = container.find('img, video');
    let dots = container.find('.dots1 span, .dots2 span');
    let currentIndex = container.hasClass('container') ? --currentIndex1 : --currentIndex2;

    currentIndex = (currentIndex + images.length) % images.length;
    showMedia(currentIndex, images, dots);
  });

  // 이미지 더블클릭 시 좋아요
  $images1.add($images2).dblclick(function(){
    let heartIcon = $('.icon .fa-heart');
    heartIcon.toggleClass('fa-regular fa-solid');
    heartIcon.css('color', heartIcon.hasClass('fa-solid') ? 'red' : '');
  });
  
  // 좋아요 버튼 이벤트 (게시글)
  $('.commentheart, .commentheart2').click(function () {
    let heartIcon = $(this);
    let likeContainer = heartIcon.closest('.icon').next(); // 다음 요소인 좋아요 컨테이너 찾기
    let likeText = likeContainer.find('h4');
    let count = parseInt(likeText.text().match(/\d+/)?.[0] || '0', 10);
    heartIcon.toggleClass('fa-regular fa-solid').css('color', heartIcon.hasClass('fa-solid') ? 'red' : '');
    count += heartIcon.hasClass('fa-solid') ? 1 : -1;
    likeText.text(`좋아요 ${count}개`);
  });
  

  // 좋아요 버튼 이벤트 (댓글)
  $('.replyheart').click(function () {
    let heartIcon = $(this);
    let likey = $(this).closest('.asd').find('.likey');
    let count = parseInt(likey.text().match(/\d+/)?.[0] || 0);
    heartIcon.toggleClass('fa-regular fa-solid').css('color', heartIcon.hasClass('fa-solid') ? 'red' : '');
    count += heartIcon.hasClass('fa-solid') ? 1 : -1;
    likey.text(`좋아요 ${count}개`);
  });
});
