const sections = document.querySelectorAll("section[id].content");

function scrollTracker() {
  const navHeight = document.querySelector("nav")?.offsetHeight || 0;
  const currentYScroll = window.scrollY + navHeight ;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const id = section.getAttribute("id");

    const currentNavLink = document.querySelector(
      `.navbar a[href="#${id}"]`
    );

    if (!currentNavLink) return;

    const currentliNavLink = currentNavLink.parentElement;

    if (
      currentYScroll >= sectionTop &&
      currentYScroll < sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
      currentliNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
      currentliNavLink.classList.remove("active");
    }
  });
}

function intsidebarnav() {
  const button = document.querySelector(".sidebarnav-btn");
  const sidebarnav = document.querySelectorAll(".nav-group");

  if (button && sidebarnav.length > 0) {
    button.addEventListener("click", () => {
      sidebarnav.forEach((group) => {
        group.classList.toggle("active-style");
      });
    });
  }
}

document.querySelectorAll('.navbar a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    const navHeight =
      document.querySelector("nav")?.offsetHeight || 0;

    window.scrollTo({
      top: target.offsetTop - navHeight +60,
      behavior: "smooth",
    });
  });
});

intsidebarnav();
scrollTracker();
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-group").forEach((group) => {
      group.classList.remove("active-style");
    });
  });
});

const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

toggleBtn.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});


window.addEventListener("scroll", scrollTracker);
window.addEventListener("resize", scrollTracker);