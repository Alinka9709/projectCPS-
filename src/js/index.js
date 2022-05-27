import '../scss/fonts.scss'
import '../scss/brand.scss'
import '../scss/style.scss'
import '../scss/burger.scss'
import '../scss/menu.scss'
import '../scss/main.scss'
import '../scss/header.scss'
import '../scss/nullStyle.scss'
import '../scss/swiper.scss'
import '../scss/footer.scss'
import '../scss/repair.scss'
import '../scss/price.scss'
import '../scss/ofers.scss'
import '../scss/color.scss'
import '../scss/modalFeedback.scss'
import '../scss/modalCall.scss'
import '../js/modal'

var swiper = new Swiper('.brand__slider-container', {   
    
  slidesPerView: 4,    
 spaceBetween: 40,   

  breakpoints: {   
 
 
     320: {        
       slidesPerView: 1, 
       spaceBetween: 1      
    },     

     480: {        
       slidesPerView: 2,        
       spaceBetween: 20      
    },    

   
     768: {        
       slidesPerView: 0,        
       spaceBetween: 0      
    },
    1120: {        
     slidesPerView: 0,        
     spaceBetween: 0      
  } 

 }
})

const breakpoint = window.matchMedia('(min-width:700px)');

let mySwiper;

const breakpointChecker = function () {
if (breakpoint.matches) {
  if (mySwiper) {
    mySwiper.destroy(true, true);
  }
} else {
  return enableSwiper();
}
};

const enableSwiper = function () {
mySwiper = new Swiper('.brand__slider-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
};

breakpoint.addEventListener('change', breakpointChecker);

breakpointChecker();




var swiper2 = new Swiper('.repair__slider-container', {   
  // Параметры по умолчанию   
   slidesPerView: 4,    
  spaceBetween: 40,   
  // Адаптивные точки останова   
   breakpoints: {   
  
  //    когда ширина окна <= 320px     
      320: {        
        slidesPerView: 2, 
        spaceBetween: 2      
     },     
  //    при ширине окна <= 480px     
      480: {        
        slidesPerView: 2,        
        spaceBetween: 20      
     },    
 
    
      768: {        
        slidesPerView: 4,        
        spaceBetween: 1      
     },
     1120: {        
      slidesPerView: 5,        
      spaceBetween: 1      
   } 
 
  }
})

const breakpoint2 = window.matchMedia('(min-width:700px)');

let mySwiper2;

const breakpointChecker2 = function () {
 if (breakpoint2.matches) {
   if (mySwiper2) {
     mySwiper2.destroy(true, true);
   }
 } else {
   return enableSwiper2();
 }
};

const enableSwiper2 = function () {
 mySwiper2 = new Swiper('.repair__slider-container', {
   loop: true,
   slidesPerView: 'auto',
   spaceBetween: 16,
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: true,
   },
 });
};


breakpoint2.addEventListener('change', breakpointChecker2);

breakpointChecker2();



new Swiper('.prices-container ',{
    loop: true,
    slidesPerView: "auto",
 
    pagination: {
           el: '.swiper-pagination',
           type: 'bullets',
           clickable: true,
         },
  });




let button = document.querySelector('.brand-btn');

button.addEventListener('click',()=>{

let item = document.querySelectorAll('.brand__slider--hidden');
let content = document.querySelector('.brand_btn-disc');
let img = document.querySelector('.brand_btn-img');

for (let i = 0;i < item.length;i++) {
item[i].classList.toggle('brand__slider--visible');

if(item[i].classList.contains('brand__slider--visible')){
 content.textContent = "Скрыть";
} else {
 content.textContent = "Показать всё"; 
}
img.classList.toggle('brand__btn-img--rotate');
}
});

let btn = document.querySelector('.repair__btn');
 
   btn.addEventListener('click',()=>{

let rep = document.querySelectorAll('.repair__slider--hidden');
let disc = document.querySelector('.repair__btn-disc');
let image = document.querySelector('.repair__btn-img');

for (let i = 0;i < rep.length;i++) {
rep[i].classList.toggle('repair__slider--visible');

if(rep[i].classList.contains('repair__slider--visible')){
    disc.textContent = "Скрыть";
} else {
    disc.textContent = "Показать всё"; 
}
image.classList.toggle('repair__btn-img--rotate');
}
});



