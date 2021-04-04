<template>
  <div id="app-header" class="header">
    <div class="logo">{{logo}}</div>
    <ul class="navigation">
      <li class="navigation__item" v-for="(route, idx) in routes" :key="idx"><router-link :to="route.path">{{route.label}}</router-link></li>
    </ul>

  </div>
</template>

<script>
import {routes} from "../../routes";
export default {
  name: 'app-header',
  data () {
    return {
      logo: 'Monica Gomes',
      routes
    }
  }
}
</script>

<style lang="scss">
.header{
  background-color: #ee0245;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: #fff;
  font-weight: 500;
}

.navigation{
  display: flex;

  &__item{
    margin-right: 16px;
  }
}
</style>
