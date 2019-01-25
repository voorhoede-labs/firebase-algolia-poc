<template>
  <div id="search-ui" class="search-ui">
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      :index-name="indexName"
      ref="aisIndex"
    >
      <ais-search-box></ais-search-box>
      <ais-results ref="searchResults">
        <template slot-scope="{ result }">
          <search-result
            :resultID="result.objectID"
            :key="result.objectID"
            v-if="result"
          />
        </template>
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
import db from './firebaseInit'
import searchResult from './components/search-result'

export default {
  name: 'search',
  components: {
    searchResult
  },
  data () {
    return {
      apiKey: ALGOLIA_API_KEY,
      appId: ALGOLIA_APP_ID,
      indexName: 'movie_title',
    }
  },
  mounted() {
    const movieRef = db.collection('movies')
      .onSnapshot( newDoc => {
         newDoc.docChanges().forEach((change) => {
           change.type === "added" ? this.refreshResults() : null
        })
      })
  },
  methods: {
    refreshResults () {
      if (this.$refs.aisIndex) {
        const searchStore = this.$refs.aisIndex._localSearchStore
        searchStore.clearCache()
        searchStore.refresh()
      }
    }
  }
}
 
</script>

<style>
.search-ui {
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
