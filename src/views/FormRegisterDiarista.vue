<template>
  <div class="text-muted">
    Registando como uma diarista, você poderá publicar seus serviços e receber pedidos de
    visitantes. <br />
  </div>

  <p class="text-secondary">Preencha os campos abaixo para se registrar</p>
  <form @submit.prevent="register">
    <div class="row">
      <div class="form-group col">
        <div class="form-floating">
          <input type="text" class="form-control" name="nome" v-model="form.nome" placeholder="Nome" required />
          <label for="nome" class="form-label">Nome</label>
        </div>
        <!-- <input type="text" class="form-control" id="nome" placeholder="Introduza seu nome" pattern="[^0-9]+" required> -->
      </div>

      <div class="form-group col">
        <div class="form-floating">
          <input type="text" class="form-control" name="apelido" v-model="form.apelido" placeholder="Apelido"
            required />
          <label for="apelido" class="form-label">Apelido</label>
        </div>
        <!-- <input type="text" class="form-control" id="apelido" placeholder="Introduza seu apelido" pattern="[^0-9]+" required> -->
      </div>
    </div>

    <br />

    <div class="form-floating">
      <input type="email" v-model="form.email" class="form-control" name="email" placeholder="Introduza seu email"
        required />
      <label for="email" class="form-label">Email</label>
    </div>

    <!-- A confirmacao da senha é controlado por uma script javascript -->
    <div class="row">
      <div class="form-group col">
        <label for="password_diarista">Senha</label>
        <input type="password" v-model="form.senha" class="form-control" id="form.password_diarista"
          name="password_diarista" placeholder="Senha" onchange="validarSenhaDiarista();" required />
      </div>

      <div class="form-group col">
        <label for="confirm_password_diarista">Confirmar senha</label>
        <input type="password" class="form-control" id="confirm_password_diarista" name="confirm_password_diarista"
          placeholder="Confirme a senha" onkeyup="validarSenhaDiarista();" required />
      </div>
    </div>

    <br />

    <div class="form-check">
      <div class="col-1 col-form-label">Sexo</div>
      <!-- <label for="publicar">Sexo: </label> -->

      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="form.sexo" type="radio" value="M" id="sexo1" />
        <label class="form-check-label" for="sexo1"> Masculino </label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="form.sexo" type="radio" name="sexo" value="F" id="sexo2" />
        <label class="form-check-label" for="sexo2"> Feminimo </label>
      </div>
    </div>
    <br />
    <div class="row">
      <label for="data_nascimento" class="col-5 col-form-label">Data de nascimento</label>
      <div class="col-6">
        <div class="input-group date">
          <input type="date" v-model="form.data_nascimento" class="form-control" name="data_nascimento"
            id="data_nascimento" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="nif">Contacto</label>
      <input type="digit" class="form-control" v-model="form.telefone" name="telefone" placeholder="84 0000 000"
        required />
    </div>

    <div class="form-group">
      <label for="morada">Morada</label>
      <input type="text" class="form-control" v-model="form.morada" name="morada"
        placeholder="Introduza o seu bairro" />
    </div>

    <!-- <label for="especialidade">Escolha sua especialidade(s)</label> -->
    <div class="form-group">
      <fieldset class="border p-2">
        <legend class="float-none w-auto p-0 text-sm-center small" data-bs-toggle="tooltip"
          title="Obs: a diarista pode ter mais de uma especialidade, desde que tenha experiência suficiente.">
          Especialidade
        </legend>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="Limpeza" v-model="form.especialidade" />
          <label class="form-check-label" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Limpeza consiste em varrer os ambientes, tirar o pó e sujeiras dos imóveis, fazer limpeza de vidros, pisos, paredes e dentre outras várias."
            for="especialidade1">
            Limpeza
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="form.especialidade" value="Lavar e secar" />
          <label class="form-check-label" for="especialidade2" data-bs-toggle="tooltip"
            title="Para quem precisa de sua roupa lavada, seja por via manual ou por meio de máquina de lavar.">
            Lavar e secar
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="form.especialidade" value="Baba" />
          <label class="form-check-label" for="especialidade3" data-bs-toggle="tooltip"
            title="A babá é quem fica resposável por tomar conta do bebé. É necessário um nível de responsabilidade devido.">
            Babá
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="Colecta de lixo" v-model="form.especialidade" />
          <label class="form-check-label" for="especialidade4" data-bs-toggle="tooltip"
            title="O indivíduo colector de lixo é aquele responsável por remover o lixo acumulado de um determinado local.">
            Colecta de lixo
          </label>
        </div>
        <div class="form-check form-check-inline">
          <router-link to="/adicionar-especialidade" class="btn btn-secondary btn-sm">Adicionar outras especialidade
          </router-link>
        </div>
      </fieldset>
    </div>

    <br /><br />

    <div class="form-floating">
      <textarea name="descricao" v-model="form.descricao" cols="30" rows="10" class="form-control"></textarea>
      <label for="descricao">Breve descrição sobre você (experiência de trabalho)</label>
    </div>

    <!-- add user-type=diarista to send to php code -->
    <br />
    <!-- <div class="form-check">
      <label for="is_public" data-bs-toggle="tooltip"
        title="Você pode tornar o seu perfil público logo após o registro, assim os outros usuários terão como encontrá-lo.">Pretende
        publicar seu perfil na página?</label>
      <br />

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="is_public" id="is_public1" value="1" checked />
          Sim
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label form-check-inline">
          <input type="radio" class="form-check-input" name="is_public" id="is_public2" value="0" />
          Não
        </label>
      </div>
    </div> -->
    <hr />
    <div class="d-grid gap-2 col-6 mx-auto">
      <button type="submit" name="registar_diarista" class="btn btn-primary btn-block">
        Registrar nova conta
      </button>
    </div>
  </form>
</template>
<script>
import { useToast } from "vue-toastification";
import axios from "axios";
export default {
  name: "RegistarDiarista",
  data() {
    return {
      form: {
        nome: "",
        apelido: "",
        email: "",
        senha: "",
        sexo: "",
        data_nascimento: "",
        telefone: "",
        morada: "",
        especialidade: [],
        descricao: "",
      },
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "/diaristas/register",
        data: this.form,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          useToast().success("Registrado com sucesso!");
          console.log(response)
        })
        .catch(function (error) {
          useToast().error("Ocorreu um erro durante o registo. Confirme os dados.")
          console.log(error);
        });


    },
  },
};
</script>
<style>

</style>
