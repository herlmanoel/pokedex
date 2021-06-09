import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FilterBlockTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1.3rem;
`;
export const FilterIconTitle = styled.img`
  width: 1.5rem;
  margin-right: 1rem;
`;
export const FilterTitle = styled.h2`
  color: #fff;
  font-weight: 300;
`;

export const FilterContent = styled.div`
  width: 100%;
  border-top: 1px solid #28536a;
  border-bottom: 1px solid #28536a;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FilterCard = styled.p`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 1rem !important;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  padding: 8px 15px;
  border-radius: 25px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: ${(props) => props.background && props.background};

  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;
