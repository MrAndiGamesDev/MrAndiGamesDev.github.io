function SmoothScroll(Anchor){
    Anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(Anchor => {
    SmoothScroll(Anchor)
});