<template>
  <div id="app-header" class="header">
    <div class="logo">{{ logo }}</div>
    <ul class="header__nav">
      <li class="header__nav-item" v-for="(route, idx) in routes" :key="idx">
        <router-link class="header__nav-link" :to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "../../routes";
export default {
  name: "app-header",
  data() {
    return {
      logo: "Monica Gomes",
      routes,
    };
  },
};
</script>

<style lang="scss">
.header {
  background-color: #ee0245;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: #fff;
  font-weight: 500;
  position: sticky;
  top: 0;

  &__nav {
    display: flex;
  }

  &__nav-item {
    margin-right: 16px;
  }

  &__nav-link {
    color: #fff;
    &:hover {
      border-bottom: 2px solid #02eeab;
      color: #02eeab;
    }
  }
}

</style>
