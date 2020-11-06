/* Demo purposes only */
let snippet = [].slice.call(document.querySelectorAll(".hover"));
if (snippet.length) {
  snippet.forEach(function(snippet) {
    snippet.addEventListener("mouseout", function(event) {
      if (event.target.parentNode.tagName === "figure") {
        event.target.parentNode.classList.remove("hover");
      } else {
        event.target.parentNode.classList.remove("hover");
      }
    });
  });
}
