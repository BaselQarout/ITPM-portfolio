/*==========Typing Animation==========*/
var typed = new Typed(".typing", {
  strings: ["AI Student", "ML Practitioner"],
  typeSpeed: 90,
  BackSpeed: 55,
  loop: true,
});

/*==========Aside Navigation (Single-Page Sections)==========*/
const nav = document.querySelector(".nav");
const navList = nav ? nav.querySelectorAll("li") : [];
const allSection = document.querySelectorAll(".section");
const totalNavList = navList.length;
const totalSecton = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function (e) {
    e.preventDefault();

    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    // close nav on smaller screens
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSecton; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  if (allSection[num]) allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSecton; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  const targetEl = document.querySelector("#" + target);
  if (targetEl) targetEl.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerBtn) {
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
}

function asideSectionTogglerBtn() {
  if (!aside || !navTogglerBtn) return;
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSecton; i++) {
    allSection[i].classList.toggle("open");
  }
}
