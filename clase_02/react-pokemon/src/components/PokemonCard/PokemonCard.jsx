import "./PokemonCard.css";
const PokemonCard = ({ image, name, types, weight }) => {
  return (
    <div className="pokemon-card-container">
      <img alt="pokemon" src={image} width="100" />
      <h2 className="pokemon-name">{name}</h2>
      <div className="pokemon-types">
        <h3>{types[0].type.name}</h3>
        {types[1] && <h3>{types[1].type.name}</h3>}
      </div>
      <div className="pokemon-weight">
        <h3>{weight}kg</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
