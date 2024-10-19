<template>
  <!-- FORMULARIO DE REGISTO (Modal) -->
  <section class="bg-light modal fade" id="register" aria-labelledby="modal-title">
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
              <a class="nav-link active" data-bs-toggle="pill" href="#menu1">Visitante</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="pill" href="#menu2">Diarista</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="menu1" class="container tab-pane active">
              <br />
              <FormRegisterVisitante />
            </div>
            <div id="menu2" class="container tab-pane fade">
              <br />
              <FormRegisterDiarista />
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Fechar
          </button>
        </div>
      </div>
    </div>
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
