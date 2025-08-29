const marqueeWrappers = document.querySelectorAll(".marquee-wrapper");

function fillMarquee(marquee) {
  const marqueeWidth = marquee.offsetWidth;
  const firstMarqueeItem = marquee.firstElementChild;
  let totalWidth = firstMarqueeItem.offsetWidth;

  if (totalWidth <= marqueeWidth * 2 || firstMarqueeItem === marquee.lastElementChild) {
    while (true) {
      const newMarqueeItem = document.createElement("div");
      newMarqueeItem.classList.add("marquee-item");

      newMarqueeItem.innerHTML = firstMarqueeItem.innerHTML;
      marquee.append(newMarqueeItem);
      totalWidth += newMarqueeItem.offsetWidth;

      if (totalWidth > marqueeWidth * 2) {
        break;
      }
    }
  }

  const newMarqueeItem = document.createElement("div");
  newMarqueeItem.classList.add("marquee-item");

  newMarqueeItem.innerHTML = firstMarqueeItem.innerHTML;
  marquee.append(newMarqueeItem);

}

document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    for (let marqueeWrapper of marqueeWrappers) {
      fillMarquee(marqueeWrapper);
      marqueeWrapper.classList.add("ready")

      window.addEventListener("resize", () => {
        fillMarquee(marqueeWrapper);
      })
    }
  }
});

document.getElementById("open-menu").addEventListener("click", () => {
  document.querySelector(".backdrop").classList.remove("backdrop-hidden");
  document.querySelector(".mobile-menu").classList.remove("mobile-menu-hidden");
});

document.getElementById("close-menu").addEventListener("click", () => {
  document.querySelector(".backdrop").classList.add("backdrop-hidden");
  document.querySelector(".mobile-menu").classList.add("mobile-menu-hidden");
});

window.addEventListener("resize", () => {
  if (innerWidth >= 992) {
    document.querySelector(".backdrop").classList.add("backdrop-hidden");
    document.querySelector(".mobile-menu").classList.add("mobile-menu-hidden");
  }
})