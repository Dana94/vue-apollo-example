<template>
  <div id="app">
    <p v-if="$apollo.queries.dragonite.loading">{{$apollo.queries.dragonite.loadingKey}}</p>
    <img v-else :src="dragonite.sprite" />
    <p>{{bulbasaur}}</p>
    <Search />
  </div>
</template>

<script>
import gql from 'graphql-tag'; // need

import Search from './components/Search.vue';

export default {
  name: 'App',
  apollo: {
    // set paramters example
    dragonite: {
      query: gql`query{
        getPokemonDetailsByName(pokemon: dragonite reverse: true take: 1) {
          sprite
        }
      }`,
      loadingKey: "Loading dragonite...",
      update: data => data.getPokemonDetailsByName
    },
    // reactive parameters example
    bulbasaur: {
      query: gql`query getPokemon($pokemon: String!){
        getDexEntries(pokemon: $pokemon) {
          species
          evos
        }
      }`,
      loadingKey: "Loading bulbasaur...",
      update: data => data.getDexEntries,
      variables() {
        return {
          pokemon: "bulbasaur"
        }
      }
    }
  },
  components: {
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
