import {
  Wrapper,
  Filter,
  FilterIconTitle,
  FilterTitle,
  FilterContent,
  FilterBlockTitle,
  FilterCard,
} from "./styles";

export const FilterPokemons = ({ imgIconPokeball, cardsFilter, onClick }) => {

  return (
    <Wrapper>
      <Filter>
        <FilterBlockTitle>
          <FilterIconTitle src={imgIconPokeball} alt="Pokeball" />
          <FilterTitle>Filter by type</FilterTitle>
        </FilterBlockTitle>

        <FilterContent>
          {cardsFilter.map((item) => (
            <FilterCard
              background={item.background}
              color={item?.color}
              key={item.id}
              onClick={() => onClick({ name: null, type: item.text })}
            >
              {item.text}
            </FilterCard>
          ))}
        </FilterContent>
      </Filter>
    </Wrapper>
  );
};
