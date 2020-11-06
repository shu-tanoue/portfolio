var trigger1 = document.getElementById("one");
var trigger2 = document.getElementById("two");
var trigger3 = document.getElementById("three");
var trigger4 = document.getElementById("four");

var trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
var trigger2Y = trigger2.getBoundingClientRect().top;
var trigger3Y = trigger3.getBoundingClientRect().top;
var trigger4Y = trigger4.getBoundingClientRect().top;

// 白背景の時はbodyの.bg-is-blackを削除
// 黒背景の時はbodyに.bt-is-blackを付与
if (trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
  body.classList.remove("bg-is-black");
} else if (trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
  body.classList.remove("bg-is-black");
} else {
  body.classList.add("bg-is-black");
}

window.addEventListener("scroll", changeColor);
