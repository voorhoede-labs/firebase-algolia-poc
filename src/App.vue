<template>
  <div id="app">
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      index-name="movie_title"
    >
      <ais-search-box></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <h2>
            <ais-highlight 
              :result="result" 
              attribute-name="name">
            </ais-highlight>
          </h2>
        </template>
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      apiKey: ALGOLIA_API_KEY,
      appId: ALGOLIA_APP_ID,
      algoliaIndexName: 'movie_title',
      algoliaAttribute: 'name'
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
</style>
