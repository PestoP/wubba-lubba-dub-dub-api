<template>
  <div class=cards>
    <div class="card" v-for="(n, index) in 10" :key='index'>
      <img class='image-card' src='' alt="background image portrait for the character card">
      <div class='description-card'>
        <h2>
          name of character
        </h2>
        <p class="origin-name">
          <span>
            Origin's Characters : origin earth
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
export default {

}
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
}
</style>
