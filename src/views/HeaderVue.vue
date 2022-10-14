<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-xxl">
      <router-link to="/" class="navbar-brand">
        <img
          id="nav-logo"
          src="../assets/logo_small.jpg"
          class="fw-bold text-secondary"
        />
      </router-link>

      <!-- Botao de activação para dispositivos móveis -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- links de navegação -->
      <div
        id="main-nav"
        class="collapse navbar-collapse justify-content-end align-center"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Sobre</router-link>
          </li>
          <li class="nav-item">
            <!-- <a href="SGD/servicos.html" class="nav-link">
                        NOTIFICACOES
                        </a> -->
          </li>

          <!-- Mostar os items de registro/login caso ainda não tenha entrado no sistema -->
          <!-- <?php if (!isset($_SESSION['tipo_usuario'])) { ?> -->
          <li class="nav-item" v-if="logged">
            <button
              class="mx-2 btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#register"
            >
              Registar
            </button>
          </li>
          <li class="nav-item" v-if="logged">
            <!-- <a href="/login.html" class="btn btn-outline-primary">Login</a> -->
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              Login
            </button>
          </li>

          <!-- Caso esteja logado, mostrar o nome e outras opções -->

          <li class="nav-item dropdown dropstart" v-if="!logged">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Perfil
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Meu perfil</a></li>
              <li><a class="dropdown-item" href="#">Notificações</a></li>
              <li>
                <a class="dropdown-item btn-danger text-danger" href="#" op>Sair</a>
              </li>
            </ul>
          </li>
          <!-- <li class="nav-item">
                    <button class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#login">Notifications</button>
                </li> -->

          <!-- <?php } ?> -->
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
