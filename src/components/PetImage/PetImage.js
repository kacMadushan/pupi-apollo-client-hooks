import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const PetImage = ({ src, name, modifiers }) => {
  return (
    <Image modifiers={[modifiers]} src={src} alt={name} />
  )
}

const IMAGE_MODIFIERS = {
  thumb: () => `
    height: 208px;
  `,
  full: () => `
    width: 100%;
    height: 608px;
  `
}

const Image = styled.img`
  width: 100%;
  object-fit: contain;

  ${applyStyleModifiers(IMAGE_MODIFIERS)}
`;

export default PetImage;