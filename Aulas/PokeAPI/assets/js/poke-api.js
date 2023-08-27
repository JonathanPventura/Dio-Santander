
const pokeAPI = {}

function  convertPokeApiDetailToPokemon(pokeDetail) {
    //console.log(pokeDetail);
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeAPI.getPokemons =  (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
            .then((detailRequest) => Promise.all(detailRequest))
            .then((pokemonsDetails) => {
                console.log(pokemonsDetails)
                return pokemonsDetails
            })
            .catch((e) => console.log(e))
}

pokeAPI.getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
           return pokemon}) //Retorna o detalhamento do pokemon
        .catch((e) => console.log(e))
            
}

