import { useEffect, useState } from "react";
import { Wrapper, ImgLogo, Text } from "./styles";
import imgLogo from "../../assets/logo.png";
import imgIconPokeball from "../../assets/pokeball.png";
import { InputSearch } from "../../components/InputSearch";
import { Pokemons } from "../../components/Pokemons";
import { FilterPokemons } from "../../components/FilterPokemons";
import { typesAndColors } from './data';


export const Home = () => {
  const [arrayPokemons, setArrayPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoadPokemons = async ({ name = "", type = "" } = "") => {
    setLoading(true);
    const pokemons = await fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    ).then((result) => result.json());
    const { pokemon } = pokemons;
    if (name) {
      const filtered = pokemon.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      await setArrayPokemons(filtered);
      setLoading(false);
      return;
    }
    if (type) {
      console.log(type);
      const filtered = pokemon.filter((item) => {
        const typesString = item.type.toString();
        return typesString.toLowerCase().includes(type.toLowerCase());
      });
      await setArrayPokemons(filtered);
      setLoading(false);
      return;
    }
    await setArrayPokemons(pokemon);
    setLoading(false);
  };

  useEffect(() => {
    handleLoadPokemons();
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <ImgLogo src={imgLogo} alt="Logo Pokémon" />
      <Text>Uma Pokedex completa criada em React JS</Text>
      <InputSearch
        placeholder="Search a Pokemon"
        onClick={handleLoadPokemons}
      />

      <FilterPokemons
        imgIconPokeball={imgIconPokeball}
        cardsFilter={typesAndColors}
        onClick={handleLoadPokemons}
      />

      <Pokemons typesAndColors={typesAndColors} loading={loading} arrayPokemons={arrayPokemons} />
    </Wrapper>
  );
};
