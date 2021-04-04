<template>
  <div id="app">
    <app-header></app-header>
    <div class="body"><router-view></router-view></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

h1,
h2 {
  font-weight: normal;
  color: #02eeab;
}

a {
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.body {
  width: 50%;
  margin: auto;
  height: 100%;
  padding: 24px 0;
}

.app {
  &__content {
    margin-bottom: 48px;
  }

  &__img {
    width: 350px;
    display: block;
    margin: auto;
    box-shadow: 0px 0px 8px 4px #ccc;
  }
}
</style>
