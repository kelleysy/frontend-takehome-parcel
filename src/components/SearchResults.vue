<template>
  <div class="results">
    <div v-for="(gem, index) in gems"
         class="row middle-sm"
         :key="index">
      <div class="col-sm-1">
          <button class="save"
                  @click="save(gem)">
            Save
          </button>
      </div>
      <div class="col-sm">
        {{ gem.name }}
      </div>
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
.row {
  border-bottom: 1px solid #f2f2f2;
  padding: 5px 0;
}

button {
  background-color: #b3e7be;
}
</style>
