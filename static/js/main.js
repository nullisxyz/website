document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const menuButton = document.querySelector(".c-header__menu-button");
  const nav = document.querySelector(".c-header__nav");
  const header = document.querySelector(".c-header");
  let isMenuOpen = false;

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;

      // Update button state
      menuButton.setAttribute("aria-expanded", String(isMenuOpen));
      menuButton.classList.toggle("is-active", isMenuOpen);

      // Update nav visibility
      nav.classList.toggle("is-visible", isMenuOpen);

      // Add class to header for background
      header.classList.toggle("has-open-nav", isMenuOpen);

      // Prevent body scrolling when menu is open
      document.body.style.overflow = isMenuOpen ? "hidden" : "";
    });

    // Handle dropdown menus in navigation
    const dropdownToggles = nav.querySelectorAll(".c-nav__dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = toggle.closest(".c-nav__dropdown");

        // Close other open dropdowns
        dropdownToggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.closest(".c-nav__dropdown").classList.remove("is-open");
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle("is-open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        isMenuOpen &&
        !nav.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        isMenuOpen = false;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("is-active");
        nav.classList.remove("is-visible");
        header.classList.remove("has-open-nav");
        document.body.style.overflow = "";
      }
    });

    // Close menu when screen size changes to desktop
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(() => {
      if (mediaQuery.matches && isMenuOpen) {
        isMenuOpen = false;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.classList.remove("is-active");
        nav.classList.remove("is-visible");
        header.classList.remove("has-open-nav");
        document.body.style.overflow = "";
      }
    });
  }
});
