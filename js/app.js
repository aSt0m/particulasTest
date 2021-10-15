 /**Hamburguer menu */
 const ham = document.querySelector('.ham');
 const enlaces = document.querySelector('.enlaces-menu');
 const barras = document.querySelectorAll('.ham span');




 ham.addEventListener('click', () => {
     enlaces.classList.toggle('activado');
     barras.forEach(child => {
         child.classList.toggle('animado')});
     ham.classList.toggle('girar');  
 });

/** carrousel */
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 2,
      slideShadows: true,
    },
    autoplay: {
      delay: 5000,
    },
    mousewheel: {
      invert: true,
    },
   loop: true,
  });
  
