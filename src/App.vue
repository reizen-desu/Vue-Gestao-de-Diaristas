<template>
  <HeaderVue />
  <!-- I can later add the bg-image class -->
  <div class="content">
    <router-view />
  </div>
  <FooterVue />
</template>

<script>
import HeaderVue from "./views/HeaderVue.vue";
// import NavBar from './views/NavBar.vue'
// import FormRegister from './views/FormRegister.vue'
import FooterVue from "./views/FooterVue.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    // Navbar: NavBar,
    // FormRegister,
    FooterVue,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

a.router-link-exact-active {
  color: #42b983;
}

.bg-image {
  background-image: url("./assets//background.jpg");
  position: sticky;
  min-height: 100%;
  background-color: white;
  background-position: center end;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(2px);
  z-index: -10;
}

.content {
  padding: 20px;
  flex-grow: 1;
}

HeaderVue,
FooterVue {
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
