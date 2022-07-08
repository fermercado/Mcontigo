const activeMenu = document.querySelector(".menu__open--button");
const activeSearch = document.querySelector(".search__img ");
const menu = document.querySelector(".menu__options ");
const menuOptions = document.querySelectorAll("body a");
const section = document.querySelectorAll("section , main");
const newsletter = document.querySelector(".modal__newsletter");
const bodyModal = document.querySelector("body");
const sectionModal = document.querySelectorAll("section");
const newsletterClose = document.querySelector(
  ".modal__newsletter--close i"
);

function menuFunctions() {
  activeMenu.addEventListener("click", () => {
    menu.classList.toggle("activeMenu");
    activeMenu.classList.toggle("activeMenu");
    activeSearch.classList.toggle("activeMenu");
    menu.classList.add("closeMenuSlide");
  });
  activeSearch.addEventListener("click", () => {
    menu.classList.toggle("activeMenu");
    activeSearch.classList.toggle("activeMenu");
    activeMenu.classList.toggle("activeMenu");
    menu.classList.add("closeMenuSlide");
  });

  menuOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
    });
  });
  section.forEach((section) => {
    section.addEventListener("click", () => {
      closeMenu();
      menu.classList.remove("closeMenuSlide");
    });
  });

  function closeMenu() {
    menu.classList.remove("activeMenu");
    activeMenu.classList.remove("activeMenu");
    menu.classList.add("closeMenuSlide");
  }
}
menuFunctions();

function initScrollSmooth() {
  const links = document.querySelectorAll('.menu__options a[href^="#"]');

  function scrollToSection(event) {
    const href = event.currentTarget.getAttribute("href");
    const sections = document.querySelector(href);
    const top = sections.offsetTop;

    window.scrollTo({
      top: top - 50,
      behavior: "smooth",
    });
  }
  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSmooth();
let index = 0;
function slideAuto() {
  const slides = document.querySelectorAll('.slide');
  console.log(slides);
  

  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  slides.forEach((item) => {
    item.classList.remove("activeSlide");
  });

  slides[index].classList.add("activeSlide");
}

setInterval(slideAuto,3000)





function initAccordion() {
  const accordionList = document.querySelectorAll(".faq dt");

  if (accordionList.length) {
    accordionList[0].classList.add("faq-active");
    accordionList[0].nextElementSibling.classList.add("faq-active");
    function activeAccordion() {
      this.classList.toggle("faq-active");
      this.nextElementSibling.classList.toggle("faq-active");
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function newsletterModal() {
  const windowTop = window.pageYOffset;

  if (windowTop > 800) {
    newsletter.classList.add("activeNewsLetter");
  }
}

window.addEventListener("scroll", newsletterModal);

function closeModal() {
   
  newsletterClose.addEventListener("click", () => {
    const teste = document.querySelector('.activeNewsLetter')
    teste.style.display = 'none'
  });
}

closeModal();
