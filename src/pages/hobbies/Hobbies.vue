<template>
  <div id="app-hobbies" >
    <h1>{{heading}}</h1>
    <div class="app__content">
      <p v-for="(paragraph, idx) in content" :key="idx">{{paragraph}}</p>
    </div>
    <img class="app__img" src="../../assets/images/hobbies1.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'app-hobbies',
  data () {
    return {
      heading: 'Hobbies',
      content: [
        'No meu tempo livre, gosto de ler, assistir filmes e seriados, jogar video game e viajar. Prefiro livros, filmes e seriados de ficção, comédia ou romance.',
        'Adoro quando posso estar em contato com a natureza, fazer trilhas e passeios de bicicleta. Também gosto de cozinhar e receber os amigos em casa.',
        ]
    }
  }
}
</script>

<style lang="scss">

</style>
