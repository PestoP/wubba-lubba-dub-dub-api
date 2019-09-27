<template>
  <div class=cards>
    <div class="card" v-for="(card) in this.allCharacters" :key='card.id'>
      <img class='image-card' :src='card.image' alt="background image portrait for the character card">
      <div class='description-card'>
        <h2 class='title'>
          {{card.name}}
        </h2>
        <p class="origin-name">
          <span>
            Origin's Characters : {{card.origin.name}}
          </span>
        </p>
        <button class="button-explore">
          Explore
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Characters',
  computed: mapGetters(['allCharacters']),
  methods: {
    ...mapActions(['fetchCharacters', 'fetchCharacter'])
  },
  created () {
    this.fetchCharacters()
  }
}
</script>

<style lang='scss' scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;

  .card {
    background-color: #fff;
    border: solid black 1px;
    border-radius: 10px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #e8e8e8;

    &:hover {
      .image-card {
        opacity: 0.8;
      }
      cursor: pointer;
    }

    .image-card {
      width: 100%;
      height: auto;
      border-bottom: 1px solid black;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .description-card {
      height: 150px;
      position: relative;
      top: -5px;
      display: grid;
      grid-template-areas: 'title title'
                  'origin-name origin-name'
                  '. explore';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 60px 50px 40px;

      .title {
        margin: 0;
        grid-area: title;
        padding-top: 10px;
        padding-left: 10px;
        text-align: center;
        font-size: 1.5rem;
        color: #0fadc6;
      }

      .origin-name {
        grid-area: origin-name;
        margin: 0;
        padding-left: 10px;
        align-self: center;
      }

      .button-explore {
        grid-area: explore;
        justify-content: right;
        justify-self: end;
        padding-right: 20px;
        color: #0fadc6;
      }
    }
  }
}
</style>
