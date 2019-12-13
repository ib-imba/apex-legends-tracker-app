<template>
  <header>
    <img :src="image" alt="logo">
    <div class="perfil">Use this Gamertag: <h3>Zednim</h3></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      image: require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped>
  header {
    position: relative;
  }

  img {
    width: 300px;
  }

  @media(max-width: 700) {
    img {
      display: block;
      margin: auto;
    }
  }

  .perfil {
    position: absolute;
    float: right;
    background: rgba(0, 0, 0, 0.5);
    border: 4px #fff solid;
    border-bottom-right-radius: 50%;
    top: 80px;
    right: 0;
    padding: 8px 16px;
  }

  h3 {
    color: #CCFB60;
  }
</style>
