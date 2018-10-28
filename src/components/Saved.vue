<template>
  <div class="saved">
    <h2>Your Saved Gems: {{ savedGems.length }}</h2>

    <div v-for="(gem, index) in savedGems"
         class="row middle-sm"
         :key="index">
      <div class="col-sm-1">
        <button @click="remove(gem)">
          Remove
        </button>
      </div>
      <div class="gem-name col-sm-4">
          {{ gem.name }}
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

<style scoped>
.row {
  margin: 20px 0;

  &:hover {
    background-color: #efefef;
  }
}

button {
  background-color: #fba8a8;
}

.saved {
  border-bottom: 6px dashed #dfb3e7;
}

.gem-name {
  text-transform: uppercase;
  color: #121fae;
}
</style>
