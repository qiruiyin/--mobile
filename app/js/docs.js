(function(){
  'use strict';

  if(document.cookie.indexOf('preload=ok') === -1){
    location.href = 'index.html';
  }

  var swiper = new window.Swiper('.swiper-container', {
    direction: 'vertical'
  });
  var arrow = document.querySelector('.arrow-next');
  arrow.src = swiper.activeIndex === 0 ? "img/arrow-white.png" : "img/arrow-blue.png";

  swiper
    .on('sliderMove', function(){
      arrow.style.display = 'none';
    })
    .on('touchEnd', function(s){
      if(!s.isEnd) {
        arrow.style.display = 'block';
      }
    })
    .on('slideChangeEnd', function(s){
      if(s.isEnd) {
        arrow.style.display = 'none';
      } else {
        arrow.style.display = 'block';
        arrow.src = s.activeIndex === 0 ? "img/arrow-white.png" : "img/arrow-blue.png";
      }
      // 约自驾
      if(s.activeIndex === 1) {
        var camp = document.querySelector('.camp');
        camp.classList.add('active');
      }
      // 语音对讲
      if(s.activeIndex === 2) {
        var finger = document.querySelector('.finger'),
            button = document.querySelector('.voice-btn'),
            vgroup = document.querySelector('.voice-talk');

        var ifTransition = false;
        finger.classList.add('finger-touch');

        var hasTouched = function(){
          button.classList.add('touched');
          vgroup.style.visibility = 'visible';
          vgroup.classList.add('bounceInDown');
          ifTransition = true;
        };
        finger.addEventListener('transitionEnd', hasTouched, false);
        window.setTimeout(function(){
          if(!ifTransition) {
            hasTouched();
          }
        }, 500);
      }
      // 花名册
      if(s.activeIndex === 4) {
        var shake = document.querySelector('#pageList .animated');
        shake.classList.add('tada');
      }
  });

  document.querySelector('body').addEventListener('touchend', function(e){
    if(e.target.classList.contains('btn-download')) {
      location.href = 'download.html';
    }
  }, false);
})();