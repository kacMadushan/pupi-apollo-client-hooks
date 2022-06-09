import React from 'react';
import styled from 'styled-components';
import { WEIGHTS, FAMILYS } from '../../constants/themeSettings';
import { useQuery } from '@apollo/client';
import { ALL_PETS } from '../../graphql/queries';
import Spinner from '../../components/Spinner/Spinner';
import Alerts from '../../components/Alert/Alerts';
import PetsGrid from '../../components/PetsGrid/PetsGrid';

const Pets = () => {
  const { loading, error, data } = useQuery(ALL_PETS);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alerts modifiers='danger' msg={error.message} />
  }

  const pets = data ? data.allPets : null;
  const petsGridElement = pets ? <PetsGrid pets={pets} /> : null;

  return (
    <>
      <SectionHeader>
        <Title>All Pets</Title>
      </SectionHeader>
      {petsGridElement}
    </>
  )
}

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

const Title = styled.h2`
  color: ${props => props.theme.themeTextColor};;
  font-size: 2rem;
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
  text-transform: capitalize;
`;

export default Pets;