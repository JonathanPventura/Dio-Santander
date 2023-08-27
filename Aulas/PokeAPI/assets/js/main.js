const pokemonLi = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const limit = 5;
let offset = 0;




function loadPokemonItens(offset, limit) {

    pokeAPI.getPokemons().then((pokemonList) => {
        const newHtml = pokemonList.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" dataset="${pokemon.number}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            
        `

        ).join('')
        console.log(typeof newHtml);

        var poketest = []

        pokemonLi.innerHTML += newHtml

        //Seleciona o pokemon clicado
        const pokemonDetalhamento = document.querySelectorAll(".pokemon") //Buscar todos os itens que tem a classe pokemon
        pokemonDetalhamento.forEach(pokemonAtribu => { //percorre as classes
            pokemonAtribu.addEventListener('click', () => { //Evento de click
                const poke_id = pokemonAtribu.getAttribute('dataset') //Pega o atribulado de click
                var url = API_URL + poke_id

                pokeAPI.getPokemon(poke_id) //GET_POKEMON
                    .then((response) => {
                        poketest.pop()
                        poketest.push(response)
                    }) //Retorna o pokemon
                    
                    
             

            })
        });

    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

function scroll() {
    if (window.scrollY + window.innerHeight >= (document.documentElement.scrollHeight) - 100) {
        offset += limit
        loadPokemonItens(offset, limit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
}

window.addEventListener('scroll', scroll)

