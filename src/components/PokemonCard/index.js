
import { Wrapper, ImgPokemon } from "./styles";

export const PokemonCard = ({ name, type, height, weight, img, typesAndColors }) => {
  const types = type.join(', ').toString();
  const backgroundColor = typesAndColors.filter((item) => {
    return item.text.toLowerCase() === type[0].toLowerCase();
  })[0];
  return (
    <Wrapper color={backgroundColor?.background}>
      <ImgPokemon
        src={img}
        alt={name}
      />
      <h1> {name} </h1>
      <p>Type: {types}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </Wrapper>
  );
};
