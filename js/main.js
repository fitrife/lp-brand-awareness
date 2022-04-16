window.addEventListener("load", () => {
  /* ----------------------------
      page loader
  ------------------------------- */
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/* ----------------------------
    header menu
------------------------------- */
// $(window).on("scroll", function () {
//   if ($(window).scrollTop()) {
//     $("header").addClass("black");
//   } else {
//     $("header").removeClass("black");
//   }
// });
// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
// });

function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakpoint = 991;

  function toggleMenu() {
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  // close the menu by click outside of it
  backdrop.addEventListener("click", toggleMenu);

  function collapse() {
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
  }

  menu.addEventListener("click", (event) => {
    const { target } = event;

    if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakpoint) {
      // prevent default anchor click behavior
      event.preventDefault();

      // if menu already expanded, collapse it and exit
      if (target.parentElement.classList.contains("active")) {
        collapse();
        return;
      }

      // if not already expanded, run code below

      // collapse the other expanded menu item if exists
      if (menu.querySelector(".active")) {
        collapse();
      }

      // expand new menu-item
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
    }
  });

  // when resizing window
  window.addEventListener("resize", function () {
    if (this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")) {
      toggleMenu();
    }
    if (this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")) {
      collapse();
    }
  });
}
headerMenu();

/* ----------------------------
    gallery pop up
------------------------------- */
function galleryModal() {
  const galleryPreview = document.querySelector(".js-gallery");
  if (coursePreviewVideo) {
    // if element exist
    coursePreviewVideo.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play();
      this.querySelector(".js-course-preview-video").currentTime = 0;
    });

    coursePreviewVideo.addEventListener("hide.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause();
    });
  }
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
      const src = e.target.getAttribute("src");
      console.log(src);
    }
  });
}
galleryModal();
