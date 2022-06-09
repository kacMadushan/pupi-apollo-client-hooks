import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, FAMILYS } from '../../constants/themeSettings';
import { ButtonLink } from '../../components/Buttons/Buttons';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <FaExclamationTriangle color={COLORS.tertiary} size="8rem" />
        <ErrorTitle>404 Not Found</ErrorTitle>
        <ErrorText>Sorry, this page does not exist</ErrorText>
        <ButtonLink to={`/`}>Go Back Pets</ButtonLink>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
`
const ErrorTitle = styled.h1`
  color: ${COLORS.secondary};
  font-size: 3rem;
  font-family: ${FAMILYS.cursive};
  margin: 0;
`;

const ErrorText = styled.p`
  color: ${COLORS.tertiary};
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 16px;
`;

export default NotFound;