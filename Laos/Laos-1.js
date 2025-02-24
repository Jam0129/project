$(document).ready(function(){
  const $images = $('.image-container img, .image-container video');
  const $dotsContainer = $('.dots');
  const $nextIcon = $('.next-icon');
  const $prevIcon = $('.prev-icon');
  let currentIndex = 0;

  // Dots 생성
  for(let i = 0; i < $images.length; i++){
    const $dot = $('<span></span>');
    $dotsContainer.append($dot);
  }

  const $dots = $('.dots span');
  $dots.eq(0).addClass('active');

  function showMedia(index) {
    // 모든 미디어 숨기기
    $images.removeClass('active').addClass('hidden');
    $dots.removeClass('active');

    // 현재 index의 미디어 보이기
    $images.eq(index).removeClass('hidden').addClass('active');
    $dots.eq(index).addClass('active');
  }
  
  // 다음 버튼 (Next)
  $nextIcon.click(function(){
    currentIndex = (currentIndex + 1) % $images.length;
    showMedia(currentIndex);  
  });

  // 이전 버튼 (Prev)
  $prevIcon.click(function(){
    currentIndex = (currentIndex - 1 + $images.length) % $images.length;
    showMedia(currentIndex);
  });
});
