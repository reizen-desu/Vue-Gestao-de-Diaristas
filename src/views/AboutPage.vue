<template>
  <div class="about-us">
    <section class="hero bg-primary text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Sobre a Amal Agency</h1>
        <p class="lead">
          Conectando profissionais domésticos qualificados com famílias que precisam de
          seus serviços
        </p>
      </div>
    </section>

    <section class="our-mission py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="mb-4">Nossa Missão</h2>
            <p>
              O sistema tem como objetivo tornar fácil a procura de uma diarista,
              economizando tempo das pessoas que precisam de serviços domésticos e criando
              oportunidades de trabalho para profissionais qualificados.
            </p>
            <p>
              Aqui você encontra perfis de diaristas que estão à procura de um lugar para
              realizar seus trabalhos, garantindo qualidade e confiança para ambas as
              partes.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/fundo.png" alt="Nossa Missão" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>

    <section class="services bg-light py-5" id="services">
      <div class="container">
        <h2 class="text-center mb-5">Serviços Oferecidos pelos Nossos Diaristas</h2>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="card-title h5">Limpeza Básica</h3>
                <p class="card-text">
                  Remoção de pó e resíduos, manutenção e organização dos ambientes,
                  higienização de cozinha e banheiros.
                </p>
                <a href="#" class="btn btn-outline-primary"
                  >Saiba Mais <i class="fas fa-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="card-title h5">Faxina</h3>
                <p class="card-text">
                  Limpeza mais detalhada dos ambientes, remoção de gordura de cozinha e
                  banheiros, limpeza de vidros e janelas.
                </p>
                <a href="#" class="btn btn-outline-primary"
                  >Saiba Mais <i class="fas fa-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="card-title h5">Pré-mudança</h3>
                <p class="card-text">
                  Limpeza minuciosa antes de mudar para um novo lar, remoção de poeira e
                  sujeira acumulada, preparação do ambiente.
                </p>
                <a href="#" class="btn btn-outline-primary"
                  >Saiba Mais <i class="fas fa-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="card-title h5">Pós-Obra</h3>
                <p class="card-text">
                  Limpeza especializada após reformas ou construções, remoção de resíduos
                  de obra, limpeza profunda de todos os ambientes.
                </p>
                <a href="#" class="btn btn-outline-primary"
                  >Saiba Mais <i class="fas fa-chevron-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us py-5">
      <div class="container">
        <h2 class="text-center mb-5">Por que escolher a Amal Agency?</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-user-check fa-3x mb-3 text-primary"></i>
              <h3 class="h5">Profissionais Verificados</h3>
              <p>
                Todos os nossos diaristas passam por um rigoroso processo de verificação
                de antecedentes.
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-calendar-check fa-3x mb-3 text-primary"></i>
              <h3 class="h5">Agendamento Flexível</h3>
              <p>
                Escolha o horário que melhor se adapta à sua rotina, com opções de
                agendamento recorrente.
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center">
              <i class="fas fa-hand-holding-usd fa-3x mb-3 text-primary"></i>
              <h3 class="h5">Preços Competitivos</h3>
              <p>
                Oferecemos serviços de qualidade a preços justos, tanto para clientes
                quanto para profissionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  // Add any necessary component logic here
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/fundo1.png");
  background-size: cover;
  background-position: center;
}

.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.btn-outline-primary {
  color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn-outline-primary:hover {
  color: white;
  background-color: var(--bs-primary);
}

.fas {
  color: var(--bs-primary);
}

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
