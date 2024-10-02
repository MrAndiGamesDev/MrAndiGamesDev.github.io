function AutoSmoothScroll(Anchor){
    Anchor.addEventListener('click', function (eeeeee) {
        eeeeee.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(Anchor => {
    AutoSmoothScroll(Anchor)
});