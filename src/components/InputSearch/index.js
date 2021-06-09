import {
  Wrapper,
  InputComponent,
  WrapperIcon,
  IconSearch,

} from "./style.js";
import { useState } from "react";
// import { Search } from "react-feather";
import iconSearch from '../../assets/search.png';

export const InputSearch = ({ name, type, placeholder, onClick }) => {
  const [campo, setCampo] = useState("");

  async function handleSetValue(event) {
    const { value } = event.target;
    setCampo(value);
  }

  return (
    <Wrapper>
      <InputComponent
        type={type}
        id={name}
        name={name}
        value={campo}
        onChange={(event) => handleSetValue(event)}
        placeholder={placeholder}
      />
      <WrapperIcon onClick={() => onClick({ name: campo, type: null })}>
       <IconSearch  src={iconSearch}/>
      </WrapperIcon>
    </Wrapper>
  );
};
