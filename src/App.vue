<template>
  <router-view tag='div' id="app"></router-view>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding-bottom: 20px;
  padding-top: 20px;
}

#app {
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
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
</style>
