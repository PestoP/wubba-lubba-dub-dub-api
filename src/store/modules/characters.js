import axios from 'axios'

export default {
  state: {
    characters: [],
    character: {}
  },
  getters: {
    allCharacters: (state) => state.characters,
    character: (state) => state.character
  },
  mutations: {
    setCharacters: (state, characters) => (state.characters = characters),
    setCharacter: (state, character) => (state.character = character)
  },
  actions: {
    async fetchCharacters ({ commit }) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${Math.round((Math.random() * 10))}`)
      commit('setCharacters', response.data.results)
    },
    async fetchCharacter ({ commit }, id) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      commit('setCharacter', response.data)
    }
  }
}
