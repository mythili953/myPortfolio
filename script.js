document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll(".nav-links a");
  const navbar = document.querySelector(".navbar"); // Select your navbar element
  const landingSection = document.querySelector(".hero"); // Select your landing section
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav-links");

  // Hamburger menu functionality
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });

    // Debugging logs
    console.log("ScrollY:", window.scrollY);
    console.log("Landing section height:", landingSection.offsetHeight);

    // Add solid background to navbar after scrolling past landing section
    if (window.scrollY > landingSection.offsetHeight - 50) {
      console.log("Adding solid background");
      navbar.classList.add("solid-background");
    } else {
      console.log("Removing solid background");
      navbar.classList.remove("solid-background");
    }
  });
});
