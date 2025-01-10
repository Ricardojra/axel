document.addEventListener("DOMContentLoaded", function() {
  // Selecione a seção sobre
  const sobreSection = document.querySelector("#sobre");

  // Função de callback do Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quando a seção "Sobre" entrar na tela, adiciona a classe animate
        sobreSection.classList.add("animate");
        // Para de observar depois que a animação for ativada
        observer.unobserve(entry.target);
      }
    });
  };

  // Configuração do Intersection Observer
  const observerOptions = {
    root: null, // Observa a janela de visualização
    threshold: 0.3, // Quando 30% da seção estiver visível
  };

  // Criando o Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Inicia a observação da seção "Sobre"
  observer.observe(sobreSection);
});
