<template>
  <div id="app-about" >
    <h1>{{heading}}</h1>
    <p class="app__content">{{content}}</p>
    <img class="app__img" src="../../assets/images/about.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'app-about',
  data () {
    return {
      heading: 'Quem sou eu',
      content: 'Olá! Meu nome é Monica, sou brasileira, nascida no estado de Minas Gerais, tenho 31 anos de idade e moro em Amsterdam desde outubro de 2017 com meu marido.'
    }
  }
}
</script>

<style lang="scss">

</style>
