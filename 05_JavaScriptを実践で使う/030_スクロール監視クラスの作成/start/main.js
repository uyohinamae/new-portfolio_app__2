document.addEventListener('DOMContentLoaded', function () {

    
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
   
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultptions  = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this._init();
    }
    _init() {
    const callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // const ta = new TextAnimation(entry.target);
                // ta.animate();

                this.cb(entry.target);
                observer.unobserve(entry.target);
            } else {
            }
        });
    };
    const io = new IntersectionObserver(callback, this.options);
    els.forEach(el => io.observe(el));
  }
}   