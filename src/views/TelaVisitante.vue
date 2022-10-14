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
      <div
        class="col-10 mx-auto col-md-4"
        v-for="diarista in diaristas"
        :key="diarista.id"
      >
        <div class="my-3 card card-body shadow p-4">
          <div class="row align-items-center d-flex text-md-center text-lg-start">
            <!-- Avatar -->
            <div class="mx-auto h-16 w-16">
              <img
                :src="diarista.avatar"
                :alt="diarista.nome"
                class="card-img-top img-cover shadow-sm"
              />
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
                  <td class="text-black-80">{{ diarista.contacto }}</td>
                </tr>
                <tr>
                  <td class="text-primary text-end">
                    <i class="fa fa-arrow"></i>
                    Moarada
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
            <small class="text-muted"
              >Último visto em {{ diarista.ultimo_acesso }}
            </small>
          </p>
          <div class="btn-group">
            <a href="http://localhost:3000/diaristas/2" class="btn btn-primary"
              >Requisitar</a
            >
            <a href="diarista.php?id=<?= $diarista['id'] ?>" class="btn">
              <!-- <? $diaristas['likes'] ?>Likes -->
            </a>
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
export default {
  name: "TelaVisitante",
  data() {
    return {
      title: "TelaVisitante",
      diaristas: [],
    };
  },

  created() {
    fetch("http://localhost:3000/diaristas")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.diaristas = data;
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
