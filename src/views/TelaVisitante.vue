<template>
  <div class="container-fluid py-5">
    <!-- Header Section -->
    <div class="row mb-5">
      <div class="col-12 col-lg-8 text-center text-lg-start">
        <div class="d-flex align-items-center mb-4">
          <div>
            <h2 class="display-6 fw-bold mb-3">Gerenciamento de Diaristas</h2>
          </div>
        </div>
        <p class="lead text-muted">
          Encontre e gerencie diaristas qualificados para atender às necessidades dos seus
          clientes.
        </p>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="card shadow-sm mb-4">
      <div class="card-body p-4">
        <h5 class="card-title mb-4">Filtros de Pesquisa</h5>
        <div class="row g-3">
          <!-- Busca por nome -->
          <div class="col-12 col-md-4">
            <div class="input-group">
              <span class="input-group-text bg-primary text-white">
                <i class="fas fa-search"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Buscar por nome..."
                v-model="filtros.busca"
              />
            </div>
          </div>

          <!-- Categoria Profissional -->
          <div class="col-12 col-md-4">
            <select class="form-select" v-model="filtros.categoria">
              <option value="">Todas as categorias</option>
              <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
                {{ cat.nome }}
              </option>
            </select>
          </div>

          <!-- Disponibilidade -->
          <div class="col-12 col-md-4">
            <select class="form-select" v-model="filtros.disponibilidade">
              <option value="">Qualquer disponibilidade</option>
              <option value="hoje">Disponível Hoje</option>
              <option value="semana">Disponível Esta Semana</option>
              <option value="mes">Disponível Este Mês</option>
            </select>
          </div>

          <!-- Filtros Avançados -->
          <div class="col-12">
            <div class="collapse" id="filtrosAvancados">
              <div class="row g-3">
                <!-- Experiência -->
                <div class="col-md-3">
                  <label class="form-label">Anos de Experiência</label>
                  <select class="form-select" v-model="filtros.experiencia">
                    <option value="">Qualquer</option>
                    <option value="1">1+ anos</option>
                    <option value="3">3+ anos</option>
                    <option value="5">5+ anos</option>
                  </select>
                </div>

                <!-- Faixa de Preço -->
                <div class="col-md-3">
                  <label class="form-label">Faixa de Preço (MZN/dia)</label>
                  <select class="form-select" v-model="filtros.faixaPreco">
                    <option value="">Qualquer</option>
                    <option value="1">Até 500 MZN</option>
                    <option value="2">500 - 1.000 MZN</option>
                    <option value="3">Acima de 1.000 MZN</option>
                  </select>
                </div>

                <!-- Avaliação -->
                <div class="col-md-3">
                  <label class="form-label">Avaliação Mínima</label>
                  <select class="form-select" v-model="filtros.avaliacao">
                    <option value="">Qualquer</option>
                    <option value="4">4+ estrelas</option>
                    <option value="4.5">4.5+ estrelas</option>
                  </select>
                </div>

                <!-- Especialidades -->
                <div class="col-12">
                  <label class="form-label">Especialidades</label>
                  <div class="d-flex flex-wrap gap-2">
                    <div v-for="esp in especialidades" :key="esp.id" class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :value="esp.id"
                        v-model="filtros.especialidades"
                      />
                      <label class="form-check-label">{{ esp.nome }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Botões de Filtro -->
          <div class="col-12">
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filtrosAvancados"
              >
                <i class="fas fa-sliders-h me-2"></i>
                Filtros Avançados
              </button>
              <button class="btn btn-primary" @click="aplicarFiltros">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="diarista in diaristasFiltrados"
        :key="diarista.id"
      >
        <div class="card h-100 border-0 shadow-sm hover-shadow transition-all">
          <div class="card-body p-4">
            <!-- Header com Foto e Info Básica -->
            <div class="d-flex align-items-center mb-4">
              <img
                :src="diarista.foto"
                :alt="diarista.nome"
                class="rounded-circle me-3"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <div>
                <h4 class="mb-1">{{ diarista.nome }}</h4>
                <div class="d-flex align-items-center mb-2">
                  <span class="badge bg-primary me-2">{{ diarista.categoria }}</span>
                  <div class="text-warning">
                    <i class="fas fa-star"></i>
                    <span class="ms-1">{{ diarista.avaliacao }}</span>
                    <span class="text-muted ms-1">({{ diarista.num_avaliacoes }})</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Especialidades -->
            <div class="mb-3">
              <h6 class="text-primary mb-2">Especialidades:</h6>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="esp in diarista.especialidades"
                  :key="esp"
                  class="badge bg-light text-dark"
                >
                  {{ esp }}
                </span>
              </div>
            </div>

            <!-- Informações Principais -->
            <div class="mb-4">
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-map-marker-alt text-primary me-2"></i>
                <span>{{ diarista.morada }}</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-phone text-primary me-2"></i>
                <span>{{ diarista.telefone }}</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-clock text-primary me-2"></i>
                <span>{{ diarista.disponibilidade }}</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-briefcase text-primary me-2"></i>
                <span>{{ diarista.anos_experiencia }} anos de experiência</span>
              </div>
            </div>

            <!-- Agenda e Preços -->
            <div class="mb-4">
              <h6 class="text-primary mb-2">Próximas Disponibilidades:</h6>
              <ul class="list-unstyled">
                <li
                  v-for="(data, index) in diarista.proximas_disponibilidades"
                  :key="index"
                  class="mb-1"
                >
                  <i class="fas fa-calendar-alt text-muted me-2"></i>
                  {{ data }}
                </li>
              </ul>
              <div class="mt-2">
                <strong>Preço por dia:</strong> {{ diarista.preco_dia }} MZN
              </div>
            </div>

            <!-- Footer com Ações -->
            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-outline-primary" @click="verDetalhes(diarista.id)">
                Ver Detalhes
              </button>
              <button class="btn btn-primary" @click="agendarServico(diarista.id)">
                Agendar Serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Estado Vazio -->
    <div v-if="diaristasFiltrados.length === 0" class="text-center py-5">
      <img src="/api/placeholder/200/200" alt="Nenhum resultado" class="mb-4" />
      <h4>Nenhum diarista encontrado</h4>
      <p class="text-muted">
        Tente ajustar seus filtros ou entre em contato com o suporte.
      </p>
    </div>

    <!-- Back to Top -->
    <div class="position-fixed bottom-0 end-0 p-4">
      <button
        class="btn btn-primary rounded-circle shadow"
        @click="scrollToTop"
        v-show="showScrollTop"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TelaTrabalhadores",
  data() {
    return {
      showScrollTop: false,
      filtros: {
        busca: "",
        categoria: "",
        disponibilidade: "",
        experiencia: "",
        faixaPreco: "",
        avaliacao: "",
        especialidades: [],
      },
      categorias: [
        { id: 1, nome: "Limpeza Geral" },
        { id: 2, nome: "Cuidados com Crianças" },
        { id: 3, nome: "Cozinha" },
        { id: 4, nome: "Lavanderia" },
        { id: 5, nome: "Jardinagem" },
      ],
      especialidades: [
        { id: 1, nome: "Limpeza Profunda" },
        { id: 2, nome: "Cozinha Internacional" },
        { id: 3, nome: "Cuidados com Animais" },
        { id: 4, nome: "Organização" },
        { id: 5, nome: "Passadoria" },
        { id: 6, nome: "Limpeza de Vidros" },
      ],
      diaristas: [
        {
          id: 1,
          nome: "Maria Silva",
          foto: "https://randomuser.me/api/portraits/women/92.jpg",
          categoria: "Limpeza Geral",
          descricao: "Especialista em limpeza profunda e organização.",
          telefone: "+258 84 123 4567",
          morada: "Bairro Central, Maputo",
          anos_experiencia: 5,
          avaliacao: 4.8,
          num_avaliacoes: 127,
          preco_dia: "600",
          disponibilidade: "Segunda a Sábado",
          especialidades: ["Limpeza Profunda", "Organização", "Passadoria"],
          proximas_disponibilidades: [
            "25/10/2024 - Manhã",
            "27/10/2024 - Dia Inteiro",
            "30/10/2024 - Tarde",
          ],
          created_at: "2022-01-15",
          documentos_verificados: true,
        },
        {
          id: 2,
          nome: "João Machava",
          foto: "https://randomuser.me/api/portraits/men/91.jpg",
          categoria: "Jardinagem",
          descricao: "Jardineiro experiente com conhecimento em plantas nativas.",
          telefone: "+258 86 987 6543",
          morada: "Matola",
          anos_experiencia: 8,
          avaliacao: 4.9,
          num_avaliacoes: 95,
          preco_dia: "350",
          disponibilidade: "Terça a Domingo",
          especialidades: ["Jardinagem", "Poda de Árvores", "Irrigação"],
          proximas_disponibilidades: [
            "26/10/2024 - Dia Inteiro",
            "28/10/2024 - Manhã",
            "31/10/2024 - Tarde",
          ],
          created_at: "2021-11-20",
          documentos_verificados: true,
        },
        {
          id: 3,
          nome: "Ana Cossa",
          foto: "https://randomuser.me/api/portraits/women/36.jpg",
          categoria: "Cozinha",
          descricao:
            "Cozinheira especializada em gastronomia moçambicana e internacional.",
          telefone: "+258 87 456 7890",
          morada: "Sommerschield, Maputo",
          anos_experiencia: 10,
          avaliacao: 4.7,
          num_avaliacoes: 156,
          preco_dia: "400",
          disponibilidade: "Segunda a Sexta",
          especialidades: [
            "Cozinha Internacional",
            "Culinária Vegetariana",
            "Confeitaria",
          ],
          proximas_disponibilidades: [
            "25/10/2024 - Tarde",
            "29/10/2024 - Dia Inteiro",
            "01/11/2024 - Manhã",
          ],
          created_at: "2022-03-05",
          documentos_verificados: true,
        },
      ],
    };
  },
  computed: {
    diaristasFiltrados() {
      let resultado = [...this.diaristas];

      // Filtro de busca por nome
      if (this.filtros.busca) {
        const busca = this.filtros.busca.toLowerCase();
        resultado = resultado.filter(
          (d) =>
            d.nome.toLowerCase().includes(busca) ||
            d.descricao.toLowerCase().includes(busca)
        );
      }

      // Filtro por categoria
      if (this.filtros.categoria) {
        resultado = resultado.filter(
          (d) =>
            d.categoria ===
            this.categorias.find((c) => c.id === this.filtros.categoria)?.nome
        );
      }

      // Filtro por disponibilidade
      if (this.filtros.disponibilidade) {
        const hoje = new Date();
        const umaSemana = new Date(hoje.getTime() + 7 * 24 * 60 * 60 * 1000);
        const umMes = new Date(hoje.getTime() + 30 * 24 * 60 * 60 * 1000);

        resultado = resultado.filter((d) => {
          const proximaData = new Date(d.proximas_disponibilidades[0].split(" - ")[0]);
          switch (this.filtros.disponibilidade) {
            case "hoje":
              return proximaData.toDateString() === hoje.toDateString();
            case "semana":
              return proximaData <= umaSemana;
            case "mes":
              return proximaData <= umMes;
            default:
              return true;
          }
        });
      }

      // Filtro por experiência
      if (this.filtros.experiencia) {
        const anosMinimos = parseInt(this.filtros.experiencia);
        resultado = resultado.filter((d) => d.anos_experiencia >= anosMinimos);
      }

      // Filtro por faixa de preço
      if (this.filtros.faixaPreco) {
        const faixas = {
          1: (preco) => parseInt(preco) <= 500,
          2: (preco) => parseInt(preco) > 500 && parseInt(preco) <= 1000,
          3: (preco) => parseInt(preco) > 1000,
        };
        resultado = resultado.filter((d) => faixas[this.filtros.faixaPreco](d.preco_dia));
      }

      // Filtro por avaliação
      if (this.filtros.avaliacao) {
        const avaliacaoMinima = parseFloat(this.filtros.avaliacao);
        resultado = resultado.filter((d) => d.avaliacao >= avaliacaoMinima);
      }

      // Filtro por especialidades
      if (this.filtros.especialidades.length > 0) {
        resultado = resultado.filter((d) =>
          this.filtros.especialidades.every((espId) =>
            d.especialidades.includes(
              this.especialidades.find((e) => e.id === espId)?.nome
            )
          )
        );
      }

      return resultado;
    },
  },
  methods: {
    verDetalhes(id) {
      const diarista = this.diaristas.find((d) => d.id === id);
      if (diarista) {
        // Aqui você pode implementar a lógica para abrir um modal com mais detalhes
        // ou navegar para uma página de detalhes do diarista
        this.mostrarNotificacao(`Detalhes de ${diarista.nome}`);
      }
    },
    agendarServico(id) {
      const diarista = this.diaristas.find((d) => d.id === id);
      if (diarista) {
        // Aqui você pode implementar a lógica para abrir um modal de agendamento
        // ou navegar para uma página de agendamento
        this.mostrarNotificacao(`Agendando serviço com ${diarista.nome}`);
      }
    },
    aplicarFiltros() {
      // Aqui você pode adicionar lógica adicional antes de aplicar os filtros
      this.mostrarNotificacao("Filtros aplicados com sucesso!");
    },
    mostrarNotificacao(mensagem) {
      // Implementar lógica de notificação (toast) aqui
      console.log(mensagem);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollTop = window.scrollY > 300;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.transition-all {
  transition: all 0.3s ease;
}

.card {
  border-radius: 1rem;
}

.card img {
  border: 3px solid #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.badge {
  padding: 0.5em 1em;
  border-radius: 2em;
}

.btn-primary {
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
}

.btn-outline-primary {
  border-radius: 2rem;
}

.form-select,
.form-control {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
}

/* Animações para os cards */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease-out;
}

/* Responsividade */
@media (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
  }

  .btn-group {
    flex-direction: column;
    width: 100%;
  }

  .btn-group .btn {
    margin-bottom: 0.5rem;
  }
}

/* Estilos para a lista de disponibilidades */
.list-unstyled li {
  font-size: 0.9rem;
  color: #6c757d;
}

/* Estilo para o preço */
.mt-2 strong {
  color: #28a745;
}

/* Melhorias no layout do card */
.card-body {
  display: flex;
  flex-direction: column;
}

.card-body > div:not(:last-child) {
  margin-bottom: 1rem;
}

/* Estilo para o botão de voltar ao topo */
.btn-primary.rounded-circle {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
