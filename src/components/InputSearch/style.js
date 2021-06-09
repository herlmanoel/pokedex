import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px
  margin-bottom: padding: 3rem;
`;

export const WrapperIcon = styled.button`
  height: 3rem;
  width: 6.6rem;

  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  /* border: 1px solid #BCBDBD; */
  border-right: 1px solid #bcbdbd;
  border-bottom: 1px solid #bcbdbd;
  border-top: 1px solid #bcbdbd;
  border-left: 1px solid #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    /* opacity: 0.1; */
    /* background-color: rgba(0, 0, 0, 0.250929); */
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 3rem;
  background: #fff;
  /* border: 1px solid #BCBDBD; */
  border-right: 1px solid #fff;
  border-bottom: 1px solid #bcbdbd;
  border-top: 1px solid #bcbdbd;
  border-left: 1px solid #bcbdbd;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;

  ::-webkit-input-placeholder {
    color: #2c3a47;
    
  }

  @media (max-width: 400px) {
    ::-webkit-input-placeholder {
      font-size: 6vw;
    }
  }
  @media (max-width: 370px) {
    ::-webkit-input-placeholder {
      font-size: 5.5vw;
    }
  }
  @media (max-width: 350px) {
    ::-webkit-input-placeholder {
      font-size: 5vw;
    }
  }
`;

export const IconSearch = styled.img`
  width: 1.5rem;

  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
