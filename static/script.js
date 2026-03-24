// Cache elements once (better performance)
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Scroll handler
window.addEventListener("scroll", () => {
  revealOnScroll();
  updateActiveNav();
});

// Reveal elements on scroll (with toggle)
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

// Update active navbar link
function updateActiveNav() {
  let current = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const navHeight = document.querySelector(".navbar").offsetHeight;

    // Check if section top is above the navbar + 50px
    if (rect.top <= navHeight + 50 && rect.bottom >= navHeight + 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

const text = "Hi, I'm Thomas M Thomas!";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 55);
  }
}

type();

// Run once on page load (important!)
revealOnScroll();
updateActiveNav();