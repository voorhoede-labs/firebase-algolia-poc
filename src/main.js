import Vue from 'vue'
import Search from './search.vue'
import InstantSearch from 'vue-instantsearch'

Vue.use(InstantSearch)

new Vue({
  el: '#search-ui',
  render: h => h(Search)
})
