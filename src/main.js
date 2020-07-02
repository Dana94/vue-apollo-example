import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo';

import ApolloClient from 'apollo-boost';

Vue.use(VueApollo)

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
