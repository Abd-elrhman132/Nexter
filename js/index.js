document.addEventListener("DOMContentLoaded", function () {
  // --- SECTION REVEAL ANIMATION ---
  const allSections = document.querySelectorAll(
    ".features, .story__pictures, .story__content, .homes, .gallery, .realtors"
  );

  const revealSection = function (entries, observer) {
    entries.forEach((entry) => {
      // Only trigger if intersecting and moving DOWN into view (or already in view)
      if (entry.isIntersecting) {
        entry.target.classList.add("section-reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1, // Lower threshold for earlier reveal
  });

  allSections.forEach(function (section) {
    section.classList.add("section-reveal");
    sectionObserver.observe(section);
  });

  // --- MODERN NAVIGATION INTERACTION ---
  const navLinks = document.querySelectorAll(".navigation__link, .nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (!id || id === "#" || !id.startsWith("#")) return;

      e.preventDefault();
      const targetElement = document.querySelector(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile nav if open
      const navToggle = document.getElementById("navi-toggle");
      if (navToggle) navToggle.checked = false;
    });
  });
});
