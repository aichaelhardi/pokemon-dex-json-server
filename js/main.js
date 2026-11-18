import { getCreatures } from "./api.js";
import { mettreAjourListe } from "./ui.js";

async function chargerPokemons() {
    try {
        const pokemons = await getCreatures();
        console.log(pokemons);
        mettreAjourListe(pokemons);

    } catch (error) {
        console.log("Erreur :", error);
    }

}
chargerPokemons();