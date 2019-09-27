import charactersModule from './../../src/store/modules/characters'

describe('example', () => {
  it('fecth Rick and Morty Characters', async () => {
    let characters

    // mock the commit event to get the result in characters variable
    let mockCommit = (state, payload) => {
      characters = payload
    }

    await charactersModule.actions.fetchCharacters({ commit: mockCommit })

    expect(characters).not.toBeNull()
    expect(characters).toBeDefined()
    expect(characters).toHaveLength(20)
    expect(characters).toHaveLength(20)
    expect(characters[0]).toHaveProperty('id', 'name', 'origin', 'status', 'species', 'gender', 'location', 'image', 'episode', 'url', 'created');
  })
})
