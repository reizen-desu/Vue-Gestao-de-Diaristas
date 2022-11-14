<template>
  <div class="text-muted">
    Registando como um visitante, você poderá requisitar algum serviço à diaristas e
    poderá publicar seus serviços. Preencha os campos abaixo para se registrar.
  </div>

  <form @submit.prevent="register">
    <div class="row">
      <div class="form-group col">
        <div class="form-floating">
          <input type="text" class="form-control" name="nome" v-model="visitante.nome" id="nome" placeholder="Nome"
            required />
          <label for="nome" class="form-label">Nome</label>
        </div>
        <!-- <input type="text" class="form-control" id="nome" placeholder="Introduza seu nome" pattern="[^0-9]+" required> -->
      </div>

      <div class="form-group col">
        <div class="form-floating">
          <input type="text" v-model="visitante.apelido" class="form-control" id="apelido" name="apelido"
            placeholder="Apelido" required />
          <label for="apelido" class="form-label">Apelido</label>
        </div>
        <!-- <input type="text" class="form-control" id="apelido" placeholder="Introduza seu apelido" pattern="[^0-9]+" required> -->
      </div>
    </div>

    <br />

    <div class="form-floating">
      <input type="email" v-model="visitante.email" class="form-control" id="email_visitante" name="email"
        placeholder="Introduza seu email" required />
      <label for="email" class="form-label">Email</label>
    </div>

    <!-- A confirmacao da senha é controlado por uma script javascript -->
    <div class="row">
      <div class="form-group col">
        <label for="password_visitante">Senha</label>
        <input type="password" v-model="visitante.senha" class="form-control" id="password_visitante"
          name="password_visitante" placeholder="Senha" onchange="validarSenhaVisitante();" required />
      </div>

      <div class="form-group col">
        <label for="confirm_password_visitante">Confirmar senha</label>
        <input type="password" class="form-control" id="confirm_password_visitante" name="confirm_password_visitante"
          placeholder="Confirme a senha" onkeyup="validarSenhaVisitante();" required />
      </div>
    </div>

    <br />

    <div class="form-group">
      <label for="nif">Contacto</label>
      <input type="digit" v-model="visitante.telefone" class="form-control" id="contacto" name="contacto"
        placeholder="84 0000 000" required />
    </div>

    <div class="form-group">
      <label for="morada">Morada</label>
      <input type="text" v-model="visitante.morada" class="form-control" id="morada" name="morada"
        placeholder="Introduza o seu bairro" />
    </div>

    <hr />
    <div class="d-grid gap-2 col-6 mx-auto">
      <button type="submit" name="registar_visitante" class="btn btn-primary btn-block">
        Registrar nova conta
      </button>
    </div>
  </form>
</template>
<script>
import { useToast } from 'vue-toastification';
import axios from 'axios';

export default {
  name: "RegistarVisitante",
  data() {
    return {
      visitante: {
        nome: '',
        apelido: '',
        email: '',
        senha: '',
        telefone: '',
        morada: '',
      },
    };
  },

  methods: {
    register() {
      const toast = useToast();
      axios.post('/visitantes/register', this.visitante)
        .then((response) => {
          toast.success('Visitante registado com sucesso!');
          // this.$router.push('/login');
          console.log(response);
        })
        .catch((error) => {
          toast.error('Erro ao registar visitante!');
          console.log(error);
        });
    },
  }

};
</script>
<style>

</style>
