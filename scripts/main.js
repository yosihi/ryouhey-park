'use scrict' 
{
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.loading').classList.add('hidden');
    }, 5000);
  });



  const button = document.querySelector('button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bgMenu = document.querySelector('.bg-menu');

  function ck(ev) {
    ev.addEventListener('click', () => {
      mobileMenu.classList.toggle('menu-open');
      bgMenu.classList.toggle('menu-open');
    });
  }

  ck(button);
  ck(mobileMenu);
  
  const hero = new HeroSlider('.swiper');
  hero.start();


  const els = document.querySelectorAll('.fade-in');
  
  function cb(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('inview');
      }
    });
  }

  const io = new IntersectionObserver(cb);
  els.forEach(el => {
    io.observe(el);
  })
  
}