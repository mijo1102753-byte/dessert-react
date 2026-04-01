const reveal = () => {
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY + window.innerHeight / 2;

    let bannerTop = document.querySelector(".banner_inner").offsetTop;

    if (scrollTop >= bannerTop) {
      document.querySelector(".banner_inner").classList.add("active");
    }
  });
};
export default reveal;
