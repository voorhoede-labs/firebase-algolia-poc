<template v-if="data.movies">
  <div class="search-result__item-info">
    <img
        class="search-result__item-image"
        :src="data.movies.poster"
        :alt="data.movies.name"
    />
    <div class="search-result__item-meta">
        <h2 class="search-result__item-title">
            {{ data.movies.name }}
        </h2>
        <span>Director: {{ data.movies.director }}</span>
        <span>Stars: {{ data.movies.stars }}</span>
        <span>Genre: {{ data.movies.genre }}</span>
        <span>Metascore: {{ data.movies.metascore }}</span>
    </div>
  </div>
</template>

<script>
import db from '../firebaseInit'

export default {
  name: 'search-result',
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      id : this.result.objectID,
      data: {
        id: '',
        movies: {
          poster: '',
          name: '',
          director: '',
          stars: '',
          genre: '',
          metascore: null
        }
      }
    }
  },
  methods: {
    getData() {
      const movieRefs = db.collection('movies').doc(this.id);

      const searchResult = movieRefs.get().then(doc => {
        const data = {
          movies: doc.data(),
          id: this.id
        }

        return this.data = data 
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  },
  mounted() {
    this.getData();
  },
}
</script>

<style>
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

