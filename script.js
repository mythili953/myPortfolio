document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    const navLinks = document.querySelectorAll(".nav-links a");
    const navbar = document.querySelector(".navbar"); // Select your navbar element
    const landingSection = document.querySelector(".hero"); // Select your landing section

    
  
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
        if (window.scrollY > landingSection.offsetHeight-50) {
            console.log("Adding solid background");
            navbar.classList.add("solid-background");
        } else {
            console.log("Removing solid background");
            navbar.classList.remove("solid-background");
        }
    });
});