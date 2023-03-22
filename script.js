(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(resposta => {
        resposta.results.forEach(pokemon => {
            listaPokemon.innerHTML += `<option value="${pokemon.url}">${pokemon.name}</option>`
        })
    })
})()

function buscaPokemon(){
    fetch(listaPokemon.value)
    .then(res => res.json())
    .then(pokemon => {
        pokemonImg.src = pokemon.sprites.front_default;
        pokemonTipo.innerHTML = "";
        pokemon.types.forEach(tipo => {
            pokemonTipo.innerHTML += tipo.type.name + ", ";
        })
    })
}
