<template>
  <section class="character">
    <header class="character-header">
      <img :src='this.character.image' class="character-image"/>
      <h2 class="character-title">{{this.character.name}}</h2>
    </header>
    <div class="character-body">
      <p class="character-name">{{this.character.name}}</p>
      <p class="character-status">{{this.character.status}}</p>
      <p class="character-species">{{this.character.species}}</p>
      <p class="character-type">{{this.character.type}}</p>
      <p class="character-gender">{{this.character.gender}}</p>
      <p class="character-origin">{{this.character.origin}}</p>
      <p class="character-episodes">{{this.character.episode}}</p>
      <p class="character-url">{{this.character.url}}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Character',
  computed: mapGetters(['character'])
}
</script>

<style lang='scss' scoped>
.character {
  .character-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: black solid 1px;

    .character-image {
      width: 100%;
      height: auto;
      border-top-left-radius: 10px;
      border-right: 1px solid black;
    }

    .character-title {
      align-self: center;
      justify-self: center;
      font-size: 1.5rem;
      color: #0fadc6;
    }
  }

  .character-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 45vh;
  }
}

</style>
