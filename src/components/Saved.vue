<template>
  <div class="saved">
    <h2>Your Saved Gems: {{ savedGems.length }}</h2>

    <div v-for="(gem, index) in savedGems"
         class="row middle-sm m-vertical-20"
         :key="index">
      <div class="col-sm-1">
        <button @click="remove(gem)"
                class="bg-red-light">
          Remove
        </button>
      </div>
      <div class="gem-name col-sm-3">
        {{ gem.name }}
      </div>
      <div class="col-sm">
        <a :href="gem.documentation_uri"
           target="_blank">
           more
        </a>
      </div>
      <div class="col-sm">
          {{ gem.version }}
      </div>
      <div class="col-sm">
          {{ gem.downloads }}
      </div>
      <div class="col-sm-5">
          {{ gem.authors }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saved',

  computed: {
    savedGems () {
      return this.$store.getters.savedGems
    }
  },

  methods: {
    remove (gem) {
      this.$store.dispatch('removeGem', gem)
    }
  }
}
</script>

<style scoped lang="scss">
.saved {
  border-bottom: 3px dashed;
}

.gem-name {
  text-transform: uppercase;
}
</style>
