<template>
  <div>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="280" :showPokemon="true"/>
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'
// console.log(getPokemonOptions());

export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      // console.log( this.pokemonArr);
    }
  },
  mounted() {
    this.mixPokemonArray()
    // console.log('mounted');
  }
}
</script>