import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { COLORS, WEIGHTS } from '../../constants/themeSettings';
import { Link } from 'react-router-dom';

const BUTTON_MODIFIERS = {
  small: () => `
  padding: 8px;
  font-size: 0.8rem;
  `,
  large: () => `
  padding: 16px 24px;
  font-size: 1rem;
  `
};

export const Button = styled.button`
  color: ${COLORS.primary};
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  padding: 8px 24px;
  border-radius: 2px;
  border: 0;
  min-width: 100px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  &:focus {
    outline: 3px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border: 2px solid transparent;

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  color: ${COLORS.primary};
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  padding: 8px 24px;
  border-radius: 2px;
  border: 2px solid ${COLORS.primary};
  min-width: 100px;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  &:focus {
    outline: 3px solid ${COLORS.primary};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${COLORS.primary};
    border-color: ${COLORS.white};
    color: ${COLORS.white};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
