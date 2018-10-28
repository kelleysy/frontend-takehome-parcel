<template>
  <div class="results">
    <div v-for="(gem, index) in gems"
         :key="index">
      <button @click="save(gem)">
        &plus;
      </button>
      {{ gem.name }}
      <hr />
    </div>

  </div>
</template>

<script>

export default {
  name: 'SearchResults',

  props: {
    gems: Array
  },

  methods: {
    save (gem) {
      this.$store.dispatch('saveGem', gem)
    }
  }
}
</script>

<style scoped>
hr {
  border-style: ridge;
}
</style>
