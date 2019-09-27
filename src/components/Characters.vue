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

<style lang='scss' scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;

  .card {
    background-color: #fff;
    border: solid black 1px;
    border-radius: 10px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #e8e8e8;

    .image-card {
      height: 300px;
    }

    .description-card {
      height: 150px;
    }
  }
}
</style>
