import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants/themeSettings';
import PetCard from '../PetCard/PetCard';

const PetsGrid = ({ pets }) => {
  return (
    <Wrapper>
      {pets.map((pet) => <PetCard key={pet.id} {...pet} />)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 24px;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    flex-flow: row wrap;
  }
`;

export default PetsGrid;