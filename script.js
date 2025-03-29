const typed = new Typed(".typing", {
  strings: ["Hello , I'm Ahmed"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

function updateAosForMobile() {
  if (window.innerWidth <= 376) {
    // تحقق من عرض الشاشة
    const elements = document.querySelectorAll('[data-aos="fade-left"]'); // حدد العناصر التي لديها fade-left
    elements.forEach((element) => {
      element.setAttribute("data-aos", "fade-right"); // غيرها إلى fade-right
    });
  }
}

// استدعاء الدالة عند تحميل الصفحة وعند تغيير حجم النافذة
window.addEventListener("load", updateAosForMobile);
window.addEventListener("resize", updateAosForMobile);
document.querySelectorAll(".preview-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    document.getElementById("preview-iframe").src = url;
    document.getElementById("preview-container").style.display = "block";
  });
});
document.getElementById("close-preview").addEventListener("click", () => {
  document.getElementById("preview-container").style.display = "none";
  document.getElementById("preview-iframe").src = "";
});
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navigation a");

  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
