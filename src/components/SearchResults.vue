<template>
  <div class="results">
    <div v-for="(gem, index) in gems"
         class="row middle-sm border-color-grey-light p-vertical-10"
         :key="index">
      <div class="col-sm-1">
          <button @click="save(gem)"
                  :disabled="disabled(gem)"
                  class="save bg-green-light"
                  :class="{ 'bg-grey-light': disabled(gem) }">
            Save
          </button>
      </div>
      <div class="col-sm">
        {{ gem.name }}
        <span v-if="disabled(gem)"
              class="color-red-dark">
          (You already saved this gem!)
        </span>
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
    },

    disabled (gem) {
      let savedGems = this.$store.getters.savedGems
      if (savedGems.filter(i => i.name === gem.name).length === 0) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  border-bottom: 1px ridge;
}
</style>
