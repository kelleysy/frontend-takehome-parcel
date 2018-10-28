<template>
  <div id="app"
       class="color-blue-darkest m-all-60 font-size-16">
    <h1 class="center-sm">Welcome to GemSearch</h1>
    <Saved />
    <Search />
  </div>
</template>

<script>
import Saved from './components/Saved'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Saved,
    Search
  }
}
</script>

<style lang="scss">
@import './scss/variables.scss';

#app {
  font-family: 'Raleway', sans-serif;
}

button {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: none;
  border: none;
  padding: 6px 10px;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
