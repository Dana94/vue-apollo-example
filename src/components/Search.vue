<template>
  <div class="hello">
    <input v-model.trim="name" placeholder="name" />
    <input v-model.trim.number="id" placeholder="id" />

    <div v-if="searchedPokemon">
      <ul>
        <li>Species: {{searchedPokemon.species}}</li>
        <li> Color: {{searchedPokemon.color}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Search',
  data() {
    return {
      name: "",
      id: ""
    }
  },
  apollo: {
    searchedPokemon: {
      // query parameters example
      query() {
        //name
        if(this.name !== "") {
          return gql`query getWithName($pokemon: String!) {
            getPokemonDetailsByFuzzy(pokemon: $pokemon) {
              species
              color
            }
          }`
        }
        // id
        else if (this.id !== "") {
          return gql`query getWithDexNumber($num: Float!){
            getDexEntryByDexNumber(num: $num)
          }`
        }
      },
      loadingKey: "Loading...",
      update: data => data.getPokemonDetailsByFuzzy || data.getDexEntryByDexNumber,
      variables() {
        return {
          pokemon: this.name,
          num: this.id
        }
      },
      skip() {
        return this.name === "" && this.id === ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
