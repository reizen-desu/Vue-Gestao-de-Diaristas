<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="erro-template">
          <h1>Opah!</h1>
          <h2>404 Nada Encontrado</h2>
          <div>Lamentamos, um erro ocorreu, página solicitada não encontrada!</div>
          <div class="erro-accao">
            <router-link to="/" class="btn btn-primary btn-lg"
              ><i class="fa fa-home"></i> Voltar ao início </router-link
            ><a href="mailto:suporte@uem.ac.mz" class="btn btn-default btn-info btn-lg"
              ><i class="fa fa-envelope"></i> Contactar o suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.erro-template {
  padding: 40px 15px;
  text-align: center;
}
.erro-accao {
  margin-top: 15px;
  margin-bottom: 15px;
}
.erro-accao .btn {
  margin-right: 10px;
}
</style>
