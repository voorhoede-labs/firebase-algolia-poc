<template>
  <div id="app">
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      index-name="movie_title">
      <ais-search-box></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <div class="search-result__item">
            <search-result :result="result" :key="result.objectID"/>
          </div>
        </template>
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
import db from './firebaseInit'
import searchResult from './components/search-result'

export default {
  components: {
    searchResult
  },
  name: 'App',
  data () {
    return {
      apiKey: ALGOLIA_API_KEY,
      appId: ALGOLIA_APP_ID,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.search-result__item {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

@media(min-width: 480px) { 
  .search-result__item {
    width: 80%;
  }
}

@media(min-width: 768px) {
  .search-result__item {
    width: 50%;
  }
}

</style>
