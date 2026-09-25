/* KOGG MEDIA — site behaviour (nav, reveal, year) */
(function(){
  /* Nav background on scroll */
  var nav = document.getElementById('nav');
  function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* Mobile menu */
  var burger = document.getElementById('navBurger');
  var menu   = document.getElementById('navMenu');
  if(burger && menu){
    burger.addEventListener('click', function(){
      menu.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  /* Scroll reveals */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.16});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* Year */
  document.querySelectorAll('.js-year').forEach(function(el){
    el.textContent = new Date().getFullYear();
  });
})();
