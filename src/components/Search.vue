<template>
  <div class="search">
    <div class="col-sm-12">
      <h2>Search for some gems:</h2>
    </div>
    <div class="col-sm-12 row">
      <input v-model="terms"
             placeholder="'rails'"
             @keyup.enter="search"
             class="col-sm-7 font-size-18 border-color-grey-medium">
      <button @click="search"
              :disabled="disabled"
              class="search font-size-18 bg-blue-light p-vertical-15 p-horizontal-25">
        Search
      </button>
    </div>
    <div class="col-sm-12">
      <p v-if="searchHit"><i>You searched for: {{ userSearch }}</i></p>
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
      terms: '',
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

<style scoped lang="scss">
@import './scss/variables.scss';

input {
  font-family: inherit;
  outline: none;
  border-radius: 10px 0 0 10px;
  border: 1px solid;
}
button.search {
  border-radius: 0 10px 10px 0;
}
</style>
