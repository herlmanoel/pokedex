
import { PokemonCard } from "../PokemonCard";
import { Wrapper } from "./styles";

export const Pokemons = ({ loading, arrayPokemons, typesAndColors }) => {
  
  return (
    <Wrapper>
      {!loading ? (
        arrayPokemons.map((item) => (
          <PokemonCard
            key={item.id}
            name={item.name}
            type={item.type}
            height={item.height}
            weight={item.weight}
            img={item.img}
            typesAndColors={typesAndColors}
          />
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </Wrapper>
  );
};
