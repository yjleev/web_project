let scrollTop = 0;
let bar;

window.onload = function () {
    bar = document.querySelector('.scroll-bar');
};


window.addEventListener(
    "scroll",
    () => {
      scrollTop = document.documentElement.scrollTop; // y축 방향으로 얼만큼 스크롤했는지!
      let per = Math.ceil(
        (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
      );
      bar.style.width = per + "%";
    },
    false
);