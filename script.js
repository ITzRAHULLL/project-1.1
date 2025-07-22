const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let clickCount = 0;

noBtn.addEventListener("mouseover", () => {
  clickCount++;
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noBtn.style.transform = `scale(${1 - clickCount * 0.05})`;
  boing.play();
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".content").style.opacity = "0";
  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 800);
});
