<template>
  <div id="app">
    <p>
      <img :src="dragonite.sprite" />
    </p>
    <p>{{bulbasaur}}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'; // need

export default {
  name: 'App',
  data() {
    return {
      dragonite: [],
      bulbasaur: []
    }
  },
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
    // using parameters with variables example
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
