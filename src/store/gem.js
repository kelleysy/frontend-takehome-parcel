import axios from 'axios'

function getSavedGems () {
  if (localStorage.getItem('savedGems')) {
    return JSON.parse(localStorage.savedGems)
  }
}

function defaultState () {
  return {
    gems: null,
    savedGems: getSavedGems() || []
  }
}

export default {
  state: defaultState(),

  getters: {
    gems: (state, getters) => {
      return state.gems
    },

    savedGems: (state, getters) => {
      return state.savedGems
    }
  },

  mutations: {
    setGems (state, payload) {
      state.gems = payload.data
    },

    saveGem (state, gem) {
      state.savedGems.push(gem)
      this.commit('setLocalStorage')
    },

    removeGem (state, gem) {
      state.savedGems = state.savedGems.filter(i => i.name !== gem.name)
      this.commit('setLocalStorage')
    },

    setLocalStorage (state) {
      localStorage.setItem('savedGems', JSON.stringify(state.savedGems))
    }
  },

  actions: {
    getGems (context, terms) {
      let cors = 'https://cors.io/?'
      let api = `${cors}https://rubygems.org/api/v1/search.json?query=${terms}`
      axios({ method: 'GET', url: api }).then(response => {
        context.commit('setGems', response)
      }, error => {
        console.error(error)
      })
    },

    saveGem (context, gem) {
      context.commit('saveGem', gem)
    },

    removeGem (context, gem) {
      context.commit('removeGem', gem)
    }
  }
}
