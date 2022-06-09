import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { WEIGHTS, FAMILYS } from '../../constants/themeSettings';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PET_DETAILS_BY_ID } from '../../graphql/queries';
import Spinner from '../../components/Spinner/Spinner';
import Alerts from '../../components/Alert/Alerts';
import PetDetailsView from '../../components/PetDetailsView/PetDetailsView';

const PetDetails = () => {
  const { petId } = useParams();
  const petIdRef = useRef(petId);
  const { loading, error, data } = useQuery(PET_DETAILS_BY_ID, {
    variables: { id: petId }
  });

  useEffect(() => {
    petIdRef.current = petId
  }, [petId])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Alerts modifiers='danger' msg={error.message} />
  }

  const pet = data ? data.petById : null;
  const detailsElement = pet ? <PetDetailsView {...pet} /> : null
  return (
    <>
      <SectionHeader>
        <Title>Pet Details</Title>
      </SectionHeader>
      {detailsElement}
    </>
  )
}

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

const Title = styled.h2`
  color: ${props => props.theme.themeTextColor};
  font-size: 2rem;
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
  text-transform: capitalize;
`;

export default PetDetails;