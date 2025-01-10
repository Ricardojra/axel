document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".banner-container");

  // Auto-scroll logic
  let autoScrollInterval = setInterval(() => {
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
    if (
      Math.abs(
        container.scrollLeft - (container.scrollWidth - container.clientWidth)
      ) < 1
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 5000); // Adjust interval as needed

  // Pause auto-scroll on hover
  container.addEventListener("mouseenter", () =>
    clearInterval(autoScrollInterval)
  );
  container.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      if (
        Math.abs(
          container.scrollLeft - (container.scrollWidth - container.clientWidth)
        ) < 1
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000);
  });
});
