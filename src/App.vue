<template>
  <!-- <HeaderVue :logged="!logged" @logout="logged = !logged" /> -->
  <HeaderVue :logged="!logged" @logout="logout" />
  <!-- I can later add the bg-image class -->
  <div class="content">
    <div v-if="logged">
      <!-- <h1>Logged in</h1> -->
      <router-view />
    </div>
    <div v-else>

      <router-view />
    </div>
  </div>
  <FooterVue />
</template>

<script>
import HeaderVue from "./views/HeaderVue.vue";
import FooterVue from "./views/FooterVue.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    // TelaVisitante,
    FooterVue,
  },

  props: {
  },

  data() {
    return {
      logged: localStorage.getItem("logged") ? true : false,
    };
  },

  methods: {
    logout() {
      this.logged = false;
      localStorage.clear();


    },
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
