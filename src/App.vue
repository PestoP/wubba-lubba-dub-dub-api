<template>
  <div>
    <Header />
    <transition name="fade">
      <router-view id="app"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

#app {
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  margin-top: 5vh;
}

// remove button default style
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
