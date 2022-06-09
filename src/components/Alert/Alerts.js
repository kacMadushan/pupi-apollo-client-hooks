import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants/themeSettings';
import { applyStyleModifiers } from 'styled-components-modifiers';

const Alerts = ({ msg, modifiers }) => {
  return (
    <Wrapper>
      <AlertWrapper modifiers={[modifiers]}>
        Something went wrong {msg}.
      </AlertWrapper>
    </Wrapper>
  )
}

const ALERTS_MODIFIERS = {
  danger: () => `
    color: ${COLORS.tertiary};
    border: 2px solid ${COLORS.tertiary};
  `,
  success: () => `
    color: ${COLORS.primary};
    border: 2px solid ${COLORS.primary}; 
  `
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertWrapper = styled.div`
  margin: 8rem 0;
  padding: 16px;
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  text-transform: capitalize;
  border-radius: 3px;

  ${applyStyleModifiers(ALERTS_MODIFIERS)}
`;

export default Alerts;