<template>
  <!--<div class="landing-page">-->
  <v-img>
    <section>
      <div class="k">

      </div>
    </section>
    <section>
      <div class="container">

        <div class="imagem">
          <img src="../assets/fundo.png" alt="">
        </div>

        <div class="assunto">

          <section class="icons-container">

            <div class="icons">
              <h3>O que temos a oferecer</h3>
              <p>Voce deseja ter uma diarista? Para ajudar com actividades domesticas?
                Uma Baba Para ficar com a crianca? Uma secretaria para cuidar da tua casa?
                podes cres estas na pagina correcta.</p>
            </div>

            <!-- Seccao com icon de user-->
            <div class="icons">

              <h3>Servicos</h3>
              <p>Neste Site teras a oportunidade de ter varios servicos de diaristas
                ,Neste site temos variedade de diaristas, aprecie e requisite servicos
                de acordo com a tua nececidade </p>
            </div>

            <div class="icons">

              <h3>Requisitar</h3>
              <p>Se voce eh uma diarista cadastre-se e publique o seu perfil</p>
            </div>

            <!-- Seccao com icon de hospital-->
            <!--<div class="icons">
    <i class="fas fa-hospital"></i>
    <h3>80+</h3>
    <p>Horarios disponiveis</p>
</div>-->

          </section>

        </div>
      </div>
    </section>
  </v-img>


  <section class="container">
    <div class="assunto">
      <section class="icons-container">

        <div class="icons">

          <h3>10+</h3>
          <p>Diaristas procurando trabalho</p>
        </div>

        <!-- Seccao com icon de user-->
        <div class="icons">

          <h3>1040+</h3>
          <p>Diaristas tem usado esse sistemas para achar trabalho</p>
        </div>

        <div class="icons">

          <h3>500+</h3>
          <p>Empregadores tem achado servicos satisfactorio </p>
        </div>

        <!-- Seccao com icon de hospital-->
        <!--<div class="icons">
    <i class="fas fa-hospital"></i>
    <h3>80+</h3>
    <p>Horarios disponiveis</p>
</div>-->

      </section>

    </div>
    <div class="imagem">
      <img src="../assets/fundo1.png" alt="">
    </div>

  </section>
  <!-- ======= Servicos prestados ======= -->

  <!--
         <section id="featured-services" class="featured-services">

      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Limpeza Básica</a></h4>
              <p class="description">
                Remoção de pó e resíduos, manutenção e organização dos ambientes,
                higienização seca ou molhada de cozinha e banheiros.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Pré mudança</a></h4>
              <p class="description">
                Antes de mudar para o local que você chamara de seu lar. E preciso fazer
                uma limpeza minuciosa, retirando a poeira, sujeira causados pelo tempo que
                o local se encontrava vazio. Retirar gordura ou resíduos deixados por uso
                anterior do local, você pode contar com a Faxina da Hora, pois temos
                profissionais dedicados e com destreza para o serviço.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Pós Obra</a></h4>
              <p class="description">
                Acabou de realizar a tão sonhada obra? Mudou aquele cantinho que a muito
                você queria deixar bonito? E agora precisa de algum que cuide dos detalhes
                da limpeza, removendo toda a poeira e deixando tudo brilhado. Pode contar
                com a gente, disponibilizamos profissionais ou equipes especializadas para
                você não se preocupar com a limpeza.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Faxina</a></h4>
              <p class="description">
                Limpeza mais detalhada dos ambientes, remoção de gordura de cozinha e
                banheiros, nesse serviço a um esforço e empenho de tempo maior por parte
                da profissional, e sempre bom que você informe a profissional qual será a
                sua demanda maior para que a mesma comece por esse ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
       End Featured Services Section -->


  <!-- </div>-->
</template>
<script>
export default {};
</script>
<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all .2s ease-out;
  text-decoration: none;
}

.k {
  width: 100%;
  height: 100px;

}

.container {
  display: flex;
  flex-direction: row;

}

.imagem {}

.assunto {

  height: auto;

}

/*a {
  color: #106eea;
  text-decoration: none;
}

div {
  font-family: "Open Sans", sans-serif;
}

.landing-page {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans",
    "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.featured-services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgb(68 88 144 / 12%);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
}
.featured-services title {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

featured-services .title a {
  color: #111;
}

.featured-services .description {
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 0;
}*/
:root {
  --green: #144e43;
  --black: #444;
  --light-color: #777;
  --box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
  --text-shadow: .4rem .4rem 0 rgba(0, 0, 0, .2);
  --border: .2rem solid #144e43;
}

.icons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/*Para por os icons de medicos, feeback de usuarios... em fila*/
.icons-container .icons {
  border: .1rem solid #144e43;
  /*rectangulos por volta*/
  box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
  ;
  border-radius: .5rem;
  text-align: center;
  padding: 2.5rem;
}

.icons-container .icons i {
  font-size: 4.5rem;
  color: #144e43;
  padding-bottom: .7rem;
}

.icons-container .icons h3 {
  font-size: 3.5rem;
  color: #444;
  ;
  padding: .5rem 0;
  text-shadow: .1rem .2rem 0 rgba(0, 0, 0, .2);
}

.icons-container .icons p {
  font-size: 1.7rem;
  color: #777;
  ;
}
</style>
