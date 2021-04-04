<template>
  <div id="app-footer" class="footer">
    <a href="https://github.com/monicargomes" target="_blank"><img class="footer__social" src="../../assets/icons/github-square-brands.svg"/></a>
    <a href="https://nl.linkedin.com/in/monicargomes" target="_blank"><img class="footer__social" src="../../assets/icons/linkedin-brands.svg"/></a>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.footer{
  background-color: #ee0245;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: #fff;

  &__social {
    width: 32px;
    height: 32px;
    margin: 0 4px;
  }
}
</style>
