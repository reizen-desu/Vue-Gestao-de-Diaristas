<template>
  <!-- FORMULARIO DE REGISTO (Modal) -->
  <section class="bg-light modal fade" id="register" aria-labelledby="modal-title">
    <!-- Definições do modal vão ao lado do "modal-dialog"
Os tamanho do modal é pelo "modal-sm|lg|xl"-->
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">Registrar</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <!-- Nav pills -->
          <ul class="nav nav-pills nav-justified" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="pill"
                href="#menu1"
                data-bs-placement="left"
                title="Caso você esteja procurando por uma diarista então é recomendado que você se registe como uma"
                >Visitante</a
              >
              <!-- data-bs-toggle="tooltip" -->
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="pill"
                href="#menu2"
                data-bs-placement="left"
                title="Se você pretende trabalhar como uma diarista então registe-se como uma."
                >Diarista</a
              >
            </li>
            <!-- data-bs-toggle="tooltip" -->
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="menu1" class="container tab-pane active">
              <br />
              <!-- <?php include 'formulario_registro_visitante.php'; ?> -->
              <FormRegisterVisitante />
            </div>
            <div id="menu2" class="container tab-pane fade">
              <br />
              <!-- <?php include 'formulario_registro_diarista.php'; ?> -->
              <FormRegisterDiarista />
            </div>
          </div>
        </div>
      </div>
      <!-- modal body -->

      <div class="modal-footer">
        <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
    <!-- modal content -->
    <!-- </div> modal dialog -->
  </section>
</template>

<script>
import FormRegisterDiarista from "./FormRegisterDiarista.vue";
import FormRegisterVisitante from "./FormRegisterVisitante.vue";

export default {
  components: {
    FormRegisterDiarista,
    FormRegisterVisitante,
  },
};
</script>

<style></style>
