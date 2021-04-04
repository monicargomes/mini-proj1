<template>
  <div id="app-experience">
    <h1>{{ heading }}</h1>
    <p v-for="(paragraph, idx) in content" :key="idx">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: "app-experience",
  data() {
    return {
      heading: "O que eu faço",
      content: [
        "Sou Engenheira Frontend Senior em uma empresa de consultoria em tecnologia. Desenvolvo aplicações web para diversos clientes, principalmente clientes na área financeira.",
        "Trabalho com Javascript, Typescript, HTML e CSS. Tenho experiência com SPA em React e Angular e estou testando o Vue. Também tenho experiência com Ionic e gostaria de aprender Flutter.",
        "Em 2020, iniciei um mestrado em Engenharia Informática e Sistemas Web pela Universidade Aberta de Portugal com o objetivo de expandir meus conhecimentos na área, especialmente com relação a arquitetura de sistemas e back-end.",
      ],
    };
  },
};
</script>

<style lang="scss"></style>
