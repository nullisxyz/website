// website/static/js/projects.js

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-category]");

  // Add click handlers to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      // Add active class to clicked button
      button.classList.add("is-active");

      const filterValue = button.getAttribute("data-filter");

      // Filter the project cards
      filterProjects(filterValue);
    });
  });

  function filterProjects(category) {
    projectCards.forEach((card) => {
      // If "all" is selected or the card's category matches the filter
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        // Show the card with animation
        showCard(card);
      } else {
        // Hide the card with animation
        hideCard(card);
      }
    });
  }

  function showCard(card) {
    // First make sure the card is displayed
    card.style.display = "block";

    // Add animation classes
    card.classList.remove("c-card--animate-out");
    card.classList.add("c-card--animate-in");

    // Remove any leftover opacity
    setTimeout(() => {
      card.style.opacity = "1";
    }, 10);
  }

  function hideCard(card) {
    // Add animation classes
    card.classList.remove("c-card--animate-in");
    card.classList.add("c-card--animate-out");

    // After animation completes, hide the card
    card.addEventListener("animationend", function handler() {
      card.style.display = "none";
      card.removeEventListener("animationend", handler);
    });
  }
});
