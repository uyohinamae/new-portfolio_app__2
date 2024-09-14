document.addEventListener('DOMContentLoaded' , function() {
    const hero = new HeroSlider('.swiper');
    hero.start()


    const ta = new TweenTextAnimation('.tween-animate-title')
    ta.animate();
});