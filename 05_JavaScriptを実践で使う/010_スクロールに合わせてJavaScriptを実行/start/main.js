const child = document.querySelector('.child');
const cb = function(entries, observer) {
       entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview');
            entry.terget.classList.add('inview')
            // observer.unobserve(entry.target);
        } else {
            console.log('out vieww')
            entry.terget.classList.add('inview')
        }
       });

    // alert('intersecting');
const options = {
    root: null,
    rootMargin: "-100px 0px ",
    threshold: [0, 0.5, 1]
};
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);