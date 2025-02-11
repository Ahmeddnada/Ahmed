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
