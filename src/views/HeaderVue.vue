<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-xxl">
      <router-link to="/" class="navbar-brand">
        <img id="nav-logo" src="../assets/logo_small.jpg" class="fw-bold text-secondary" />
      </router-link>

      <!-- Botao de activação para dispositivos móveis -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- links de navegação -->
      <div id="main-nav" class="collapse navbar-collapse justify-content-end align-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Sobre</router-link>
          </li>

          <!-- Mostar os items de registro/login caso ainda não tenha entrado no sistema -->
          <template v-if="!logged">
            <li class="nav-item">
              <button class="mx-2 btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#register">
                Registar
              </button>
            </li>
            <li class="nav-item">
              <!-- <a href="/login.html" class="btn btn-outline-primary">Login</a> -->
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login">
                Login
              </button>
            </li>
          </template>

          <!-- Caso esteja logado, mostrar o nome e outras opções -->
          <template v-else>

            <li class="navbar-nav">
              <router-link to="/diaristas" class="nav-link">Diaristas</router-link>
            </li>
            <li class="nav-item dropdown dropstart">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Meu perfil</a></li>
                <li><a class="dropdown-item" href="#">Notificações</a></li>
                <li>
                  <a @click="$emit('logout')" class="dropdown-item btn-danger text-danger">Sair</a>
                </li>
              </ul>

            </li>

            <li class="nav-item" style="display: inline-block;">
              <button class="btn btn-primary" @click="printmessage">Notificações</button>
            </li>
            <!-- <div class="badge bg-danger align-self-center">2</div> -->
            <li class="nav-item container d-flex h-100">
              <span class="badge text-bg-secondary row justify-content-center align-self-center">Visitante</span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <FormRegister />
  <FormLogin />
</template>

<script>
import FormRegister from "./FormRegister.vue";
import FormLogin from "./FormLogin.vue";
import { useToast } from "vue-toastification";
// const toast = useToast();

export default {
  name: "HeaderVue",
  components: {
    FormRegister,
    FormLogin,
  },
  data() {
    return {
      title: "HeaderVue",
    };
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
nav {
  box-shadow: 0px 2px 1.5px rgba(0, 0, 0, 0.013), 0px 5px 2.4px rgba(0, 0, 0, 0.024),
    0px 9px 5px rgba(0, 0, 0, 0.04);
}

/* Imagem */
#nav-logo {
  border-radius: 20px 20px 0px;
  box-shadow: 5px 9px 10px 1px rgba(0, 0, 0, 0.9);
}
</style>
