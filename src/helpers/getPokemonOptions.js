import pokemonApi from '@/api/pokemonApi'

// Se crea un arreglo con los 650 pokemons
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map(( _ , index) => index + 1)
    // console.log(pokemonsArr)
}

// Aquí se mezclan de forma aleatoria
const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5)
    const pokemons = await getPokemonsNames( mixedPokemons.splice(0,4))
    // console.table(pokemons);
}

// Esta función es la que construye los 4 nombres
const getPokemonsNames = async([a,b,c,d] = []) => {

    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name)

    const promiseArr =[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)
    
    return [
        {name: p1.data.name, id:p1.data.id},
        {name: p2.data.name, id:p2.data.id},
        {name: p3.data.name, id:p3.data.id},
        {name: p4.data.name, id:p4.data.id}
    ]
    // console.log(resps)
    
    
    
    // console.log(a,b,c,d);
}

export default getPokemonOptions