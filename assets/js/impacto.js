document.addEventListener("DOMContentLoaded", () => {
  const valores = {
    carbono: {
      metal: 2361.15 * 1.8,
      papel: 1408.88 * 0.9,
      plastico: 73.7 * 1.2,
    },
    energia: {
      metal: 2361.15 * 2.5,
      papel: 1408.88 * 1.5,
      plastico: 73.7 * 2.0,
    },
    arvores: {
      papel: 1408.88 * 17,
    },
    agua: {
      metal: 2361.15 * 5000,
      papel: 1408.88 * 30000,
      plastico: 73.7 * 2000,
    },
    minerio: {
      ferro: 2361.15 * 308,
      bauxita: 1408.88 * 50,
    },
    petroleo: {
      plastico: 73.7 * 0.1,
    },
  };

  // Calcula os totais
  const totalCarbono = (
    valores.carbono.metal +
    valores.carbono.papel +
    valores.carbono.plastico
  ).toFixed(2);
  const totalEnergia = (
    valores.energia.metal +
    valores.energia.papel +
    valores.energia.plastico
  ).toFixed(2);
  const totalArvores = valores.arvores.papel.toFixed(0);
  const totalAgua = (
    valores.agua.metal +
    valores.agua.papel +
    valores.agua.plastico
  ).toFixed(2);
  const totalMinerio = (
    valores.minerio.ferro + valores.minerio.bauxita
  ).toFixed(2);
  const totalPetroleo = valores.petroleo.plastico.toFixed(2);

  // Atualiza os valores no HTML
  document.getElementById("carbono").textContent = `${totalCarbono} tCO2e`;
  document.getElementById("energia").textContent = `${formatarNumero(
    totalEnergia
  )} MWh`;
  document.getElementById("arvores").textContent = `${formatarNumero(
    totalArvores
  )} unidades`;
  document.getElementById("agua").textContent = `${formatarNumero(
    totalAgua
  )} litros`;
  document.getElementById("ferro").textContent = `${formatarNumero(
    valores.minerio.ferro.toFixed(2)
  )} Kg`;
  document.getElementById("bauxita").textContent = `${formatarNumero(
    valores.minerio.bauxita.toFixed(2)
  )} Kg`;
  document.getElementById("petroleo").textContent = `${totalPetroleo} barris`;

  // Função para formatar números com separadores de milhar
  function formatarNumero(numero) {
    return Number(numero).toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }


  // Animação para a barra de progresso

  const barra = document.getElementById("barra");
  const barraTexto = document.getElementById("barra-texto"); // Elemento para mostrar o texto da barra
  const regua = document.getElementById("regua"); // Elemento da régua para mostrar as toneladas
  const reguaTexto = document.getElementById("regua-texto"); // Elemento que exibirá as toneladas na régua
  let progresso = 0;
  const totalReciclado = 5000; // O total final é 5000
  const incremento = 5000 / 100; // Para completar 100%, precisamos de 5000
  const progressoFinal = 5000; // O valor máximo que queremos para a barra

  function animarBarra() {
    if (progresso < progressoFinal) {
      progresso += incremento; // Incremento de toneladas
      const percentual = (progresso / progressoFinal) * 100; // Cálculo de porcentagem
      barra.style.width = `${Math.min(percentual, 100)}%`; // Atualiza a largura da barra
      barraTexto.textContent = `${Math.min(percentual, 100).toFixed(2)}%`; // Exibe a porcentagem dentro da barra
      atualizarRegua(progresso); // Atualiza a régua de toneladas
      requestAnimationFrame(animarBarra);
    }
  }

  function atualizarRegua(toneladas) {
    // A régua vai mostrar as toneladas alcançadas de forma proporcional
    const toneladasPercentual = (toneladas / progressoFinal) * 100;
    regua.style.width = `${toneladasPercentual}%`; // Atualiza o preenchimento da régua
    reguaTexto.textContent = `${toneladas.toFixed(2)} toneladas`; // Exibe as toneladas alcançadas
  }

  animarBarra();
});

document.addEventListener("DOMContentLoaded", () => {
  const total = 3850; // Total de toneladas
  const progresso = 3844.; // Toneladas recicladas

  const barra = document.getElementById("preenchimento");
  const texto = document.getElementById("texto");
  const marcador = document.getElementById("marcador");

  const percentual = (progresso / total) * 100;
  barra.style.width = `${percentual}%`;
  texto.textContent = `${percentual.toFixed(2)}%`;
  marcador.textContent = `${progresso} toneladas`;
});

