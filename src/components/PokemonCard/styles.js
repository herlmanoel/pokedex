import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => (props.color ? props.color : "#fff")};
  padding: 2rem;
  border-radius: 12px;
  transition: transform 500ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h1 {
    font-size: 1.3rem;
    color: #fff;
  }

  p {
    font-size: 0.7rem;
    color: #fff;
  }

  ${(props) =>
    props.color === "#fff" &&
    `
      h1, p {
        color: #000;
      }
    `}
`;

export const ImgPokemon = styled.img``;
