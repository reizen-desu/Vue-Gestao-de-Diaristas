<template>
  <section class="home" id="home">
    <div class="image">
      <img src="" alt="">
    </div>
  </section>

  <section class="services" id="services">

    <h1 class="heading"> <span>Alguns serviços que os diaristas registados fazem</span> </h1>

    <div class="box-container">



      <div class="box">

        <h3>Limpeza Básica</h3>
        <p>Remoção de pó e resíduos, manutenção e organização
          dos ambientes...</p>
        <a href="#" class="btn"> Mais <span class="fas fa-chevron-right"></span> </a>
      </div>

      <div class="box">

        <h3>Faxina</h3>
        <p>Limpeza mais detalhada dos ambientes, remoção de gordura de cozinha e
          banheiros... </p>
        <a href="#" class="btn"> Mais <span class="fas fa-chevron-right"></span> </a>
      </div>

      <div class="box">

        <h3>Pré mudança</h3>
        <p>Antes de mudar para o local que você chamara de seu
          lar. E preciso fazer ....</p>
        <a href="#" class="btn"> Mais <span class="fas fa-chevron-right"></span> </a>
      </div>

      <div class="box">

        <h3>Pós Obra</h3>
        <p> Acabou de realizar a tão sonhada obra? Mudou aquele cantinho que a muito
          você queria...</p>
        <a href="#" class="btn"> Mais <span class="fas fa-chevron-right"></span> </a>
      </div>

    </div>

  </section>
  <!--<h4>
    O sistema tem como objectivo tornar fácil a procura de uma diarista, assim
    economizando tempo das pessoas que procuram por uma diarista e criar oportunidades de
    trabalho.
    <br /><br />
    Aqui você encontra perfis de diaristas que estão a procura de um lugar para fazer seus
    trabalhos.
  </h4>-->
</template>
<script>
export default {};
</script>
<style scoped>
:root {
  --green: #144e43;
  --black: #444;
  --light-color: #777;
  --box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
  --text-shadow: .4rem .4rem 0 rgba(0, 0, 0, .2);
  --border: .2rem solid var(--green);
}

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

.services .box-container {
  /*Organizar em modo grid rectangolos de servicos*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  /*Tamanho dos rectangolos de servicos*/
}

.services .box-container .box {
  background: #fff;
  border-radius: .5rem;
  box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
  border: .2rem solid #144e43;
  padding: 5.0rem;
}

.services .box-container .box i {
  color: #144e43;
  ;
  font-size: 5rem;
  padding-bottom: .5rem;
}

.services .box-container .box h3 {
  color: #444;
  font-size: 2.5rem;
  padding: 1rem 0;
}

.services .box-container .box p {
  color: #777;
  font-size: 1.2rem;
  line-height: 2;
}

.btn {
  display: inline-block;
  border: .2rem solid #144e43;
  border-radius: .5rem;
  box-shadow: .5rem .5rem 0 rgba(22, 160, 133, .2);
  color: #144e43;
  cursor: pointer;
  font-size: 1rem;
  background: #fff;
}

.btn span {
  padding: .5rem;
  border-radius: .5rem;
  background: #144e43;
  color: #fff;

}

/*Para por fundo verde ao passar o cursor no botao agendar*/
.btn:hover {
  background: #144e43;
  color: #fff;
}

.btn:hover span {
  color: #144e43;
  background: #fff;

}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 7rem;
  scroll-behavior: smooth;
}

section {
  padding: 2rem;
}

/*Para abrir o espaco entre os icons*/
section:nth-child(even) {
  background: #f5f5f5;
}

/*h4 {
  line-height: 1.2;
  color: #212529;
  text-align: center;
  margin: 0;
  padding: 40px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}*/
</style>
