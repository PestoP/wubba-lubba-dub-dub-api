import Vue from 'vue'
import Router from 'vue-router'
import Characters from './components/Characters.vue'
import Character from './components/Character.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'characters',
      component: Characters
    },
    {
      path: '/character/:id',
      name: 'character',
      component: Character
    }
  ]
})
