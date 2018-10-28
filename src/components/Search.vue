<template>
  <div class="search">
    <div class="col-sm-12">
      <h2>Search for some gems:</h2>
    </div>
    <div class="col-sm-12 row">
      <input v-model="terms"
             class="col-sm-7"
             placeholder="'rails'"
             @keyup.enter="search">
      <button @click="search"
              :disabled="disabled"
              class="search">
        Search
      </button>
    </div>
    <div class="col-sm-12">
      <p v-if="searchHit">You looked for: {{ userSearch }}</p>
      <p v-if="!resultsExist && searchHit">Loading...</p>
    </div>
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
      searchHit: false,
      userSearch: ''
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
    search () {
      this.searchHit = true
      this.userSearch = this.terms
      this.$store.dispatch('getGems', this.terms)
    }
  }
}

</script>

<style scoped>
input {
  font-size: 18px;
  font-family: inherit;
  outline: none;
}
button.search {
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  background-color: #b8deef;
  padding: 15px 25px;
}
</style>
