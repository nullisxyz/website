// static/js/theme.js
(function () {
  // Theme toggle functionality
  function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme-preference", newTheme);

    // Update all theme toggle buttons
    document.querySelectorAll(".c-theme-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", newTheme === "dark");
    });
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme-preference");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", theme);

    // Initialize all theme toggle buttons
    document.querySelectorAll(".c-theme-toggle").forEach((button) => {
      button.setAttribute("aria-pressed", theme === "dark");
    });
  }

  // Add click handlers to theme toggle buttons
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll(".c-theme-toggle");

    themeToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        toggleTheme();
      });
    });

    // Initialize theme
    initializeTheme();
  });

  // Watch for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme-preference")) {
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);

        // Update toggle buttons
        document.querySelectorAll(".c-theme-toggle").forEach((button) => {
          button.setAttribute("aria-pressed", newTheme === "dark");
        });
      }
    });
})();
