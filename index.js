var smoothPolyfill = require("smoothscroll-polyfill").polyfill;

module.exports = function() {
  smoothPolyfill();

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      var anchoredElement = document.querySelector(anchor.getAttribute("href"));
      anchoredElement.scrollIntoView({
        behavior: "smooth"
      });
      anchoredElement.focus();
    });
  });
};
