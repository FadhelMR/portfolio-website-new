const marquee = document.getElementById("marquee");
const text = ` |  Instagram: https://www.instagram.com/fadhelmr123/  |  Gmail: fadhelmr1710@gmail.com  |  Linkedin: https://www.linkedin.com/in/fadhel-muhammad-ramadhan-568418376/  |  Github: https://github.com/FadhelMR  `;

marquee.innerHTML = `<span>${text.repeat(12)}</span>`;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scrollTop / height) * 100;

  document.getElementById("scroll-indicator").style.width = scrolled + "%";
});
