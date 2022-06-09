import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, FAMILYS } from '../../constants/themeSettings';
import PetImage from '../PetImage/PetImage';
import { ButtonLink } from '../Buttons/Buttons';

const PetDetailsView = ({ name, weight, category, petImage }) => {
  return (
    <Wrapper>
      <DetailWrapper>
        <DetailImageWrapper>
          <PetImage
            modifiers='full'
            src={petImage.full}
            name={name}
          />
        </DetailImageWrapper>
        <DetailPetName>{name}</DetailPetName>
        <DetailBottom>
          <DetailPetWeight>Weight: {weight}</DetailPetWeight>
          <DetailPetCategory>{category}</DetailPetCategory>
        </DetailBottom>
      </DetailWrapper>
      <ButtonLink to={`/`}>Back To Pets</ButtonLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  text-align: left;
`;

const DetailImageWrapper = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${COLORS.offWhite};
`;

const DetailPetName = styled.h2`
  color: ${props => props.theme.themeTextColor};
  font-size: 2rem;
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
`;

const DetailBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DetailPetWeight = styled.h5`
  color: ${props => props.theme.themeTextColor};;
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
  font-size: 1.2rem;
`;

const DetailPetCategory = styled(DetailPetWeight)`
  color: ${COLORS.tertiary};
`;

export default PetDetailsView;