<template>
  <section class="bg-light modal fade" id="login" aria-labelledby="modal-title">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <p class="text-secondary">Preencha os campos abaixo para entrar</p>

          <form id="loginForm" @submit.prevent="submit">
            <div class="form-floating mb-2">
              <input type="email" name="email" class="form-control" id="email" v-model="email"
                placeholder="nome@exemplo.com" required />
              <label for="email">Email</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="password" name="password" v-model="password"
                placeholder="Password" required />
              <label for="password">Senha</label>
            </div>
            <div class="form-group row">
              <div class="col-lg-6 offset-md-4">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" name="remember" /> Lembrar de mim
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- modal body -->
        <div class="modal-footer">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button type="submit" name="login" form="loginForm" class="btn btn-primary">
            Entrar
          </button>
        </div>
      </div>
      <!-- modal content -->
    </div>
    <!-- modal dialog -->
  </section>
</template>
<script>
import axios from 'axios'

export default {
  name: "FormLogin",


  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },

  methods: {
    login() {

      // const formData = new FormData();
      // formData.append('email', this.email);
      // formData.append('senha', this.password);
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // }

      axios
        .post("http://localhost:8000/api/diaristas/login", {
          email: this.email,
          senha: this.password,
        })

        .then((response) => {
          console.log("Logado com sucesso");
          console.log(response);
          this.$store.dispatch("login", response.data.data);
        })
        .catch((error) => {
          console.log("Falha ao logar");
          console.log(error);
        });
    },
  },
};

</script>
<style>

</style>
