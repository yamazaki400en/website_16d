window.addEventListener("load", () => {
  // boxをすべて取得
  const boxes = document.querySelectorAll(".box");
  // scrollイベントをセット
  window.addEventListener("scroll", showBoxes);
  // ロードのタイミングで一度発火
  showBoxes();

  function showBoxes() {
    // 発火位置
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      // boxの頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});

let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let yo = document.querySelector("#yo");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};

yo.mouseover = () => {
    nav.classList.toggle("open");
};

yo.mouseleave = () => {
    nav.classList.toggle("open");
};