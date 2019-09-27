<template>
  <section class="character">
    <header class="character-header">
      <img :src='this.character.image' alt='image profile of the selected character' class="character-image"/>
      <h2 class="character-title">{{this.character.name}}</h2>
    </header>
    <div class="character-body">
      <div class="character-name">
        <h3>Name</h3>
        <p>
          {{this.character.name}}
        </p>
      </div>
      <div class="character-status">
        <h3>Status</h3>
        <p>
          {{this.character.status}}
        </p>
      </div>
      <div class="character-species">
        <h3>Species</h3>
        <p>
          {{this.character.species}}
        </p>
      </div>
      <div class="character-type">
        <h3>Type</h3>
        <p>
          {{this.character.type}}
        </p>
      </div>
      <div class="character-gender">
        <h3>Gender</h3>
        <p>
          {{this.character.gender}}
        </p>
      </div>
      <div class="character-origin">
        <h3>Origin</h3>
        <p>
          {{this.character.origin}}
        </p>
      </div>
      <div class="character-episode">
        <h3>Episodes</h3>
        <p>
          {{this.character.episode}}
        </p>
      </div>
      <div class="character-url">
        <h3>Url</h3>
        <p>
          {{this.character.url}}
        </p>
      </div>
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
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #07718217;

  .character-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: black solid 1px;

    .character-image {
      width: 100%;
      height: 300px;
      border-top-left-radius: 10px;
      border-right: 1px solid black;
    }

    .character-title {
      align-self: center;
      justify-self: center;
      font-size: 1.5rem;
      color: #077182;
    }
  }

  .character-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5vw;
    grid-row-gap: 2vh;

    h3 {
      border-bottom: #0c93a8 1px solid;
      color: #077182;
      width: 20rem;
    }
  }
}

</style>
