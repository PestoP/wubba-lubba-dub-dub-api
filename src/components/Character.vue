<template>
  <div>{{this.character}}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Character',
  computed: mapGetters(['character'])
}
</script>

<style>

</style>
