// static/js/theme.js
(function () {
  function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme-preference", newTheme);
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme-preference");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", theme);
  }

  // Run immediately
  initializeTheme();

  // Add toggle function to window for the onclick handler
  window.toggleTheme = toggleTheme;

  // Watch for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme-preference")) {
        document.documentElement.setAttribute(
          "data-theme",
          e.matches ? "dark" : "light",
        );
      }
    });
})();
