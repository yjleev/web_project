let scrollTop = 0;
let bar;

window.onload = function () {
    bar = document.querySelector('.scroll-bar');
};

window.addEventListener('scroll',() => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.round(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
    },false
);

const link = document.querySelectorAll('.link');

link.forEach((navItem, index) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();

        const section = document.querySelector(navItem.getAttribute('href'));
        const sectionOffsetTop = section.offsetTop;

        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth'
        });
    });
});