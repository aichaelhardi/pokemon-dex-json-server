import { getPokemon } from "./api.js";
import { mettreAjourListe } from "./ui.js";

async function chargerPokemons() {
 const pokemons = await getPokemon();

mettreAjourListe(pokemons);

chargerPokemons();
}
console.log(pokemons);