 /* ---------- toggle js code  -------------- */

$(document).ready(function(){
  $('.toggle').click(function(){
      $('.toggle').toggleClass('active')
      $('.overlay').toggleClass('active')
      $('.menu').toggleClass('active')
  })
})

/* ---------- main Slide event  -------------- */

$('#carouselFade').carousel({interval:3000});

/* ---------- phone slide  -------------- */

$(document).ready(function () {
$(".slider").slider();
});

/* ---------- mainSlider4 dropdown   -------------- */

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
$(this).parent(".sub-menu").children("ul").slideToggle("100");
$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

/* ---------- mainSlider4 dropdown end  -------------- */

/* --------------------main3Txt change--------------------- */

let btnAudio = document.querySelector('#btnAudio');
let btnParty = document.querySelector('#btnParty');
let btnBook = document.querySelector('#btnBook');
let main3TxtH3 = document.querySelector('.main3TxtH3');
let main3TxtIcon = document.querySelectorAll('#main3TxtIcon');
let main3P1 = document.querySelector('.main3P1');
let main3P2 = document.querySelector('.main3P2');
let main3P3 = document.querySelector('.main3P3');
let main3P4 = document.querySelector('.main3P4');

btnAudio.addEventListener('click', () => {
main3TxtIcon.getElementsByClassName = ".fa-headphones-alt";
main3TxtH3.innerText = '오디오북';
main3P1.innerText = '세상에서 가장';
main3P2.innerText = '교양있는 수면제';
main3P3.innerText = '하루의 시작과 끝을 오디오북과 함께';
main3P4.innerText = '지하철에서도, 잠들기 전까지 오디오북과 함께해요';
})
btnParty.addEventListener('click', () => {
  main3TxtIcon.getElementsByClassName = ".fa-glass-cheers";
main3TxtH3.innerText = '독서미식회';
main3P1.innerText = '입과 마음이 즐거운';
main3P2.innerText = '올마이북스 미식회';
main3P3.innerText = '다양한 사람들과 만나 교류해보세요';
main3P4.innerText = '새로운 인연으로 새로운 경험을 만들어 나가세요';
})
btnBook.addEventListener('click', () => {
  main3TxtIcon.getElementsByClassName = ".fa-headphones-alt";
main3TxtH3.innerText = '독서인증';
main3P1.innerText = '지금 바로 책과 함께';
main3P2.innerText = 'SNS에 공유해주세요';
main3P3.innerText = '좋았던 부분을 함께 공유한다면';
main3P4.innerText = '조금 더 우리 삶에 책이 가까워질거예요';
})

/* btnAudio.removeEventListener('click', () => {
  main3TxtIcon.getElementsByClassName = ".fa-headphones-alt";
})
 */

document.addEventListener('#main3TxtIcon', function () {
  $('#btnAudio').on('click', function () {
    $(this)
      .find('[data-fa-i2svg]')
      .toggleClass('fa-headphones-alt')
      .toggleClass('fa-glass-cheers');
    });
  });


/* --------------Swiper Phone Slider---------------- */

const swiper = new Swiper('.swiper-container', {
// Optional parameters
direction: 'vertical',
loop: true,

// If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
});
