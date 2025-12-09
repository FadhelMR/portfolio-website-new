const marquee = document.getElementById("marquee");
const text = ` |  Instagram: https://www.instagram.com/fadhelmr123/  |  Gmail: fadhelmr1710@gmail.com  |  Linkedin: https://www.linkedin.com/in/fadhel-muhammad-ramadhan-568418376/  |  Github: https://github.com/FadhelMR  `;

marquee.innerHTML = `<span>${text.repeat(5)}</span>`;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scrollTop / height) * 100;

  document.getElementById("scroll-indicator").style.width = scrolled + "%";
});

// Detect Section Notification
const notif = document.getElementById("sectionNotif");
let lastSection = "";

function showNotif(text) {
  notif.textContent = text;
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2400); // muncul 2.4 detik
}

// Detect section on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      const current = sec.getAttribute("data-title");

      if (current && current !== lastSection) {
        showNotif(current);
        lastSection = current;
      }
    }
  });
});

// Notif saat pertama kali masuk website
window.addEventListener("load", () => {
  showNotif("Hi, welcome to my website");
});

function showAlert(type, message) {
  const notif = document.getElementById("notif");
  notif.className = "notif " + type + " show";
  notif.innerText = message;

  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}
