import { pokemons } from "../../utils/pokemons";
import PokemonCard from "../PokemonCard/PokemonCard";
const PokemonsList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        margin: "2rem auto",
        maxWidth: "800px",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          types={pokemon.types}
          weight={pokemon.weight}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
