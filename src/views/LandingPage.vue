<template>
  <div class="landing-page">
    <!-- Main Content -->
    <main>
      <section class="hero bg-primary text-white text-center py-5">
        <div class="container">
          <h1 class="display-4">Encontre o profissional ideal para sua casa</h1>
          <p class="lead">
            Conectamos você com empregadas domésticas, babás, cozinheiras e muito mais!
          </p>
          <a href="#contact" class="btn btn-light btn-lg mt-3">Entre em contato</a>
        </div>
      </section>

      <section id="services" class="py-5">
        <div class="container">
          <h2 class="text-center mb-5">Nossos Serviços</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Empregadas Domésticas</h5>
                  <p class="card-text">
                    Profissionais experientes para cuidar da sua casa.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Babás</h5>
                  <p class="card-text">Cuidadoras qualificadas para seus filhos.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Cozinheiras</h5>
                  <p class="card-text">
                    Profissionais para preparar refeições deliciosas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Nossas Vantagens</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="text-center">
                <i class="fas fa-phone-alt fa-3x mb-3 text-primary"></i>
                <h4>Atendimento via Call Center</h4>
                <p>
                  Nossos atendentes estão prontos para ajudar você a encontrar o
                  profissional ideal.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center">
                <i class="fas fa-user-check fa-3x mb-3 text-primary"></i>
                <h4>Perfis Detalhados</h4>
                <p>
                  Visualize experiência, habilidades e avaliações de cada profissional.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="text-center">
                <i class="fas fa-clipboard-list fa-3x mb-3 text-primary"></i>
                <h4>Cadastro de Profissionais</h4>
                <p>Trabalhadores podem se cadastrar diretamente em nossa plataforma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="bg-primary text-white py-5">
        <div class="container">
          <h2 class="text-center mb-4">Entre em Contato</h2>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Seu nome" />
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Seu e-mail" />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-light">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

  <FormRegister />
  <FormLogin />
</template>

<script>
import FormRegister from "./FormRegister.vue";
import FormLogin from "./FormLogin.vue";
import { useToast } from "vue-toastification";

export default {
  name: "LandingPage",
  components: {
    FormRegister,
    FormLogin,
  },
  props: {
    logged: Boolean,
  },
  methods: {
    printmessage() {
      useToast().success("Carregando as notificaçoes!", {
        position: "bottom-left",
        duration: 1000,
        theme: "bubble",
        action: {
          text: "X",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/fundo1.png");
  background-size: cover;
  background-position: center;
}

nav {
  box-shadow: 0px 2px 1.5px rgba(0, 0, 0, 0.013), 0px 5px 2.4px rgba(0, 0, 0, 0.024),
    0px 9px 5px rgba(0, 0, 0, 0.04);
}

#nav-logo {
  border-radius: 20px 20px 0px;
  box-shadow: 5px 9px 10px 1px rgba(0, 0, 0, 0.9);
}

footer {
  background-color: black;
}

/* Fix for FontAwesome icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
