<script>
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navbar = document.querySelector(".navbar");
  const revealItems = Array.from(document.querySelectorAll(".sv-reveal, .terminal-reveal, .reveal-block, .module-card, .record-card, .work-entry, .blog-card, .skill-card, .media-card, .detail-item"));

  document.body.classList.add("portfolio-loaded");

  const updateNavbar = () => {
    if (!navbar) return;
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 18);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("reveal-ready"));
  } else {
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 5, 4) * 55}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-ready");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
});
</script>
