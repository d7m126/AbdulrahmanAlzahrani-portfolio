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

const translations = {
  en: {
    switchTheme: "Switch Theme",

    home: "Home",
    experience: "Experience",
    projects: "Projects",

    cardTitle: "Computer Science Graduate",
    cardAbout:
      "IT guy who wants to be something important in the future",

    currently: "Currently:",
    traineeRole: "Web Developer Trainee at",

    contact: "Contact",

    homeTitle: "Abdulrahman Alzahrani",

    homeDescription:
      "Computer Science graduate with a solid foundation in Web development. Seeking a position to apply programming and problem-solving skills while contributing to innovative projects. Eager to grow in the software development field and embrace new challenges to enhance expertise.",

    experienceTitle: "Work Experience",

    analystTitle: "Product Analyst",
    analystDate: "2025 Jun → Jul. Tarqeem, Riyadh",
    analystDesc:
      "Leveraging data insights to drive product development and enhance user experience.",

    supportTitle: "IT Support",
    supportDate: "2025 Dec → Jan. Snood Hotels, Mecca",
    supportDesc:
      "Providing technical support to end users and implementing IT solutions to improve workflow efficiency and business operations.",

    developerTitle: "Software Developer",
    developerDate: "2026 Oct → Mar. XEON, Dammam",
    developerDesc:
      "Building innovative web applications that solve real-world problems, improve user experiences, and deliver meaningful value to businesses and communities.",

    projectsTitle: "Projects",

    project1Title: "Project Name",
    project1Desc: "Some key points",

    project2Title: "Project Name",
    project2Desc: "Some key points",

    project3Title: "Project Name",
    project3Desc: "Some key points"
  },

  ar: {
    switchTheme: "تغيير المظهر",

    home: "الرئيسية",
    experience: "الخبرات",
    projects: "المشاريع",

    cardTitle: "خريج علوم الحاسب",
    cardAbout:
      "متخصص تقنية معلومات يطمح إلى تحقيق إنجازات مؤثرة في المستقبل",

    currently: "حالياً:",
    traineeRole: "متدرب تطوير ويب في",

    contact: "تواصل",

    homeTitle: "عبدالرحمن الزهراني",

    homeDescription:
      "خريج علوم حاسب يمتلك أساساً قوياً في تطوير الويب. أبحث عن فرصة لتطبيق مهارات البرمجة وحل المشكلات والمساهمة في المشاريع المبتكرة. أسعى إلى النمو في مجال تطوير البرمجيات ومواجهة تحديات جديدة لتطوير خبراتي المهنية.",

    experienceTitle: "الخبرات العملية",

    analystTitle: "محلل منتجات",
    analystDate: "يونيو 2025 → يوليو 2025، ترقيم - الرياض",
    analystDesc:
      "استخدام تحليلات البيانات لدعم تطوير المنتجات وتحسين تجربة المستخدم.",

    supportTitle: "دعم تقنية المعلومات",
    supportDate: "ديسمبر 2025 → يناير 2025، فنادق سنود - مكة",
    supportDesc:
      "تقديم الدعم التقني للمستخدمين وتنفيذ حلول تقنية لتحسين كفاءة العمل والعمليات التشغيلية.",

    developerTitle: "مطور برمجيات",
    developerDate: "أكتوبر 2026 → مارس 2026، XEON - الدمام",
    developerDesc:
      "تطوير تطبيقات ويب مبتكرة تحل مشكلات واقعية وتحسن تجربة المستخدم وتقدم قيمة حقيقية للأعمال والمجتمع.",

    projectsTitle: "المشاريع",

    project1Title: "اسم المشروع",
    project1Desc: "أهم النقاط",

    project2Title: "اسم المشروع",
    project2Desc: "أهم النقاط",

    project3Title: "اسم المشروع",
    project3Desc: "أهم النقاط"
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.dataset.lang;

    if (!dictionary[key]) return;

    if (
      element.tagName === "INPUT" ||
      element.tagName === "BUTTON"
    ) {
      if (element.tagName === "INPUT") {
        element.value = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    } else {
      element.textContent = dictionary[key];
    }
  });
}

const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

window.addEventListener("scroll", scrollTracker);
window.addEventListener("resize", scrollTracker);


