import axios from 'axios'

export default {
  state: {
    characters: []
  },
  getters: {
    allCharacters: (state) => state.characters
  },
  mutations: {
    setCharacters: (state, characters) => (state.characters = characters)
  },
  actions: {
    async fetchCharacters ({ commit }) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${Math.round((Math.random() * 10))}`)
      commit('setCharacters', response.data.results)
    }
  }
}
