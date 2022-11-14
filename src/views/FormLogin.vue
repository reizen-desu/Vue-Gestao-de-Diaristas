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
              <input type="email" name="email" class="form-control" v-model="email" placeholder="nome@exemplo.com"
                required />
              <label for="email">Email</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" name="password" v-model="password" placeholder="Password"
                required />
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
          <button href="#0" type="submit" name="login" form="loginForm" class="btn btn-primary">
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
import axios from "axios";
import router from "../router/index.js";
import { useToast } from "vue-toastification";

export default {
  name: "FormLogin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async submit() {
      const formData = {
        email: this.email,
        senha: this.password,
      };

      const response = await axios.post("/visitantes/login", formData);

      if (response.data.message === "Visitante nao encontrado") {
        console.log(response.data);
        return useToast().error("Usuário não encontrado");
      } else if (response.data.message === "Senha incorreta") {
        console.log(response.data);
        return useToast().error("Senha incorrecta");
      } else if (response.data.message === "The senha must be at least 6 characters.") {
        useToast().error("A senha tem que ser maior que 6 caracteres");
      } else {
        console.log("erro")
      }

      if (response.status === 201) {
        useToast().success("Login efetuado com sucesso");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        useToast().success("Redirecionando para a página inicial");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.$emit("logged", true);
        window.location.reload();
        router.push("/diaristas");
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("visitante_id", response.data.user.id);
        localStorage.setItem("nome", response.data.user.nome);
        localStorage.setItem("logged", true);
      }
    },
  },
};
</script>
<style>

</style>
