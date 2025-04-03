// ✅ Your Way Services | JavaScript Enhancements
document.addEventListener("DOMContentLoaded", () => {
  console.log("Your Way Services site loaded.");

  // Animate waste cards when they enter the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.waste-animate').forEach((el) => {
    observer.observe(el);
  });
});
