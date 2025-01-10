function toggleMenu() {
  const menu = document.querySelector(".navigation");
  const hamburger = document.querySelector(".hamburger-menu");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Alterna entre mostrar o "hamburger" e "X" ao clicar
  if (hamburger.classList.contains("active")) {
    // Exibe o "X"
    hamburger.innerHTML = `
      <span class="bar" style="transform: rotate(45deg); position: absolute; top: 0;"></span>
      <span class="bar" style="opacity: 0;"></span>
      <span class="bar" style="transform: rotate(-45deg); position: absolute; top: 0;"></span>
    `;
  } else {
    // Exibe as barras do "hamburger" novamente
    hamburger.innerHTML = `
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    `;
  }
}
