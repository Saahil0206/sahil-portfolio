<script>
document.addEventListener("DOMContentLoaded", () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealSelectors = [
    ".hero",
    ".section",
    ".page-title",
    ".content-page",
    ".contact-wrap",
    ".portfolio-card",
    ".skill-card",
    ".media-card",
    ".blog-card",
    ".info-card",
    ".profile-panel",
    ".quarto-grid-item"
  ];

  const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(",")));

  document.body.classList.add("portfolio-loaded");

  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach((item) => observer.observe(item));
});
</script>
