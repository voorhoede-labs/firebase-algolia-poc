<template>
  <div id="app">
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      index-name="movie_title">
      <ais-search-box></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <div 
          class="search-result__item" >
            <search-result 
              :resultID="result.objectID"
              :key="result.objectID"
              v-if="result" />
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
      currentResults: [],
      apiKey: ALGOLIA_API_KEY,
      appId: ALGOLIA_APP_ID,
    }
  },
  mounted() {
    db.collection('movies').get().then(doc => {
      doc.docs.forEach(doc => {
        this.currentResults.push({id :doc.id})
      })
    })

    const movieRef = db.collection('movies')
      .onSnapshot(newDoc => {
        this.listenToResults(newDoc);
      })
  },
  methods: {
    listenToResults(doc) {
      doc.docs.forEach( (doc) => {
        console.log(doc);
      })
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
