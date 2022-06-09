import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, FAMILYS } from '../../constants/themeSettings';
import PetImage from '../PetImage/PetImage';
import { ButtonLink } from '../Buttons/Buttons';

const PetCard = ({ id, name, weight, category, petImage }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <PetImage
          modifiers='thumb'
          src={petImage.full}
          name={name}
        />
      </ImageWrapper>
      <PetBody>
        <PetName>{name}</PetName>
        <PetBottomInfo>
          <PetWeight>Weight: {weight}</PetWeight>
          <PetCategory>{category}</PetCategory>
        </PetBottomInfo>
        <ButtonLink to={`/details/${id}`}>Details</ButtonLink>
      </PetBody>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 0 0 24%;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.themeBorderColor};
`;

const ImageWrapper = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${COLORS.offWhite};
`;


const PetBody = styled.div`
  padding: 12px;
`;

const PetName = styled.h3`
  color: ${props => props.theme.themeTextColor};
  font-size: 1.4rem;
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
`;

const PetBottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PetWeight = styled.h5`
  color: ${props => props.theme.themeTextColor};
  font-weight: ${WEIGHTS.normal};
  font-family: ${FAMILYS.cursive};
  font-size: 1rem;
`;

const PetCategory = styled(PetWeight)`
  color: ${COLORS.tertiary};
`;


export default PetCard;