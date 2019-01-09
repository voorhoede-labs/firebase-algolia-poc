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
          <div class="search-result__item">
            <div class="search-result__item-info">
              <img
                class="search-result__item-image"
                :src="result.poster"
                :alt="result.name"/>
              <div class="search-result__item-meta">
                <h2 class="search-result__item-title">
                  <ais-highlight 
                    :result="result" 
                    attribute-name="name">
                  </ais-highlight>
                </h2>
                <span>Director: {{result.director}}</span>
                <span>Stars: {{result.stars}}</span>
                <span>Genre: {{result.genre}}</span>
                <span>Score: {{result.metascore}}</span>
              </div>
            </div>
          </div>
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

.search-result__item {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

.search-result__item-title {
  width: 100%;
  margin-top: 0;
  line-height: 1;
}

.search-result__item-image {
  object-fit: contain;
  height: 130px;
  margin: 20px;
}

.search-result__item-info {
  display: flex;
}

.search-result__item-meta {
  flex-direction: column;
  display: flex;
  text-align: left;
  margin: 20px;
}
</style>
