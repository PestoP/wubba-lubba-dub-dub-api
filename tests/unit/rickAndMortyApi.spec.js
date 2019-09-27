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
    expect(characters[0]).toHaveProperty('id', 'name', 'origin', 'status', 'species', 'gender', 'location', 'image', 'episode', 'url', 'created');
  })
})

describe('example', () => {
  it('fecth Only one Character', async () => {
    let character

    // mock the commit event to get the result in character variable
    let mockCommit = (state, payload) => {
      character = payload
    }

    await charactersModule.actions.fetchCharacter({ commit: mockCommit })

    expect(character).not.toBeNull()
    expect(character).toBeDefined()
    expect(character).toHaveProperty('id', 'name', 'origin', 'status', 'species', 'gender', 'location', 'image', 'episode', 'url', 'created');
  })
})
