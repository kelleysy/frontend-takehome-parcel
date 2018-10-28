<template>
  <div id="app">
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

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

button {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: none;
  border: none;
  padding: 6px 10px;
  outline: none;
}
</style>
