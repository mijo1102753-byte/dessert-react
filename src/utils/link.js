const link = () => {
  document.querySelectorAll(".header_menu ul li a").forEach(function (li) {
    li.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
};

export default link;
