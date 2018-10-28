<template>
  <div class="search row">
    <div class="col-sm-12">
      <h2>Search for some gems:</h2>
    </div>
    <div class="col-sm-12 row">
      <input v-model="terms"
             placeholder="edit me"
             class="col-sm-7">
      <button @click="search"
              :disabled="disabled"
              :class="{'disabled': disabled}">
        Search
      </button>
    </div>
    <p v-if="searchHit">You looked for: {{ terms }}</p>

    <p v-if="!resultsExist && searchHit">Loading...</p>
    <SearchResults v-if="resultsExist && searchHit"
                   :gems="gems" />
  </div>
</template>

<script>
import SearchResults from './SearchResults'

export default {
  name: 'Search',

  components: {
    SearchResults
  },

  data () {
    return {
      terms: 'cucumber',
      searchHit: false
    }
  },

  computed: {
    resultsExist () {
      if (this.$store.getters.gems && this.$store.getters.gems.length > 0) {
        return this.$store.getters.gems
      }
    },

    disabled () {
      if (this.terms && this.terms.length > 0) {
        return false
      }
      return true
    },

    gems () {
      return this.$store.getters.gems
    }
  },

  methods: {
    getGems () {
      console.log('calling get gems')
    },

    search () {
      this.searchHit = true
      this.$store.dispatch('getGems', this.terms)
    }
  }
}

</script>

<style scoped>

</style>
