import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants/themeSettings';

const Footer = () => {
  return (
    <MainFooter>
      <CopyText>&copy; 2022 by Pupi All rights reserved.</CopyText>
    </MainFooter>
  )
}

const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 1px solid ${props => props.theme.themeBorderColor};
`;

const CopyText = styled.p`
  color: ${COLORS.text};
  font-size: .8rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Footer;