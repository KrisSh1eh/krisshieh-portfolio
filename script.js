const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  });

  document.documentElement.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}


// Precision cursor with delayed ring, interactive hover state, and click particles.
const finePointer = window.matchMedia("(pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (finePointer.matches && !reducedMotion.matches) {
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let lastParticleAt = 0;

  const showCursor = () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  };

  const hideCursor = () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  };

  const createParticle = (x, y, distance = 22) => {
    const particle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const radius = distance * (0.45 + Math.random() * 0.75);
    particle.className = "cursor-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--particle-x", `${Math.cos(angle) * radius}px`);
    particle.style.setProperty("--particle-y", `${Math.sin(angle) * radius}px`);
    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  };

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    showCursor();

    const now = performance.now();
    if (now - lastParticleAt > 34 && Math.random() > 0.72) {
      createParticle(mouseX, mouseY, 10);
      lastParticleAt = now;
    }
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.17;
    ringY += (mouseY - ringY) * 0.17;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  document.querySelectorAll("a, button, .project-card, .gallery-item").forEach((element) => {
    element.addEventListener("mouseenter", () => ring.classList.add("is-hovering"));
    element.addEventListener("mouseleave", () => ring.classList.remove("is-hovering"));
  });

  window.addEventListener("mousedown", () => {
    ring.classList.add("is-clicking");
    for (let i = 0; i < 8; i += 1) createParticle(mouseX, mouseY, 30);
  });

  window.addEventListener("mouseup", () => {
    ring.classList.remove("is-clicking");
  });

  document.documentElement.addEventListener("mouseleave", hideCursor);
  document.documentElement.addEventListener("mouseenter", showCursor);
}
