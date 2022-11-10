<template>
  <div class="container">
    <div class="row mb-md-4">
      <div class="col-12 col-lg-8 text-center text-lg-start">
        <h3 class="text-primary small">Diaristas disponíveis</h3>
        <h2 class=" "></h2>
        <p class="lead">
          Várias diaristas estão disponíveis para trabalhar com você, de acordo com a sua
          preferência.
        </p>
      </div>
    </div>

    <div class="row d-flex mb-5">
      <div class="col-10 mx-auto col-md-4" v-for="diarista in diaristas" :key="diarista.id">
        <div class="my-3 card card-body shadow p-4">
          <div class="row align-items-center d-flex text-md-center text-lg-start">
            <!-- Avatar -->
            <div class="mx-auto h-16 w-16">
              <img :src="diarista.foto_usuario" :alt="diarista.nome" class="card-img-top img-cover shadow-sm" />
            </div>

            <!-- Nome -->
            <div class="col-12 col-md-9 mt-3 mt-lg-0 small">
              <h3 class="">{{ diarista.nome }} {{ diarista.apelido }}</h3>
            </div>
            <p class="small mb-4 text-black-80 text-italic">{{ diarista.descricao }}</p>
          </div>
          <div class="table table-borderless">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-primary text-end">
                    <i class="fa fa-address-book"></i>
                    Contacto
                  </td>
                  <td class="text-black-80">{{ diarista.telefone }}</td>
                </tr>
                <tr>
                  <td class="text-primary text-end">
                    <i class="fa fa-arrow"></i>
                    Morada
                  </td>
                  <td class="text-black-80">{{ diarista.morada }}</td>
                </tr>
                <tr>
                  <td class="text-primary text-end">
                    <!-- <i class=" fa fa-money"></i> -->
                    Idade
                  </td>
                  <td class="text-black-80">{{ diarista.data_nascimento }}</td>
                </tr>
                <tr>
                  <td class="text-primary text-end">
                    <i class="fa fa-mars"></i>
                    Sexo
                  </td>
                  <td class="text-black-80">{{ diarista.sexo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="card-text">
            <small class="text-muted">Membro desde {{ diarista.created_at }}
            </small>
          </p>

          <div class="btn-group">
            <a :href="'http://localhost:8000/visitante/solicitacoes/' + diarista.id"
              class='btn btn-primary'>Requisitar</a>
            <!-- <a href="" class="btn">X likes</a> -->
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row pt-3 align-items-center justify-content-center">
    <div class="col text-center">
      <a href="#" class="btn btn-primary btn-rounded shadow py-3 px-5">Ir para cima</a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "TelaVisitante",
  data() {
    return {
      title: "TelaVisitante",
      diaristas: [],
    };
  },

  created() {
    {
      useToast()("Aguarde enquanto as diaristas são carregadas!", {
        position: "bottom-left",
        timeout: 2000,
        action: {
          text: "X",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    }
    axios
      .get("http://localhost:8000/api/diaristas")
      .then((response) => {
        console.log("Dados recebidos com sucesso");
        useToast().success("Diaristas carregadas com sucesso!", {
          timeout: 3500,
        }),
          this.diaristas = response.data.data;
        console.log(response);
      })
      .catch((error) => {
        console.log("Erro ao receber dados");
        useToast().error("Erro aos carregador as diaristas!", {
          timeout: 3500,
        }),
          console.log(error);
      });
  },
};
</script>
<style scoped>
img {
  height: 30px;
  width: 30px;
}
</style>
